import { defineStore } from 'pinia';
import router from '@/router';

export const socketStore = defineStore('deliveries', {
  state: () => ({
    socket: null,
  }),
  actions: {
    connectSocket() {
      this.socket = new WebSocket('ws://localhost:3333/map');
      this.socket.onopen = () => {
        console.log('Conectado ao WebSocket');
        this.socket.send('Olá, servidor!');
      };

      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('Mensagem recebida do servidor:', data);

        if (data.type === 'newDelivery') {
          console.log('added delivery')
        }
        if (data.type === 'updateDelivery') {
          console.log('updated delivery')
        }

        if (data.type === 'newDriver') {
          console.log('added driver')
        }
        if (data.type === 'updateDriver') {
          console.log('updated driver')
        }
      };

      this.socket.onerror = (error) => {
        console.error('Erro no WebSocket:', error);
      };

      this.socket.onclose = () => {
        console.log('Conexão WebSocket fechada');
      };
    },

    async loadMap() {
      if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
        this.connectSocket();
      }

      router.push({ name: 'map' }); // Direciona para a tela com o mapa
    }
  }
})
