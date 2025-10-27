import express from "express";

import { createStudent, getAllStudents } from "../controllers/studentControllers.js";

const router = express.Router();

router.get('/', getAllStudents);
router.post('/',createStudent);

export default router;

