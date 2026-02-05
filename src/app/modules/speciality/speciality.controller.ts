import { Request, Response } from "express";
import { SpecialityService } from "./speciality.service";
import { apiResponse } from "../../utils/apiResponse";

const createSpeciality = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const Specialty = await SpecialityService.createSpeciality(payload);
    apiResponse(res, {
      httpstatuscode: 201,
      success: true,
      message: "Speciality created successfully",
      data: Specialty,
    });
  } catch (error: any) {
    apiResponse(res, {
      httpstatuscode: 500,
      success: false,
      message: "Internal server error",
    });
  }
};

const getAllSpecialties = async (req: Request, res: Response) => {
  try {
    const Specialties = await SpecialityService.getAllSpecialties();
    apiResponse(res, {
      httpstatuscode: 200,
      success: true,
      message: "Speciality fetched successfully",
      data: Specialties,
    });
  } catch (error) {
    apiResponse(res, {
      httpstatuscode: 500,
      success: false,
      message: "Internal server error",
    });
  }
};
const updateSpecialty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const Specialty = await SpecialityService.updateSpecialty(
      id as string,
      payload,
    );
    apiResponse(res, {
      httpstatuscode: 200,
      success: true,
      message: "Speciality updated successfully",
      data: Specialty,
    });
  } catch (error) {
    apiResponse(res, {
      httpstatuscode: 500,
      success: false,
      message: "Internal server error",
    });
  }
};

const deleteSpecialty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const Specialty = await SpecialityService.deleteSpecialty(id as string);
    apiResponse(res, {
      httpstatuscode: 200,
      success: true,
      message: "Speciality deleted successfully",
      data: Specialty,
    });
  } catch (error) {
    apiResponse(res, {
      httpstatuscode: 500,
      success: false,
      message: "Internal server error",
    });
  }
};
export const SpecialityController = {
  createSpeciality,
  getAllSpecialties,
  updateSpecialty,
  deleteSpecialty,
};
