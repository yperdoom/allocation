import { Express } from "express"
import { newDriver, updateDriver } from "./driversController"
import notImplemented from "../../../domain/errors/notImplemented"

export default (app: Express) => {

  app.get('/drivers', notImplemented)

  app.post('/drivers', newDriver)

  app.put('/drivers', updateDriver)

  return app;
}