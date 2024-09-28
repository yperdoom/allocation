import { Request, Response, NextFunction } from "express";

export default (_req: Request, res: Response, _next: NextFunction) => {
  res.statusCode = 501;
  return res.send('resourse is not implemented')
}