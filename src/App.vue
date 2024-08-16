<template>
  <main>
    <div class="top">
      <ghost-left-panel />
      <inventory-grid />
    </div>
    <div class="bottom">
      <ghost-bottom-panel />
    </div>
  </main>
</template>

<script lang="ts" setup>
import GhostLeftPanel from "@/components/ghostLeftPanel.vue";
import InventoryGrid from "@/components/inventoryGrid.vue";
import GhostBottomPanel from "@/components/ghostBottomPanel.vue";
</script>

<style lang="scss">
@import "src/styles/reset";

#app {
  background-color: #1d1d1d;
  width: 100vw;
  height: 100vh;
  font-family: Inter, sans-serif;
}

main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.top {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
