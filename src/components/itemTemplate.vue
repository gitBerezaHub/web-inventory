<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { ItemInterface } from "@/interfaces";

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
    @click="$emit('openModal', props.item)"
    :style="`background-color: ${props.item.color}`"
  ></div>
</template>

<style scoped lang="scss">
.item {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  height: 60%;
  aspect-ratio: 1 / 1;
  border-radius: 6px;
  cursor: pointer;
  background-color: #7faa65;
}
</style>
