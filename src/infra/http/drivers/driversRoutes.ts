import { Express } from "express"
import Logger from "../../../library/Logger"
const log = new Logger()

export default (app: Express) => {

  app.get('/drivers', () => {
    log.log('get drivers')
  })

  app.post('/drivers', () => {
    log.log('create drivers')
  })

  return app;
}