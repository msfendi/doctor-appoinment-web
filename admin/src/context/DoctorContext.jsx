import { createContext } from "react"
import { assets } from "../assets/assets"

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {
    const value = {  }
    
    return (
        <DoctorContext.Provider value={ value }>
            { props.children }
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider