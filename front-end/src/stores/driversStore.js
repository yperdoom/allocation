import { defineStore } from 'pinia';
import router from '@/router';
export const socketStore = defineStore('drivers', {
  state: () => ({
    drivers: [],
    driverId: null,
  }),
  getters: {
    getDrivers() {
      return this.drivers;
    },
    getDriver() {
      if (this.driverId) {
        return this.drivers.find(driver => driver._id == this.driverId)
      }
      return {}
    }
  },
  actions: {
    async setDriverId(driverId) {
      this.driverId = driverId;
    }
  }
})
