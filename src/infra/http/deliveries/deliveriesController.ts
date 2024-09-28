import { Request, Response, NextFunction } from "express";
import Logger from "../../../library/Logger";
import { WebSocket } from "ws";
const log = new Logger();

export function newDelivery(req: Request, res: Response, _next: NextFunction) {
  const { body } = req;
  log.log('create delivery');

  const wss = req.app.get('wss');

  if (!wss) {
    return res.send('web socket is not available!');
  }

  const message = {
    type: 'newDelivery',
    data: body
  };

  wss.clients.forEach((client: any) => {
    if (client) {
      client.send(JSON.stringify(message));
    }
  });

  return res.send("message sent to connected clients");
}

export function updateDelivery(req: Request, res: Response, _next: NextFunction) {
  const { body } = req;
  log.log('update delivery');

  const wss = req.app.get('wss');

  if (!wss) {
    return res.send('web socket is not available!');
  }

  const message = {
    type: 'updateDelivery',
    data: body
  };

  wss.clients.forEach((client: any) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message))
    }
  });

  return res.send("message sent to connected clients");
}
