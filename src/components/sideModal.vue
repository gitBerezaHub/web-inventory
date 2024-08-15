<script setup lang="ts">
import ItemImage from "@/components/itemImage.vue";
import TextSkeleton from "@/components/textSkeleton.vue";
</script>

<template>
  <div class="modal-wrapper">
    <item-image @christ-clicked="$emit('closeModal')" />
    <hr />
    <text-skeleton />
    <hr />
    <button class="delete-button">Удалить предмет</button>
  </div>
</template>

<style scoped lang="scss">
.modal-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  height: 60vw;
  border: 1px solid #4d4d4d;
  background: #262626;
}

hr {
  background-color: #4d4d4d;
  width: 85%;
}

.delete-button {
  background-color: #ff8888;
  width: 85%;
  height: 8%;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 17px;
}
</style>
