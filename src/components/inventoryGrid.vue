<script setup lang="ts">
import ItemTemplate from "@/components/itemTemplate.vue";
import SideModal from "@/components/sideModal.vue";
import { ref } from "vue";

const isModalOpen = ref(false);
function openModal() {
  isModalOpen.value = true;
}
</script>

<template>
  <div class="inventory-wrapper">
    <div class="cell">
      <item-template :id="1" @open-modal="openModal" />
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
  <Transition name="slide-fade">
    <side-modal
      class="modal"
      v-if="isModalOpen"
      @close-modal="isModalOpen = false"
    />
  </Transition>
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
  z-index: 1;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #4d4d4d;
  background-color: #262626;
}

.modal {
  position: absolute;
  z-index: 2;
  right: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(200px);
}
</style>
