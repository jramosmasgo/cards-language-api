import { Response } from "express";

export default class ResponseApi<T> {
  private response: Response;

  constructor(res: Response) {
    this.response = res
  }

  send(data: T, message: string, code?: number) {
    return this.response.status(code ?? 200).json({
      ok: true,
      data,
      message,
    });
  }
}
