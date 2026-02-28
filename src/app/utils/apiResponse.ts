import { Response } from "express";
import { number } from "zod";

interface ApiResponse<T> {
  message: string;
  httpstatuscode: number;
  success: boolean;
  data?: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const apiResponse = <T>(res: Response, responseData: ApiResponse<T>) => {
  const { httpstatuscode, success, message, data, meta } = responseData;
  res.status(httpstatuscode).json({
    success,
    message,
    data,
    meta,
  });
};
