import express from "express"

import { addTeacher, getAllTeachers } from "../controllers/teacherControllers.js";

const router = express.Router();

router.get('/', getAllTeachers);
router.post('/',addTeacher);

export default router;