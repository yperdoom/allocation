import { Express } from "express"
import { newDelivery, updateDelivery } from './deliveriesController';
import notImplemented from "../../../domain/errors/notImplemented";

export default (app: Express) => {

  app.get('/deliveries', notImplemented)

  app.post('/deliveries', newDelivery)

  app.put('/deliveries', updateDelivery)

  return app;
}