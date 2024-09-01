import { Express } from "express"
import Logger from "../../../library/Logger"
const log = new Logger()

export default (app: Express) => {

  app.get('/deliveries', () => {
    log.log('get deliveries')
  })

  app.post('/deliveries', () => {
    log.log('create deliveries')
  })

  return app;
}