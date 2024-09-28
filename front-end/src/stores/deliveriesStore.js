import { defineStore } from 'pinia';
import router from '@/router'; // Importe o router
// const socket = new WebSocket('ws://localhost:3333/map');

export const deliveriesStore = defineStore('deliveries', {
  state: () => ({
    deliveries: [],
    deliveryId: null,
    socket: null,
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
    connectSocket() {
      this.socket = new WebSocket('ws://localhost:3333/map');
      this.socket.onopen = () => {
        console.log('Conectado ao WebSocket');
        this.socket.send('Olá, servidor!');
      };

      this.socket.onmessage = (event) => {
        console.log('Mensagem recebida do servidor:', event.data);
      };

      this.socket.onerror = (error) => {
        console.error('Erro no WebSocket:', error);
      };

      this.socket.onclose = () => {
        console.log('Conexão WebSocket fechada');
      };
    },

    async loadDeliveries() {
      if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
        this.connectSocket();
      }

      router.push({ name: 'map' }); // Direciona para a tela com o mapa
    },
    async setDeliveryId(deliveryId) {
      this.deliveryId = deliveryId;
    }
  }
})
