<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="text-skeleton"></div>
    <img src="@/assets/close.svg" alt="" class="close-svg" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90vw;
  height: 10vh;
  background-color: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
}

.text-skeleton {
  width: 90%;
  height: 50%;
  border-radius: 12px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
}

.close-svg {
  width: 18px;
  aspect-ratio: 1/ 1;
}
</style>
