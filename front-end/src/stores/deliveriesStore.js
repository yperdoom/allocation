import { defineStore } from 'pinia';
import router from '@/router';
export const socketStore = defineStore('deliveries', {
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
    async loadDeliveries() {
      if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
        this.connectSocket();
      }
    },
    async setDeliveryId(deliveryId) {
      this.deliveryId = deliveryId;
    }
  }
})
