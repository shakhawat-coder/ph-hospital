import { Router } from "express";
import { SpecialityController } from "./speciality.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { multerUpload } from "../../config/multer.config";
import { validateRequest } from "../../middleware/validateRequest";
import { SpecialtyValidation } from "./speciality.validation";

const router = Router();

router.post(
  "/",
  // checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("file"),
  validateRequest(SpecialtyValidation.createSpecialtyZodSchema),
  SpecialityController.createSpeciality,
);
router.get("/", SpecialityController.getAllSpecialties);
router.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  SpecialityController.deleteSpecialty,
);
router.put(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  SpecialityController.updateSpecialty,
);

export const specialityRoute = router;
