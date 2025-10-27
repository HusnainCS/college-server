import express from "express";

import { getAllStudents } from "../controllers/studentControllers.js";

const router = express.Router();

router.get('/', getAllStudents);

export default router;

