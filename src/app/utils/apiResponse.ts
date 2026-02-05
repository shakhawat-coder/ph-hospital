import { Response } from "express";

interface ApiResponse<T> {
  message: string;
  httpstatuscode: number;
  success: boolean;
  data?: T;
}

export const apiResponse = <T>(res: Response, responseData: ApiResponse<T>) => {
  const { httpstatuscode, success, message, data } = responseData;
  res.status(httpstatuscode).json({
    success,
    message,
    data,
  });
};
