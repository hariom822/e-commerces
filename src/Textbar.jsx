
import React, { useState } from 'react'

const Textbar = () => {
    const [data,setData]=useState({
        id:"",
        name:"",
        email:"",
        phone:"",
    })
    const [show,setshow]=useState([])
    const datasubmit=(e)=>{
        e.preventDefault()
        setshow([...show,data])
        console.log(show)
       setData({
      name: "",
      email: "",
      phone: "",
    });

    }
    const datashow =()=>{
       
    }
  return (
    <>
    <form onSubmit={datasubmit}>
        <label>id
            <input type="text" value={data.id} onChange={(e)=>setData({...data,id:e.target.value})} />
        </label>
        <label>Name
            <input type="text" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} />
        </label>
         <label>Email
            <input type="text" value={data.email}  onChange={(e)=>setData({...data,email:e.target.value})}/>
        </label>
         <label>phone
            <input type="text" value={data.phone} onChange={(e)=>setData({...data,phone:e.target.value})}/>
        </label>
        <button onClick={datashow}>submit</button>
    </form>
    
   <div>
    <h1>
  {show.map((x)=><div key={x.id}>
    name:{x.name}
    email:{x.email}
    phone:{x.phone}</div>)}
    </h1>
    
   </div>
    </>

  )}
export default Textbar
