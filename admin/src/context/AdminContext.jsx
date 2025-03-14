import { createContext, useState } from "react"
import { assets } from "../assets/assets"
import axios from "axios"
import { toast } from "react-toastify"

export const AdminContext = createContext()

const AdminContextProvider = (props) => {
    const [authtoken, setauthtoken] = useState(localStorage.getItem('authToken') ?? '' )
    const [doctors, setDoctors] = useState([])
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllDoctors = async () => {
        try {
            const {data} = await axios.post(backendUrl + '/api/admin/all-doctors', {}, {headers:{authtoken}})
            if (data.success) {
                setDoctors(data.doctors)
                console.log(data.doctors);
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const changeAvailable = async (docId) => {
        try {
            const {data} = await axios.post(backendUrl + '/api/admin/change-available', {docId}, {headers:{authtoken}})
            if (data.success) {
                toast.success(data.message)
                getAllDoctors()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = { 
        authtoken, setauthtoken,
        backendUrl, doctors,
        getAllDoctors, changeAvailable
    }
    
    return (
        <AdminContext.Provider value={ value }>
            { props.children }
        </AdminContext.Provider>
    )
}

export default AdminContextProvider