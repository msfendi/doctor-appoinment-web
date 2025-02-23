import React, { useState } from 'react'

const Login = () => {
  // const [formData, setFormData] = useState({
  //   fullName: defaultFullName,
  //   email: defaultEmail,
  //   password: defaultPassword
  // });

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div className='flex items-center justify-center my-15'>
      <div className="w-[476px] p-10 bg-white rounded-2xl border border-gray-300 shadow-md flex flex-col items-start" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h1 className="font-outfit text-xl font-semibold text-gray-700">{state === 'Sign Up' ?  "Create Account" : "Login"}</h1>
        <p className="font-outfit text-md font-normal text-gray-700 mb-5">Please {state === 'Sign Up' ?  "create account" : "login"} to book appointment</p>

        <form onSubmit={onHandleSubmit} className="w-full flex flex-col items-center">
        {state === 'Sign Up' && 
          <div className="w-full mb-3">
            <label className="font-outfit text-sm font-normal text-gray-700 mb-2 block">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="w-full h-10 px-3 rounded-md border border-gray-300 font-outfit text-sm"
              value={name}
              onChange={(e) => setName(e.target.name)}
              required
            />
          </div>
        }

          <div className="w-full mb-3">
            <label className="font-outfit text-sm font-normal text-gray-700 mb-2 block">Email</label>
            <input
              type="email"
              name="email"
              className="w-full h-10 px-3 rounded-md border border-gray-300 font-outfit text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.name)}
              required
            />
          </div>

          <div className="w-full mb-3">
            <label className="font-outfit text-sm font-normal text-gray-700 mb-2 block">Password</label>
            <input
              type="password"
              name="password"
              className="w-full h-10 px-3 rounded-md border border-gray-300 font-outfit text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.name)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full h-10 bg-blue-600 text-white rounded-md font-outfit text-lg font-medium mt-2 transition-colors duration-200 hover:bg-blue-500"
          > {state === 'Sign Up' ?  "Create Account" : "Login"}
          </button>
        </form>

        {state === 'Sign Up' ?  
        <p className="font-outfit text-sm text-gray-600 text-center mt-5">
          Already have an account? <span onClick={() => setState('Sign In')} className="text-blue-600 cursor-pointer">Login here</span>
        </p>
        :
        <p className="font-outfit text-sm text-gray-600 text-center mt-5">
          Don't have an account? <span onClick={() => setState('Sign Up')} className="text-blue-600 cursor-pointer">Sign up</span>
        </p>
        }
      </div>
    </div>
  )
}

export default Login