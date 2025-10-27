import mongoose from "mongoose";

const teachersSchema = new mongoose.Schema({
    name : String,
    age : Number,
    subject : String,
}, {
    collection : 'Teachers',
    strict : false
});

const Teacher = mongoose.model('Teacher', teachersSchema);
export default Teacher;