import { Express } from "express"

export default (app: Express) => {

  app = _imported("../infra/http/deliveries/deliveriesRoutes", app);
  app = _imported("../infra/http/drivers/driversRoutes", app);

  return app;
}

function _imported(path: string, app: Express) {
  const route = require(path);
  app = route.default(app);

  return app;
}
