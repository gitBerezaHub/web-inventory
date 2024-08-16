import { defineStore } from "pinia";

export const useItemStore = defineStore("itemList", {
  state: () => {
    return {
      itemList: [
        {
          id: 1,
          color: "#7faa65",
          quantity: 4,
          position: 1,
        },
        {
          id: 2,
          color: "#aa9765",
          quantity: 2,
          position: 2,
        },
        {
          id: 3,
          color: "#656caa",
          quantity: 5,
          position: 3,
        },
      ],
    };
  },
  actions: {
    saveItemsData() {
      localStorage.setItem("itemsData", JSON.stringify(this.itemList));
    },
    loadItemsData() {
      const itemsData = localStorage.getItem("itemsData");
      if (itemsData) {
        this.itemList = JSON.parse(itemsData);
      }
    },
    deleteItem(id: number) {
      const certainItemIndex = this.itemList.findIndex(
        (item) => item.id === id
      );
      if (this.itemList[certainItemIndex].quantity > 1) {
        this.itemList[certainItemIndex].quantity -= 1;
      }
    },
  },
});
