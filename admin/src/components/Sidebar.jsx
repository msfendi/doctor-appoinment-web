import React, { useContext, useState } from 'react'
import { TeamSwitcher } from './team-switcher'
import { NavUser } from './nav-user'
import { NavMain } from './nav-main'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'

const Sidebar = () => {

    const { activeNav, setActiveNav } = useState("Dashboard")
    const {authtoken} = useContext(AdminContext)
    const navItems = [
    {
      title: "Dashboard",
      icon: (
        <img src={assets.home_icon} className='w-5' alt="" />
      ),
      url: "/admin-dashboard",
      isActive: activeNav === "Dashboard",
    },
    {
      title: "Appointments",
      icon: (
        <img src={assets.appointment_icon} className='w-5' alt="" />
      ),
      url: "/all-appointments",
      isActive: activeNav === "Appointments",
    },
    {
      title: "Add Doctor",
      icon: (
        <img src={assets.add_icon} className='w-5' alt="" />
      ),
      url: "/add-doctor",
      isActive: activeNav === "Add Doctor",
    },
    {
      title: "Doctors List",
      icon: (
        <img src={assets.people_icon} className='w-5' alt="" />
      ),
      url: "/doctors-list",
      isActive: activeNav === "Doctors List",
    },
  ]

  return (
    <div className="min-h-screen bg-white border-r border-[#e1e1e1] flex flex-col">

      {/* Use NavMain component */}
      <div className="flex-1">
        <NavMain items={navItems} onClick={(item) => setActiveNav(item.title)} />
      </div>

    </div>
  )
}

export default Sidebar