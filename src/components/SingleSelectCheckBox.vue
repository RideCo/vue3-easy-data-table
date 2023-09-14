<template>
  <div
    class="easy-checkbox"
    @click.stop.prevent="emits('change')"
  >
    <input
      type="checkbox"
      :checked="checked"
    >
    <label for="checbox" />
  </div>
</template>

<script setup lang="ts">

const emits = defineEmits(['change']);

defineProps({
  checked: { type: Boolean, required: true },
});

</script>

<style lang="scss" scoped>
@import '../scss/checbox.scss';


.easy-checkbox {
  input[type="checkbox"] {
    &:checked {
      + label:before{
        background: var(--easy-table-theme-color);
      }
    }
  }
}
</style>
