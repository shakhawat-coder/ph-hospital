import { Request, Response } from "express";
import status from "http-status";
import { UserService } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { apiResponse } from "../../utils/apiResponse";

const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await UserService.createDoctor(payload);

  apiResponse(res, {
    httpstatuscode: status.CREATED,
    success: true,
    message: "Doctor registered successfully",
    data: result,
  });
});

export const UserController = {
  createDoctor,
};
