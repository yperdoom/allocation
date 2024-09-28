import app from './app';
import appWs from './app-ws';
import Logger from './library/Logger';
import loadingRoutes from './config/loadingRoutes';
const PORT = 3333;
const log = new Logger();

const application = loadingRoutes(app);


const server = application.listen(PORT, () => {
  log.trace(`api initiate now on port ${PORT}`);
});

const wss = appWs(server);
application.set('wss', wss)
