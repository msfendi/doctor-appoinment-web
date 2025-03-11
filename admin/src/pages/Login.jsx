import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
    const [state, setState ] = useState("Admin")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {setauthtoken, backendUrl} = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
      event.preventDefault()
      try {
        if (state === 'Admin') {
          const {data} = await axios.post(backendUrl + '/api/admin/login', {email, password})
          if (data.success) {
            localStorage.setItem('authToken', data.token)
            setauthtoken(data)
          } else {
            toast.error(data.message)
          }
        } else {

        }
      } catch (error) {
        
      }
    }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-sm border border-[#d4d4d4]">
        <h1 className="text-xl font-bold text-[#4b5563] mb-1.5">{state} Login</h1>
        <p className="text-md text-[#5e5e5e] mb-4">Please sign up to book appointment</p>

        <form onSubmit={onSubmitHandler}>
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm text-[#4b5563] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full p-2 border border-[#d4d4d4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f6fff]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm text-[#4b5563] mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full p-2 border border-[#d4d4d4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f6fff]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#5f6fff] text-white rounded-lg text-md font-medium hover:bg-[#4b5ce0] transition-colors"
          >
            Create Account
          </button>
        </form>

        <div className="mt-5 text-start">
          {
            state === 'Admin'
            ? <p className="text-[#4b5563] text-sm">
            Doctor Login?
            <span onClick={() => setState('Doctor')} className="text-[#5f6fff] ml-1 hover:underline">Login here</span>
          </p>
          : <p className="text-[#4b5563] text-sm">
            Admin Login?
            <span onClick={() => setState('Admin')} className="text-[#5f6fff] ml-1 hover:underline">Login here</span>
          </p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login