import React from 'react'
import { assets } from '../assets/assets'

const StatsCards = () => {
  const stats = [
    {
      id: 1,
      title: "Doctors",
      value: 14,
      icon: (
        <img src={assets.doctor_icon} alt="" />
      ),
      iconBg: "#f2f3ff",
      iconColor: "#577cff",
    },
    {
      id: 2,
      title: "Appointments",
      value: 2,
      icon: (
        <img src={assets.appointments_icon} alt="" />
      ),
      iconBg: "#fcfff0",
      iconColor: "#577cff",
    },
    {
      id: 3,
      title: "Patients",
      value: 5,
      icon: (
        <img src={assets.patients_icon} alt="" />
      ),
      iconBg: "#fef7f5",
      iconColor: "#577cff",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {stats.map((stat) => (
        <div key={stat.id} className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm">
          <div
            className={`w-12 h-12 rounded-md flex items-center justify-center`}
            style={{ backgroundColor: stat.iconBg }}
          >
            {stat.icon}
          </div>
          <div>
            <div className="text-2xl font-semibold">{stat.value}</div>
            <div className="text-sm text-[#8893b0]">{stat.title}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards