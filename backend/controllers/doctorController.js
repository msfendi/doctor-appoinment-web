import doctorModel from "../models/doctorModel.js"


const changeAvailablity = async (req, res) => {
    try {
        const {docId} = req.body
        const docData = await doctorModel.findById(docId)
        console.log(docData);
        await doctorModel.findByIdAndUpdate(docId, {available: !docData.available})
        res.json({success: true, message: 'Availabilty has changed'})

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export {changeAvailablity}