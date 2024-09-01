import Establishment from "../interfaces/Establishment";
import Location from "../interfaces/Location";
import Driver from "./Driver";

export default class Delivery {
  private id: string;
  private region: string;
  private driverId?: string;
  private allocating_at: Date;
  private destination: Location;
  private locomotion_type: string;
  private required_profile: string;
  private compass_direction: string;
  private establishment: Establishment;

  constructor(
    id: string,
    region: string,
    allocating_at: Date,
    destination: Location,
    locomotion_type: string,
    required_profile: string,
    compass_direction: string,
    establishment: Establishment,
  ) {
    this.id = id;
    this.region = region;
    this.destination = destination;
    this.allocating_at = allocating_at;
    this.establishment = establishment;
    this.locomotion_type = locomotion_type;
    this.required_profile = required_profile;
    this.compass_direction = compass_direction;
  }

  /**
   * getDelivery
   */
  public getDelivery() {
    return {
      id: this.id,
      region: this.region,
      driverId: this.driverId,
      destination: this.destination,
      allocating_at: this.allocating_at,
      establishment: this.establishment,
      locomotion_type: this.locomotion_type,
      required_profile: this.required_profile,
      compass_direction: this.compass_direction,
    }
  }

  /**
   * linkDriver
   */
  public linkDriver(driver: Driver) {
    driver.addDeliveryToBackpack(this);

    this.driverId = driver.getDriver().id;
    return true;
  }

  /**
   * unlinkDriver
   */
  public unlinkDriver(driver: Driver) {
    driver.removeDeliveryToBackpack()

    delete this.driverId;
    return true;
  }
}