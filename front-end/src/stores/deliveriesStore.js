import { defineStore } from 'pinia';

export const deliveriesStore = defineStore('deliveries', {
  state: () => ({
    deliveries: [],
    deliveryId: null,
  }),
  getters: {
    getDeliveries() {
      return this.deliveries;
    },
    getDelivery() {
      if (this.deliveryId) {
        return this.deliveries.find(delivery => delivery._id == this.deliveryId)
      }
      return {}
    }
  },
  actions: {
    setDeliveryId(deliveryId) {
      this.deliveryId = deliveryId;
    },
    addDelivery(delivery) {
      this.deliveries.push(delivery);

      console.log(this.deliveries);
      // update map
    },
    updateDelivery(delivery) {
      for (let i = 0; i < this.deliveries.length; i++) {
        if (this.deliveries[i].id === delivery.id) {
          this.deliveries.splice(i, 1, delivery);
        }
      }

      // update map
    }
  }
})
