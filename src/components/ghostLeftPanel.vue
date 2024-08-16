<script setup lang="ts">
import TextSkeleton from "@/components/textSkeleton.vue";
</script>

<template>
  <div class="wrapper">
    <img class="image" src="@/assets/forest.jpg" />
    <text-skeleton />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 28vw;
  height: 75vh;
  background-color: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.image {
  width: 88%;
  height: 40%;
  filter: blur(4px);
}
</style>
