import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({docId, speciality}) => {
    const {doctors} = useContext(AppContext)
    const navigate = useNavigate()
    const [relDoc, setRelDoc] = useState([])
    
    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
            setRelDoc(doctorsData);
        }
    }, [doctors, speciality, docId])

    return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10' id='speciality'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {relDoc.slice(0, 5).map((item, index) => (
                <div onClick={() => {navigate(`/appoinment/${item._id}`); scrollTo(0,0)}} className='border rounded-xl border-blue-200 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='font-medium text-gray-900 text-md'>{item.name}</p>
                        <p className='text-gray-600 font-light text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={() => {navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-6'>More Doctors</button>
    </div>
  )
}

export default RelatedDoctors