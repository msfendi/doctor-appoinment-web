import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'  

const MyAppoinment = () => {
  const {doctors} = useContext(AppContext)
  return (
    <div className="flex-grow flex flex-col items-center">
        <div className="w-full max-w-screen-lg px-4">
          <h1 className="text-xl font-medium text-gray-800 my-2">My Appointments</h1>
          {
            doctors.slice(0,2).map((item, index) => (
              <div key={index} className="grid grid-cols-[1fr_2fr] sm:flex sm-gap-6 py-2 border border-none rounded">
                  {/* Doctor Image */}
                    <div className='md:flex-row gap-6 mt-3'>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-32 md:w-35 bg-blue-50 rounded object-cover"
                      />
                    </div>
                  {/* Appointment Details */}
                  <div className="flex-1 items-start gap-6 mt-3 px-4">
                    <p className="text-lg font-medium text-[#262626] font-['Outfit']">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600 font-['Outfit']">
                      {item.speciality}
                    </p>
                    <p className="text-sm font-medium text-gray-600 mt-2 font-['Outfit']">
                      Address:
                    </p>
                    <p className="text-sm text-gray-600 font-['Outfit']">
                      {item.address.line1}
                    </p>
                    <p className="text-sm text-gray-600 font-['Outfit']">
                      {item.address.line2}
                    </p>
                    <p className="text-sm text-[#989898] mt-2 font-['Outfit']">
                      Date & Time: 25, July, 2024 | 8:30 PM
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="flex flex-col gap-2 mt-4 md:mt-0 justify-end">
                    <button 
                      className={`w-full px-6 items-center py-3 rounded border border-gray-300 font-light hover:bg-[#4a5aff] hover:text-white text-xs font-['Outfit']`}
                      > Cancel appointment
                    </button>
                    <button 
                      className={`w-full px-6 items-center py-3 rounded border border-gray-300 font-light hover:bg-[#4a5aff] hover:text-white text-xs font-['Outfit']`}
                      > Cancel appointment
                    </button>
                  </div>
                </div>
            ))}
            <hr className='border-gray-300 mt-3'/>
        </div>
    </div>
  )
}

export default MyAppoinment