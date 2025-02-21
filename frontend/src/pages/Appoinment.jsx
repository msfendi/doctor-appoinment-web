import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appoinment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const getAvailableSlots = async () => {
    setDocSlots([])

    // get current date
    let today = new Date()
    for(let i = 0; i < 7; i++) {
      let currentData = new Date(today)
      currentData.setDate(today.getDate() +1)

      let endTime = new Date()
      endTime.setDate(today.getDate() +1)
      endTime.setHours(21, 0, 0, 0)

      if (today.getDate() === currentData.getDate()) {
        currentData.setHours(currentData.getHours() > 10 ? currentData.getHours() +1 : 10)
        currentData.setMinutes(currentData.getMinutes() > 30 ? 30 : 0)
      } else {
        currentData.setHours(10)
        currentData.setMinutes(0)
      }

      let timeSlots = []

      while(currentData < endTime) {
        let formatedTime = currentData.toLocaleDateString([], {hour: '2-digit', minute: '2-digit'})

        // add slot to array
        timeSlots.push({
          dateTime: new Date(currentData),
          time: formatedTime
        })

        currentData.setMinutes(currentData.getMinutes() + 30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  const fetchDocInfo = () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo);
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots])

  return docInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-5 mt-5 items-center'>
        <img className='w-full sm:max-w-65 border border-none rounded-md bg-[#5f6FFF]' src={docInfo.image} alt="" />
        <div className='flex flex-col w-full border border-gray-400 rounded-md p-8 gap-3.5'>
          <div>
            <h3 className='flex flex-row mb-1 gap-1.5 font-medium text-2xl'>{docInfo.name}<img className='w-4' src={assets.verified_icon} alt="" /></h3>
            <div className='flex flex-row gap-2 items-center'>
              <p className='text-sm text-gray-600'>{docInfo.degree} - {docInfo.speciality}</p>
              <p className='text-xs border border-gray-400 text-gray-600 rounded-xl px-4 py-1'>{docInfo.experience}</p>
            </div>
          </div>
          <div>
            <p className='text-sm flex flex-row gap-1.5 font-medium'>About<img className='w-3' src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-600'>{docInfo.about}</p>
          </div>
          <p>Appointment fee: ${docInfo.fees} </p>
        </div>
      </div>
    </div>
  )
}

export default Appoinment