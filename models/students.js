import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
     roll_no: {
        type: Number,
        unique: false  
    },
    semester: String,    
    batch: String,      
    department: String
}, 
{
    collection: 'Students',
    strict: false 
});


const Student = mongoose.model('Student',studentSchema, 'Students');
export default Student;