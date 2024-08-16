<script setup lang="ts">
import ItemTemplate from "@/components/itemTemplate.vue";
import SideModal from "@/components/sideModal.vue";
import { ref } from "vue";
import { useItemStore } from "@/store/itemStore";
import { storeToRefs } from "pinia";

const isModalOpen = ref(false);
const receivedColor = ref("#ffffff");

function openModal(color: string) {
  isModalOpen.value = true;
  receivedColor.value = color;
}

const store = useItemStore();
const itemListStore = storeToRefs(store);
const items = itemListStore.itemList.value;
</script>

<template>
  <div class="inventory-wrapper">
    <div class="cell" v-for="i in 25">
      <item-template
        v-if="items[i - 1] && items[i - 1].position == i"
        :item="items[i - 1]"
        @open-modal="openModal"
      />
    </div>
  </div>

  <Transition name="slide-fade">
    <side-modal
      :receivedColor="receivedColor"
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

  &:hover {
    background-color: #2f2f2f;
  }
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
