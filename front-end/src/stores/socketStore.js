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
        console.log('Mensagem recebida do servidor:', event.data);
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
