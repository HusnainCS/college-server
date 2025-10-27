import express from "express";

import { addCourse,getAllCourses } from "../controllers/courseControllers.js";

const router = express.Router();

router.get('/',getAllCourses);
router.post('/',addCourse);

export default router;