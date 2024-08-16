<script setup lang="ts">
import ItemImage from "@/components/itemImage.vue";
import TextSkeleton from "@/components/textSkeleton.vue";
import { defineProps, PropType } from "vue";
import { ItemInterface } from "@/interfaces";
import { useItemStore } from "@/store/itemStore";

const store = useItemStore();

const props = defineProps({
  receivedItem: {
    type: Object as PropType<ItemInterface>,
    required: true,
  },
});

function deleteItem() {
  store.deleteItem(props.receivedItem.id);
  store.saveItemsData();
}
</script>

<template>
  <div class="modal-wrapper">
    <item-image
      @christ-clicked="$emit('closeModal')"
      :color="props.receivedItem.color"
    />
    <hr />
    <text-skeleton />
    <hr />
    <button class="delete-button" @click="deleteItem">Удалить предмет</button>
  </div>
</template>

<style scoped lang="scss">
.modal-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 25%;
  height: 75vh;
  border: 1px solid #4d4d4d;
  background: #262626;
}

hr {
  background-color: #4d4d4d;
  width: 85%;
}

.delete-button {
  cursor: pointer;
  background-color: #ff8888;
  width: 85%;
  height: 8%;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 17px;
  margin-bottom: 10px;
}
</style>
