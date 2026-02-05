import { Router } from "express";
import { specialityRoute } from "../modules/speciality/speciality.route";
// import { AuthRoutes } from "../module/auth/auth.route";

const router = Router();

// router.use("/auth", AuthRoutes);
router.use("/specialties", specialityRoute);

export const IndexRoutes = router;
