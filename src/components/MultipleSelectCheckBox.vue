<template>
  <div
    class="easy-checkbox"
    @click.stop.prevent="toggleChecked"
  >
    <input
      type="checkbox"
      :checked="isChecked"
      :class="status"
    >
    <label for="checbox" />
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue';

const emits = defineEmits(['change']);

const props = defineProps({
  status: { type: String as PropType<'noneSelected' | 'partSelected' | 'allSelected'>, required: true },
});

const isChecked = computed(() => props.status === 'allSelected');

const toggleChecked = () => {
  emits('change', !isChecked.value);
};

</script>

<style lang="scss" scoped>
@import '../scss/checbox.scss';


.easy-checkbox {
  input[type="checkbox"] {
    &.allSelected, &.partSelected {
      + label:before{
        background: var(--easy-table-theme-color);
      }
    }
  }
}
</style>
