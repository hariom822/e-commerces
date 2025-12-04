import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
  })
  const [error, setError] = useState({})
  const navigate = useNavigate()
  const datasubmit = (e) => {
    e.preventDefault()
    const arr = {}
    if (!data.name) {
      arr.name = "plese enter name"
    } if (!data.email) {
      arr.email = "plese enter email"
    } if (!data.phone) {
      arr.phone = "plese enter phone"
    } if (!data.dob) {
      arr.dob = "plese enter date of birth"
    } if (!data.password) {
      arr.password = "plese enter password"
    }
    setError(arr)
    if (Object.keys(arr).length === 0) {
      localStorage.setItem("user", JSON.stringify(data))
      alert("data submit successfully")
      setData({
        name: '',
        email: '',
        phone: '',
        dob: '',
        password: '',
      })
      navigate('/')
    }


  }

  return (
    <div className="h-full bg-gray-300 flex items-center justify-center  ">
      <div className="bg-white  rounded-xl w-full max-w-md p-8">
        <form onSubmit={datasubmit} autoComplete="off">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Signup Page</h2>
          <div className="flex flex-col mb-4">
            <label className="mb-2 ">User Name</label>
            <input type="text" placeholder="Enter your Name"
              className={`px-4 py-3 rounded-xl border-3 
      ${error.name ? "border-red-500" : "border-black"}`}
              value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 ">Email Address</label>
            <input type="email" placeholder="Enter your email"
              className={`px-4 py-3  rounded-xl border-3 ${error.email ? "border-red-500" : "border-black"}`}
              value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-3">Phone.no</label>
            <input type="text" placeholder="Enter your phone.no"
              className={`px-4 py-3  rounded-xl border-3 ${error.phone ? "border-red-500" : "border:black"}`}
              value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-3">Date Of Birth</label>
            <input type="date" placeholder="Enter your phone.no"
              className={`px-4 py-3  rounded-xl border-3 ${error.dob ? "border-red-500" : "border-black"}`}
              value={data.dob} onChange={(e) => setData({ ...data, dob: e.target.value })} />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-3">Password</label>
            <input type="password" placeholder="Enter your password"
              className={`px-4 py-3  rounded-xl border-3 ${error.password ? "border-red-500" : "border-black"}`}
              value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
          </div>
          <button className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-900 ">
            Signup
          </button>
        </form>
        <Link to={'/login'}><p className='flex font-bold hover:scale-103 justify-center mt-2 hover:underline'>Login Page</p></Link>
      </div>

    </div>
  )
}

export default Signup
