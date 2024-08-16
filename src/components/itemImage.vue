<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  color: String,
});
</script>

<template>
  <div class="image-wrapper">
    <img
      class="close-svg"
      src="@/assets/close.svg"
      alt=""
      @click="$emit('christClicked')"
    />
    <div class="itemImage" :style="`background-color: ${props.color}`"></div>
  </div>
</template>

<style scoped lang="scss">
.image-wrapper {
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-svg {
  position: absolute;
  top: 6px;
  right: 6px;
}

.itemImage {
  width: 60%;
  aspect-ratio: 1 / 1;
  background-color: #f00;
}
</style>
