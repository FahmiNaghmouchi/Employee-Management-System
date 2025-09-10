import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import connectDB from'./db/db.js';
import departmentRouter from './routes/department.js';


connectDB();
const app  = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/departement", departmentRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
}
);