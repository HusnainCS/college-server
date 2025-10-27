import Teacher from "../models/teachers.js";

export const getAllTeachers = async(req,res) => {
    try {
        const teachers =  await Teacher.find();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ error : error.message});
    }
};