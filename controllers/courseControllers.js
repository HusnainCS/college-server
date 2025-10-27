import Course from "../models/courses.js";

export const getAllCourses = async (req,res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({error : error.message});
    }
};

export const addCourse = async (req,res) => {
    try {
        const newCourse = new Course(req.body);
        const saveCourse = await newCourse.save();
        res.status(201).json(saveCourse);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};