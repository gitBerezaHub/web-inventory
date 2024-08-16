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
});
