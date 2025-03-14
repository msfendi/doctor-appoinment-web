import express from "express";
import upload from "../middlewares/multer.js";
import { addDoctor, loginAdmin, allDoctors } from "../controllers/adminController.js"
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailablity } from "../controllers/doctorController.js";

const adminRouter = express.Router()

adminRouter.post('/add-doctor', authAdmin, upload.single('imageFile'), addDoctor)
adminRouter.post('/all-doctors', authAdmin, allDoctors)
adminRouter.post('/change-available', authAdmin, changeAvailablity)
adminRouter.post('/login', loginAdmin)

export default adminRouter