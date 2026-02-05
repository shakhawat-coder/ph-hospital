import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpeciality = async (payload: Specialty): Promise<Specialty> => {
  const Specialty = await prisma.specialty.create({
    data: payload,
  });
  return payload;
};
const getAllSpecialties = async (): Promise<Specialty[]> => {
  const Specialties = await prisma.specialty.findMany();
  return Specialties;
};

const updateSpecialty = async (
  id: string,
  payload: Specialty,
): Promise<Specialty> => {
  const Specialty = await prisma.specialty.update({
    where: { id },
    data: payload,
  });
  return Specialty;
};

const deleteSpecialty = async (id: string): Promise<Specialty> => {
  const Specialty = await prisma.specialty.delete({ where: { id } });
  return Specialty;
};

export const SpecialityService = {
  createSpeciality,
  getAllSpecialties,
  updateSpecialty,
  deleteSpecialty,
};
