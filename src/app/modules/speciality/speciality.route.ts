import { Router } from "express";
import { SpecialityController } from "./speciality.controller";

const router = Router();

router.post("/", SpecialityController.createSpeciality);
router.get("/", SpecialityController.getAllSpecialties);
router.put("/", SpecialityController.updateSpecialty);
router.delete("/:id", SpecialityController.deleteSpecialty);

export const specialityRoute = router;
