import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* Left Column */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus consequuntur odio quo fugiat quasi et quibusdam aperiam odit id inventore aspernatur, nobis laboriosam quaerat doloremque, iste asperiores. Pariatur, saepe recusandae.</p>
            </div>

            {/* Center Column */}
            <div>
                <p className='text-xl font-medium text-gray-800 mb-5'>COMPANY</p>
                <ul className=' text-sm text-gray-600 flex flex-col gap-2'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Me</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* Right Column */}
            <div>
                <p className='text-xl font-medium text-gray-800 mb-5'>GET IN TOUCH</p>
                <ul className=' text-sm text-gray-600 flex flex-col gap-2'>
                    <li>+1-212-456-7890</li>
                    <li>greatstackdev@gmail.com</li>
                </ul>
            </div>
        </div>

         {/* Copyright text */}
        <div className=''>
            <hr className='text-gray-500'/>
            <p className='text-center py-5 text-sm text-gray-600'>Copyright © 2024 GreatStack - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer