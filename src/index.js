import express from "express"
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());

app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/courses',  courseRoutes);


app.get("/", (req, res) => {
    res.json({ 
        message: "College Server is running!",
        endpoint:{
            students : "/students",
            teachers : "/teachers",
            courses : "/courses"
        } 
    });
});

app.listen(PORT, () => {
    console.log("Server is running on port 4000");
});