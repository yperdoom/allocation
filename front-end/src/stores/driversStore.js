import { defineStore } from 'pinia';
export const driversStore = defineStore('drivers', {
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
    setDriverId(driverId) {
      this.driverId = driverId;
    },
    addDriver(driver) {
      this.drivers.push(driver);

      // update map
    },
    updateDriver(driver) {
      for (let i = 0; i < this.drivers.length; i++) {
        if (this.drivers[i].id === driver.id) {
          this.drivers.splice(i, 1, driver);
        }
      }

      // update map
    }
  }
})
