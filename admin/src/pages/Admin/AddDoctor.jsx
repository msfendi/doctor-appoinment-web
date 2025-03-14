import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddDoctor = () => {

  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [speciality, setSpeciality] = useState('General physician')
  const [email, setEmail] = useState('')
  const [degree, setDegree] = useState('')
  const [password, setPassword] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    // setFormData((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }))
  }

  const { backendUrl, authtoken } = useContext(AdminContext) 

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!docImg) {
        return toast.error('You must upload Image !')
      }

      const formData = new FormData()
      formData.append('imageFile', docImg)
      formData.append('name', name)
      formData.append('speciality', speciality)
      formData.append('email', email)
      formData.append('degree', degree)
      formData.append('password', password)
      formData.append('address', JSON.stringify({line1: address1, line2: address2}))
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('about', about)

      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
      })

      const {data} = await axios.post(backendUrl + '/api/admin/add-doctor', formData, {headers: {authtoken}})
      if (data.success) {
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setSpeciality('')
        setEmail('')
        setDegree('')
        setPassword('')
        setAddress1('')
        setAddress2('')
        setExperience('')
        setFees('')
        setAbout('')
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      
    }
  }
   
  return (
    <div className="p-6 bg-[#f8f9fd]">
      <h1 className="text-xl font-semibold mb-4">Add Doctor</h1>

      <div className="bg-white rounded-md p-6 shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="flex mb-6">
            <div className="relative flex flex-row gap-4 items-center">
              <img className="w-14 bg-[#f5f5f5] rounded-full flex items-center justify-center" src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" />
              <div className="text-start">
                <label className="text-sm font-medium text-[#515151]" htmlFor="doc-img">Upload doctor</label>
                <p className="text-sm text-[#8c8c8c]">picture</p>
              </div>
              
              <input onChange={(e) => setDocImg(e.target.files[0])} type="file" name="doc-img" id="doc-img" hidden />
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border text-sm border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
              />
            </div>

            {/* Specialty */}
            <div>
              <label htmlFor="speciality" className="block text-sm mb-1 text-[#515151]">
                Speciality
              </label>
              <div className="relative">
                <select
                  id="speciality"
                  name="speciality"
                  value={speciality}
                  onChange={(e) => setSpeciality(e.target.value)}
                  className="w-full px-3 py-2 border text-sm border-[#d8d8d8] rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border text-sm border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
              />
            </div>

            {/* Education */}
            <div>
              <label htmlFor="degree" className="block text-sm mb-1 text-[#515151]">
                Education
              </label>
              <input
                type="text"
                id="degree"
                name="degree"
                placeholder="Degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                className="w-full px-3 py-2 border text-sm border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border text-sm border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
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
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                className="w-full px-3 py-2 border text-sm border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff] mb-2"
              />
              <input
                type="text"
                id="address2"
                name="address2"
                placeholder="Address 2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                className="w-full px-3 py-2 border text-sm border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
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
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-3 py-2 border text-sm border-[#d8d8d8] rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#5f6fff]">
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
                value={fees}
                onChange={(e) => setFees(e.target.value)}
                className="w-full px-3 py-2 border text-sm border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
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
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              rows="5"
              className="w-full px-3 py-2 border text-sm border-[#d8d8d8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#5f6fff]"
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