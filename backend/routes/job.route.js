import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.post("/post", isAuthenticated, postJob);

router.get("/get", getAllJobs);

router.get("/getadminjobs", isAuthenticated, getAdminJobs);

router.get("/:id", getJobById);

export default router;
