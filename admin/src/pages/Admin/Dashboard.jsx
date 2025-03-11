import React from 'react'
import StatsCards from '../../components/stats-cards'
import { assets } from '../../assets/assets'

const Dashboard = () => {
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Richard James",
      date: "24th July, 2024",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      doctor: "Dr. Richard James",
      date: "24th July, 2024",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      doctor: "Dr. Richard James",
      date: "24th July, 2024",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      doctor: "Dr. Richard James",
      date: "24th July, 2024",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      doctor: "Dr. Richard James",
      date: "24th July, 2024",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <StatsCards />
      
      <div className="bg-white rounded-md shadow-sm">
        <div className="p-4 border-b border-[#e1e1e1] flex items-center gap-2">
          <img src={assets.doctor_icon} alt="" />
          <h2 className="font-medium">Latest Appointment</h2>
        </div>
        <div className="divide-y divide-[#f0f0f0]">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={assets.patients_icon || "/placeholder.svg"}
                  alt={appointment.doctor}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">{appointment.doctor}</div>
                  <div className="text-sm text-[#8893b0]">Booking on {appointment.date}</div>
                </div>
              </div>
              <button className="w-10 flex rounded-full bg-[#ffe7e2]  text-[#ffa2a2]">
                <img className='flex items-center justify-center' src={assets.cancel_icon} alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Dashboard