import { useState } from 'react'
import './App.css'
import Footer from './Footer'
import Center from './Center'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactRouter from './ReactRouter'
// import Productdetail from '/Productdetail.jsx'
import Productdetail from './Productdetail.jsx'
// import Textbar from './Textbar.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Center />} />
          <Route path='/footer' element={
            <ReactRouter>
              <Footer />
            </ReactRouter>} />
          <Route path='/product/:id' element={<Productdetail />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
