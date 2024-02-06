import { Response, Request, NextFunction } from "express";
import ResponseApi from "@core/response";

const errorMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  new ResponseApi({
    code: err.statusCode ?? 500,
    message: err.message,
    ok: false,
  }).sendResponse(res);
};

export default errorMiddleware;
