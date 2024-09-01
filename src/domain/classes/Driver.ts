import Location from "../interfaces/Location";
import Delivery from "./Delivery";

export default class Driver {
  private id: string;
  private email: string;
  private region: string;
  private status: string;
  private profile: string;
  private location: Location;
  private locomotion_type: string;
  private backpack?: Delivery[];

  constructor(
    id: string,
    email: string,
    region: string,
    status: string,
    profile: string,
    location: Location,
    locomotion_type: string,
  ) {
    this.id = id;
    this.email = email;
    this.region = region;
    this.status = status;
    this.profile = profile;
    this.location = location;
    this.locomotion_type = locomotion_type;
  }

  /**
   * getDriver
   */
  public getDriver() {
    return {
      id: this.id,
      email: this.email,
      region: this.region,
      status: this.status,
      profile: this.profile,
      location: this.location,
      locomotion_type: this.locomotion_type,
    }
  }

  /**
   * addDeliveryToBackpack
   */
  public addDeliveryToBackpack(delivery: Delivery) {
    this.backpack?.push(delivery);
    return true;
  }

  /**
   * removeDeliveryToBackpack
   */
  public removeDeliveryToBackpack() {
    if (this.backpack && Array.isArray(this.backpack)) {
      if ((this.backpack?.length == 1 || this.backpack?.length == 0)) {
        delete this.backpack;
        return true;
      }
      let lista: Delivery[] = [];
      this.backpack?.map((delivery) => {
        if (delivery.getDelivery().id !== this.id) {
          lista.push(delivery)
        }
      });

      this.backpack = lista;
      return true;
    }
    return false;
  }
}