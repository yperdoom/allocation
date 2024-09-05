// import api from '../../services/api';
import { api } from '@/services/api';
import { defineStore } from 'pinia';

export const deliveriesStore = defineStore('deliveries', {
  state: () => ({
    deliveries: [],
    deliveryId: null
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
      const filters = [
        'fields=pickup.address',
        'fields=region',
        'fields=status',
        'fields=delivery_man._id',
        'fields=ref',
        'region=riodosindios',
        'status=allocating',
        //&status=allocated&status=collecting&status=collected`
      ]
      let params = ''

      for (let i = 0; i < filters.length; i++) {
        params += filters[i]

        if (i !== (filters.length - 1)) {
          params += '&'
        }
      }

      await api.get(`/deliveries?${params}`).catch(() => {
        alert("não foi possível pegar os dados da entrega!");
      }).then(({ data, status }) => {
        if (status === 200) {
          if (data.docs.length === 0) {
            alert("nenhuma entrega encontrada :/");
          }
          this.deliveries = data.docs
        }
      });
    },
    async setDeliveryId(deliveryId) {
      this.deliveryId = deliveryId;
    }
  }
})
