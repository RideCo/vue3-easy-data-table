import { ref, Ref, ComputedRef, watchEffect } from 'vue';
import type { Item, ItemExpandedKey } from '../types/main';
import type { EmitsEventName } from '../types/internal';
import { getItemValue } from '../utils';

export default function useExpandableRow(
  items: Ref<Item[]>,
  prevPageEndIndex: ComputedRef<number>,
  emits: (event: EmitsEventName, ...args: any[]) => void,
  itemsExpanded: Ref<Item[]>,
  itemsExpandedKey: Ref<ItemExpandedKey>
) {
  const expandingItemIndexList = ref<number[]>([]);

  const updateExpandingItemIndexList = (expandingItemIndex: number, expandingItem: Item, event: Event) => {
    event.stopPropagation();
    const index = expandingItemIndexList.value.indexOf(expandingItemIndex);
    if (index !== -1) {
      expandingItemIndexList.value.splice(index, 1);
      emitItemsExpanded();
    } else {
      const currentPageExpandIndex = getItemIndex(expandingItem)
      emits('expandRow', prevPageEndIndex.value + currentPageExpandIndex, expandingItem);
      expandingItemIndexList.value.push(prevPageEndIndex.value + currentPageExpandIndex);
      emitItemsExpanded();
    }
  };

  const clearExpandingItemIndexList = () => {
    expandingItemIndexList.value = [];
  };

  watchEffect(() => {
    const indexList = itemsExpanded.value.reduce<number[]>((itemsExpandedIndex, expandedItem) => {
      const index = getItemIndex(expandedItem)
      if (index !== -1) {
        itemsExpandedIndex.push(index)
      }
      return itemsExpandedIndex
    }, [])
    expandingItemIndexList.value = indexList
  })


  function emitItemsExpanded() {
    emits('update:itemsExpanded', expandingItemIndexList.value.map(index => items.value[index]))
  }

  function getItemIndex(expandingItem: Item) {
    const expandedKey = itemsExpandedKey.value
    let comparatorFunction = (item: Item) => JSON.stringify(item) === JSON.stringify(expandingItem)
    if (expandedKey && typeof expandedKey === 'function') {
      comparatorFunction = (item: Item) => expandedKey(item) === expandedKey(expandingItem)
    }
    if (expandedKey && typeof expandedKey === 'string') {
      comparatorFunction = (item: Item) => getItemValue(expandedKey, item) === getItemValue(expandedKey, expandingItem)
    }
    return items.value.findIndex(comparatorFunction);
  }

  return {
    expandingItemIndexList,
    updateExpandingItemIndexList,
    clearExpandingItemIndexList,
  };
}
