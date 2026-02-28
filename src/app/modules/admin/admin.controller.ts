import { Request, Response } from "express";
import status from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { apiResponse } from "../../utils/apiResponse";
import { AdminService } from "./admin.service";

const getAllAdmins = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getAllAdmins();

  apiResponse(res, {
    httpstatuscode: status.OK,
    success: true,
    message: "Admins fetched successfully",
    data: result,
  });
});

const getAdminById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const admin = await AdminService.getAdminById(id as string);

  apiResponse(res, {
    httpstatuscode: status.OK,
    success: true,
    message: "Admin fetched successfully",
    data: admin,
  });
});

const updateAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;

  const updatedAdmin = await AdminService.updateAdmin(id as string, payload);

  apiResponse(res, {
    httpstatuscode: status.OK,
    success: true,
    message: "Admin updated successfully",
    data: updatedAdmin,
  });
});

const deleteAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = req.user;

  const result = await AdminService.deleteAdmin(id as string, user);

  apiResponse(res, {
    httpstatuscode: status.OK,
    success: true,
    message: "Admin deleted successfully",
    data: result,
  });
});

export const AdminController = {
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
  getAdminById,
};
