import validator from 'validator'
import bcrypt from 'bcrypt'
import { v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'

// API FOR ADDDOCTOR

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, available, fees, address, date } = req.body
        const imageFile = req.file

        // checking value input
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !available || !fees || !address || !date) {
            console.log(req.body);  
            return res.json({success: false, message: 'Please complete the data'})
        }

        // checking valid email
        if (!validator.isEmail(email)) {
            return res.json({success: false, message: 'Please enter a valid email'})
        }

        // checking length password
        if (password.length < 8) {
            return res.json({success: false, message: 'The minimum password character is 8'})
        }

        // hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // upload image 
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password: hashedPassword,
            speciality,
            degree, 
            experience, 
            about, 
            available, 
            fees, 
            address: JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success: true, message: "Data doctor successfully created into database"})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

export {addDoctor}