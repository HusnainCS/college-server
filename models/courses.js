import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name : String,
    code : String,
    descripton : String,
    credits : Number,
    deaprtment : String
})

const Course = mongoose.model('Course',courseSchema);
export default Course;