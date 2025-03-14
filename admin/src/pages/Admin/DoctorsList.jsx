import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {
  const { doctors, authtoken, getAllDoctors, changeAvailable} = useContext(AdminContext)

  useEffect(() => {
    if (authtoken) {
      getAllDoctors()
    }
  }, [authtoken])

  return (
    <div className="p-6 bg-[#f8f9fd] overflow-y-scroll">
      <h1 className="text-xl font-semibold mb-6">All Doctors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-4">
        {doctors.map((doctor) => (
          <div key={doctor._id} className='border rounded-xl border-blue-200 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
              <img className='bg-blue-50 hover:bg-[#5f6FFF] transition-all duration-500' src={doctor.image} alt="" />
              <div className='p-4'>
                  <p className='font-medium text-gray-900 text-md'>{doctor.name}</p>
                  <p className='text-gray-600 font-light text-sm'>{doctor.speciality}</p>
                  <div className='flex flex-row items-center gap-2 text-sm text-center'>
                      <input onChange={()=> changeAvailable(doctor._id)} type="checkbox" checked={doctor.available} />
                      <p className={doctor.available ? 'text-green-500' : 'text-red-500'}>{doctor.available ? 'Available' : 'Not Available'}</p>
                  </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsList