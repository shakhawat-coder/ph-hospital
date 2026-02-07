import { Router } from "express";
import { specialityRoute } from "../modules/speciality/speciality.route";
import { authRouter } from "../modules/auth/auth.router";
// import { AuthRoutes } from "../module/auth/auth.route";

const router = Router();

// router.use("/auth", AuthRoutes);
router.use("/auth", authRouter);
router.use("/specialties", specialityRoute);

export const IndexRoutes = router;
