
import Teacher from "../models/teachers.js";

export const getAllTeachers = async(req,res) => {
    try {
        const teachers =  await Teacher.find();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ error : error.message});
    }
};

export const addTeacher = async (req,res) => {
    try {
       const newTeacher = new Teacher(req.body);
       const saveTeacher = await newTeacher.save();
       res.status(201).json(saveTeacher);
    } catch (error) {
        res.status(400).json({error : error.message});

    }
    
};