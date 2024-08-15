<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <img class="image" src="@/assets/forest.jpg" />
    <div class="text">
      <div class="article-skeleton"></div>
      <div class="text-skeleton"></div>
      <div class="text-skeleton"></div>
      <div class="text-skeleton"></div>
      <div class="text-skeleton"></div>
      <div class="text-skeleton"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 28vw;
  height: 60vw;
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

.text {
  width: 80%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .article-skeleton {
    width: 100%;
    height: 15%;
    border-radius: 8px;
    background: linear-gradient(
      90deg,
      #3c3c3c 0%,
      #444444 51.04%,
      #333333 100%
    );
  }

  .text-skeleton {
    width: 80%;
    height: 5%;
    border-radius: 4px;
    background: linear-gradient(
      90deg,
      #3c3c3c 0%,
      #444444 51.04%,
      #333333 100%
    );
  }
}
</style>
