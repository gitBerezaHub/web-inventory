<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  id: Number,
});
</script>

<template>
  <div
    class="item-1"
    v-if="props.id == 1"
    @click="() => console.log('open')"
  ></div>
  <div class="item-2" v-if="props.id == 2"></div>
  <div class="item-3" v-if="props.id == 3"></div>
</template>

<style scoped lang="scss">
.item-1,
.item-2,
.item-3 {
  width: 6vw;
  height: 6vw;
  border-radius: 6px;
}

.item-1 {
  background-color: #7faa65;
}

.item-2 {
  background-color: #aa9765;
}

.item-3 {
  background-color: #656caa;
}
</style>
