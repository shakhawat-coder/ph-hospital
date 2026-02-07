import { Request, Response } from "express";
import { SpecialityService } from "./speciality.service";
import { apiResponse } from "../../utils/apiResponse";
import { catchAsync } from "../../utils/catchAsync";
import status from "http-status/cloudflare";
import { stat } from "node:fs";

const createSpeciality = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const Specialty = await SpecialityService.createSpeciality(payload);
  apiResponse(res, {
    httpstatuscode: status.OK,
    success: true,
    message: "Speciality created successfully",
    data: Specialty,
  });
});

const getAllSpecialties = catchAsync(async (req: Request, res: Response) => {
  const Specialties = await SpecialityService.getAllSpecialties();
  apiResponse(res, {
    httpstatuscode: status.OK,
    success: true,
    message: "Speciality fetched successfully",
    data: Specialties,
  });
});

const updateSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const Specialty = await SpecialityService.updateSpecialty(
    id as string,
    payload,
  );
  apiResponse(res, {
    httpstatuscode: status.OK,
    success: true,
    message: "Speciality updated successfully",
    data: Specialty,
  });
});

const deleteSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const Specialty = await SpecialityService.deleteSpecialty(id as string);
  apiResponse(res, {
    httpstatuscode: status.OK,
    success: true,
    message: "Speciality deleted successfully",
  });
});
export const SpecialityController = {
  createSpeciality,
  getAllSpecialties,
  updateSpecialty,
  deleteSpecialty,
};
