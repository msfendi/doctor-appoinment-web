import { createContext, useState } from "react"
import { assets } from "../assets/assets"

export const AdminContext = createContext()

const AdminContextProvider = (props) => {
    const [authtoken, setauthtoken] = useState(localStorage.getItem('authToken') ?? '' )
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const value = { 
        authtoken, setauthtoken,
        backendUrl
    }
    
    return (
        <AdminContext.Provider value={ value }>
            { props.children }
        </AdminContext.Provider>
    )
}

export default AdminContextProvider