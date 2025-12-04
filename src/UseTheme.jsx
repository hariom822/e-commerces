import React, { useEffect, useState } from 'react'

const UseTheme = () => {
    const [theme,setTheme]=useState('white')
    useEffect(()=>{
      setTheme(JSON.parse(localStorage.getItem('color')))
    },[theme])
    const toggle=()=>{
       const clr= theme==="white"?"black":"white"
        setTheme(clr)
        localStorage.setItem("color",JSON.stringify(clr))
    }
  return {
    theme,toggle
  }
}

export default UseTheme
