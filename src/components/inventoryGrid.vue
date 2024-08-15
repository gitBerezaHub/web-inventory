<script setup lang="ts">
import ItemTemplate from "@/components/itemTemplate.vue";
</script>

<template>
  <div class="inventory-wrapper">
    <div class="cell">
      <item-template :id="1" />
    </div>
    <div class="cell"><item-template :id="2" /></div>
    <div class="cell"><item-template :id="3" /></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
  </div>
</template>

<style scoped lang="scss">
.inventory-wrapper {
  width: 60vw;
  height: 60vw;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(5, 20%);
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #4d4d4d;
  background-color: #262626;
}
</style>
