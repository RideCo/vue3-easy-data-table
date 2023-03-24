import { ref, Ref, ComputedRef, computed, watch } from 'vue';
import type { Item } from '../types/main';
import type { EmitsEventName } from '../types/internal';

export default function useExpandableRow(
  items: Ref<Item[]>,
  prevPageEndIndex: ComputedRef<number>,
  emits: (event: EmitsEventName, ...args: any[]) => void,
  itemsExpanded: Ref<Item[]>,
) {
  const expandingItemIndexList = ref<number[]>([]);

  watch(itemsExpanded.value, (value) => {
      const indexList = value.map(expandedItem => items.value.findIndex((item) => JSON.stringify(item) === JSON.stringify(expandedItem)))
      expandingItemIndexList.value = indexList
  })


  const itemsExpandedComputed = computed({
    get: () => itemsExpanded.value ?? [],
    set: (value) => {
      emits('update:itemsExpanded', value);
    },
  });

  const updateExpandingItemIndexList = (expandingItemIndex: number, expandingItem: Item, event: Event) => {
    event.stopPropagation();
    const index = expandingItemIndexList.value.indexOf(expandingItemIndex);
    if (index !== -1) {
      expandingItemIndexList.value.splice(index, 1);
      itemsExpandedComputed.value.splice(index, 1)  
    } else {
      const currentPageExpandIndex = items.value.findIndex((item) => JSON.stringify(item) === JSON.stringify(expandingItem));
      emits('expandRow', prevPageEndIndex.value + currentPageExpandIndex, expandingItem);
      expandingItemIndexList.value.push(prevPageEndIndex.value + currentPageExpandIndex);
      itemsExpandedComputed.value.push(expandingItem)
    }
  };

  const clearExpandingItemIndexList = () => {
    expandingItemIndexList.value = [];
  };

  return {
    expandingItemIndexList,
    updateExpandingItemIndexList,
    clearExpandingItemIndexList,
  };
}
