import { socketStore } from '@/stores/socketStore';

export default {
  name: 'MenuView',
  methods: {
    // eslint-disable-next-line
    async request(event) {
      const usesocketStore = socketStore()
      usesocketStore.loadDeliveries();
    }
  },
  onBeforeUnmount() {
    if (socketStore.socket) {
      socketStore.socket.disconnect();
    }
  }
};
