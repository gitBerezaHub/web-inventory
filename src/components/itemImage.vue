<script setup lang="ts"></script>

<template>
  <div class="image-wrapper">
    <img
      class="close-svg"
      src="@/assets/close.svg"
      alt=""
      @click="$emit('christClicked')"
    />
  </div>
</template>

<style scoped lang="scss">
.image-wrapper {
  width: 100%;
  height: 35%;
}

.close-svg {
  position: absolute;
  top: 6px;
  right: 6px;
}
</style>
