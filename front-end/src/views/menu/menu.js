import { deliveriesStore } from '@/stores/deliveriesStore';

export default {
  name: 'MenuView',
  methods: {
    // eslint-disable-next-line
    async request(event) {
      const useDeliveriesStore = deliveriesStore()
      useDeliveriesStore.loadDeliveries();
    }
  },
  onBeforeUnmount() {
    if (deliveriesStore.socket) {
      deliveriesStore.socket.disconnect();
    }
  }
};
