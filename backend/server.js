import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoutes.js'

// app config
const app = express()
const port = process.env.port || 4000
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

// Api Routes
app.use('/api/admin', adminRouter)

app.get('/', (req, res) => {
    res.send('Server Running')
})

app.listen(port, () => console.log('Server started', port))
