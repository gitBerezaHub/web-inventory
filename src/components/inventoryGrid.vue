<script setup lang="ts">
import ItemTemplate from "@/components/itemTemplate.vue";
import SideModal from "@/components/sideModal.vue";
import { ref } from "vue";
import { useItemStore } from "@/store/itemStore";
import { storeToRefs } from "pinia";
import { ItemInterface } from "@/interfaces";

const isModalOpen = ref(false);
let receivedItem: ItemInterface;

function openModal(item: ItemInterface) {
  isModalOpen.value = true;
  receivedItem = item;
}

const store = useItemStore();
store.loadItemsData();
const itemListStore = storeToRefs(store);
const items = itemListStore.itemList.value;

const touchedItem = ref(0);
function changePosition(position: number) {
  if (touchedItem.value) {
    items.filter((item) => item.id === touchedItem.value)[0].position =
      position;
  }
  touchedItem.value = 0;
  store.saveItemsData();
}
</script>

<template>
  <div class="inventory-wrapper">
    <div class="cell" v-for="i in 25" :key="i" @mouseup="changePosition(i)">
      <item-template
        v-if="items.filter((item) => item.position === i)[0]"
        :item="items.filter((item) => item.position === i)[0]"
        @open-modal="openModal"
        @mousedown="
          touchedItem = items.filter((item) => item.position === i)[0].id
        "
      />
      <div
        class="item-quantity"
        v-if="items.filter((item) => item.position === i)[0]"
      >
        {{ items.filter((item) => item.position === i)[0].quantity }}
      </div>
    </div>
  </div>

  <Transition name="slide-fade">
    <side-modal
      :receivedItem="receivedItem"
      class="modal"
      v-if="isModalOpen"
      @close-modal="isModalOpen = false"
    />
  </Transition>
</template>

<style scoped lang="scss">
.inventory-wrapper {
  height: 75vh;
  width: 60%;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(5, 20%);
  z-index: 1;
  user-select: none;
}

.cell {
  position: relative;
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

.item-quantity {
  position: absolute;
  right: 0;
  bottom: 0;
  color: #4d4d4d;
  border: 1px solid #4d4d4d;
  border-radius: 6px 0 0 0;
  width: 16%;
  height: 16%;
  text-align: center;
}
</style>
