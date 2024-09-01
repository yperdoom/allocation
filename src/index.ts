import express from 'express';
import Logger from './library/Logger';
import loadingRoutes from './config/loadingRoutes';

const log = new Logger();

const app = express();

const application = loadingRoutes(app);

application.listen(3333, () => {
  log.trace('api initiate now');
});