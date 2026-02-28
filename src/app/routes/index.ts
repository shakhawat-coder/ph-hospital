import { Router } from "express";
import { specialityRoute } from "../modules/speciality/speciality.route";
import { authRouter } from "../modules/auth/auth.router";
import { UserRoutes } from "../modules/user/user.router";
import { DoctorRoutes } from "../modules/doctor/doctor.router";
import { AdminRoutes } from "../modules/admin/admin.route";
import { scheduleRoutes } from "../modules/schedule/schedule.route";
import { DoctorScheduleRoutes } from "../modules/doctorSchedule/doctorSchedule.route";
import { AppointmentRoutes } from "../modules/appointment/appointment.route";
// import { AuthRoutes } from "../module/auth/auth.route";

const router = Router();

// router.use("/auth", AuthRoutes);
router.use("/auth", authRouter);
router.use("/specialties", specialityRoute);
router.use("/users", UserRoutes);
router.use("/doctors", DoctorRoutes);
router.use("/admins", AdminRoutes);
router.use("/schedules", scheduleRoutes);
router.use("/doctor-schedules", DoctorScheduleRoutes);
router.use("/appointments", AppointmentRoutes);
export const IndexRoutes = router;
