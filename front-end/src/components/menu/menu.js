import { deliveriesStore } from '@/stores/deliveriesStore';

export default {
  name: 'MenuView',
  methods: {
    // eslint-disable-next-line
    async request(event) {
      await deliveriesStore().loadDeliveries()
      console.log(deliveriesStore().getDeliveries)
      deliveriesStore().setDeliveryId("66d768b884989e88886a64a5")
      console.log(deliveriesStore().getDelivery)

    }
  }
};
