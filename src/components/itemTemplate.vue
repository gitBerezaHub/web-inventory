<script setup lang="ts">
import { defineProps, PropType } from "vue";
interface ItemInterface {
  id: number;
  color: string;
  quantity: number;
  position: number;
}

const props = defineProps({
  item: {
    type: Object as PropType<ItemInterface>,
    required: true,
  },
});
</script>

<template>
  <div
    class="item"
    @click="$emit('openModal', props.item?.color)"
    :style="`background-color: ${props.item?.color}`"
  >
    {{ props.item.quantity }}
  </div>
</template>

<style scoped lang="scss">
.item {
  width: 6vw;
  height: 6vw;
  border-radius: 6px;
  cursor: pointer;
  background-color: #7faa65;
}
</style>
