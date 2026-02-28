import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import { IndexRoutes } from "./app/routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";
import { auth } from "./app/lib/auth";
import { toNodeHandler } from "better-auth/node";
import { envVars } from "./app/config/env";
import cors from "cors";
import path from "path";
import qs from "qs";
import { PaymentController } from "./app/modules/payment/payment.controller";
import cron from "node-cron";
import { AppointmentService } from "./app/modules/appointment/appointment.service";

const app: Application = express();
app.set("query parser", (str: string) => qs.parse(str));

app.set("view engine", "ejs");
app.set("views", path.resolve(process.cwd(), `src/app/templates`));

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  PaymentController.handleStripeWebhookEvent,
);

app.use(
  cors({
    origin: [
      envVars.FRONTEND_URL,
      envVars.BETTER_AUTH_URL,
      "http://localhost:3000",
      "http://localhost:5000",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use("/api/auth", toNodeHandler(auth));

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));




cron.schedule("*/30 * * * *", async () => {
  try {
    console.log("Running scheduled task to check for upcoming appointments...");
    await AppointmentService.cancelUnpaidAppointments();
  } catch (error: any) {
    console.error("Error running scheduled task:", error.message);
  }
});
// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express!");
});
app.use("/api/v1", IndexRoutes);
app.use(globalErrorHandler);
app.use(notFound);

export default app;
