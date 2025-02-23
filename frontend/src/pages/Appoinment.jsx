import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appoinment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState()

  const getAvailableSlots = async () => {
    setDocSlots([])

    // get current date
    let today = new Date()
    for(let i = 1; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime) {
        let formatedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

        // add slot to array
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formatedTime
        })

        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  const fetchDocInfo = () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    // console.log(docInfo);
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  // useEffect(() => {
  //   console.log(docSlots);
  // }, [docSlots])

  return docInfo && (
    <div>
      {/* --------- Doctors Information ---------- */}
      <div className='flex flex-col sm:flex-row gap-5 mt-5 items-center'>
        <img className='w-full sm:max-w-65 border border-none rounded-md bg-[#5f6FFF]' src={docInfo.image} alt="" />

        {/* --------- Doctor Detail --------- */}
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

      {/* ---------- Booking Slot ---------- */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slot</p>
        <div className='flex gap-4 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-[#5f6FFF] text-white' : 'border border-gray-200'}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots[slotIndex].map((item, index) => (
              <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-[#5f6FFF] text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>
        <button className='bg-[#5f6FFF] text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an Appointment</button>
      </div>

        {/* Related Doctors */}

        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appoinment