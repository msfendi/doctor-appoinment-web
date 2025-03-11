import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "General physician",
    email: "",
    education: "",
    password: "",
    address1: "",
    address2: "",
    experience: "",
    fees: "",
    about: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add API call here to submit the form data
  }
  
  return (
    <div className="p-6 bg-[#f8f9fd]">
      <h1 className="text-xl font-semibold mb-4">Add Doctor</h1>

      <div className="bg-white rounded-md p-6 shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-start mb-6">
            <div className="relative flex flex-row justify-start items-center">
              <div className="w-24 h-24 bg-[#f5f5f5] rounded-full flex items-center justify-center">
                <img src={assets.upload_area} alt="" />
              </div>
              <div className="text-center mt-2">
                <p className="text-sm font-medium text-[#515151]">Upload doctor</p>
                <p className="text-sm text-[#8c8c8c]">picture</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {/* Doctor Name */}
            <div>
              <label htmlFor="name" className="block text-sm mb-1 text-[#515151]">
                Doctor name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
              />
            </div>

            {/* Specialty */}
            <div>
              <label htmlFor="specialty" className="block text-sm mb-1 text-[#515151]">
                Speciality
              </label>
              <div className="relative">
                <select
                  id="specialty"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#d8d8d8] rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
                >
                  <option value="General physician">General physician</option>
                  <option value="Cardiologist">Cardiologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Pediatrician">Pediatrician</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img src={assets.list_icon} alt="" />
                </div>
              </div>
            </div>

            {/* Doctor Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-1 text-[#515151]">
                Doctor Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
              />
            </div>

            {/* Education */}
            <div>
              <label htmlFor="education" className="block text-sm mb-1 text-[#515151]">
                Education
              </label>
              <input
                type="text"
                id="education"
                name="education"
                placeholder="Education"
                value={formData.education}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
              />
            </div>

            {/* Doctor Password */}
            <div>
              <label htmlFor="password" className="block text-sm mb-1 text-[#515151]">
                Doctor Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address1" className="block text-sm mb-1 text-[#515151]">
                Address
              </label>
              <input
                type="text"
                id="address1"
                name="address1"
                placeholder="Address 1"
                value={formData.address1}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff] mb-2"
              />
              <input
                type="text"
                id="address2"
                name="address2"
                placeholder="Address 2"
                value={formData.address2}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
              />
            </div>

            {/* Experience */}
            <div>
              <label htmlFor="experience" className="block text-sm mb-1 text-[#515151]">
                Experience
              </label>
              <div className="relative">
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#d8d8d8] rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
                >
                  <option value="">Experience</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img src={assets.list_icon} alt="" />
                </div>
              </div>
            </div>

            {/* Fees */}
            <div>
              <label htmlFor="fees" className="block text-sm mb-1 text-[#515151]">
                Fees
              </label>
              <input
                type="text"
                id="fees"
                name="fees"
                placeholder="Your fees"
                value={formData.fees}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
              />
            </div>
          </div>

          {/* About me */}
          <div className="mt-4">
            <label htmlFor="about" className="block text-sm mb-1 text-[#515151]">
              About me
            </label>
            <textarea
              id="about"
              name="about"
              placeholder="write about yourself"
              value={formData.about}
              onChange={handleChange}
              rows="5"
              className="w-full px-3 py-2 border border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-[#5f6fff] text-white rounded-md hover:bg-[#4b5563] transition-colors"
            >
              Add doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddDoctor