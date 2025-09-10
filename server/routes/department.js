import express from 'express';
import authMiddleware from "../middleware/authMiddleware.js";
import { addDepartement } from '../controllers/departmentController.js';


const router = express.Router();

router.post('/add', authMiddleware,addDepartement);


export default router;