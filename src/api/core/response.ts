import { Response } from "express";

interface PropertiesResponseApi<T> {
  ok: boolean;
  data: T | null;
  message: string;
  code: number;
}

export default class ResponseApi<T> {
  data: PropertiesResponseApi<T>;

  constructor(param: Partial<PropertiesResponseApi<T>>) {
    this.data = {
      ok: param.ok != undefined ? false : true,
      data: param.data || null,
      message: param.message!,
      code: param.code || 200,
    };
  }

  sendResponse(res: Response) {
    return res.status(this.data.code).json(this.data);
  }
}
