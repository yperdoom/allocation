import { defineStore } from 'pinia';
import router from '@/router';
import { deliveriesStore } from './deliveriesStore';
import { driversStore } from './driversStore';

export const socketStore = defineStore('socket', {
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
        let data = event.data;

        try {
          data = JSON.parse(data);
        } catch (error) {
          console.log(error.message);
        }

        console.log('Mensagem recebida do servidor:', data);

        if (data.type === 'newDelivery') {
          deliveriesStore().addDelivery(data.body);
          router.replace({ name: 'map' });
        }
        if (data.type === 'updateDelivery') {
          deliveriesStore().updateDelivery(data.body);
          router.replace({ name: 'map' });
        }

        if (data.type === 'newDriver') {
          driversStore().addDriver(data.body);
          router.replace({ name: 'map' });
        }
        if (data.type === 'updateDriver') {
          driversStore().updateDriver(data.body);
          router.replace({ name: 'map' });
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
