import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import UseTheme from './UseTheme'
const Center = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [loding, setLoding] = useState(true)
  const [addcart, setAddcart] = useState(true)
  const [cart, setCard] = useState([])
  const [sort, setSort] = useState('')

  const [change,setChange]=useState("")
  useEffect(() => {
    apifeach()
  }, [])
  const navigate = useNavigate()
  const apifeach = async () => {
    const result = await axios('https://dummyjson.com/products')
    setData(result.data.products)

    setLoding(false)
  }

  const datafetch = data.filter((x) =>
    x.title.toLowerCase().includes(search.toLowerCase()) ||
    x.description.toLowerCase().includes(search.toLowerCase()))

  const sortorder = () => {
    if (sort === 'low') {
      return [...datafetch].sort((a, b) => a.price - b.price)
    } else if (sort === 'heigh') {
      return [...datafetch].sort((a, b) => b.price - a.price)
    } else if (sort === 'az') {
      return [...datafetch].sort((a, b) => a.title.localeCompare(b.title))
    } else if (sort === 'za') {
      return [...datafetch].sort((a, b) => b.title.localeCompare(a.title))
    }else if (sort === 'lowrating') {
      return [...datafetch].sort((a, b) => a.rating - b.rating)
    }else if (sort === 'heighrating') {
      return [...datafetch].sort((a, b) => b.rating - a.rating)
    }
    else {
      return datafetch
    }
    
  }
  const cartclick = (item) => {
    const user = JSON.parse(sessionStorage.getItem('loginuser'))
    if (user === null) {
      navigate('/login')
    }
    if (cart.some(s => s.id === item.id)) {
      setCard(cart.filter((x) => x.id !== item.id))
    } else {
      setCard([...cart, item])
    }
  }
  const showdatacart = () => {
    const user = JSON.parse(sessionStorage.getItem('loginuser'))
    console.log(user)
    if (user === null) {
      navigate('/login')
    }
    setAddcart(!addcart)
 
  }
 const{theme,toggle}=UseTheme()

 useEffect(()=>{
    setChange(theme)

 },[theme])
  return (
    <div className={change==='black' ?"bg-black text-white" :"bg-white text-black"}>
      <div className="flex bg-gray-500 h-[15vh] w-screen right-0 left-0 text-white justify-between pr-4 fixed">
        <div className='h-[10vh] '>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/038/516/357/small_2x/ai-generated-eagle-logo-design-in-black-style-on-transparant-background-png.png" alt="image" className='h-23 w-23 p-2 rounded-full text-white' />
        </div>
        <div className='flex h-12 w-120 bg-white rounded-3xl m-4 p-1 '>
          <input type="text" placeholder='Search Products...'
            value={search} onChange={(e) => setSearch(e.target.value)}
            className='h-10 w-200 rounded-2xl  text-black focus:outline-none text-xl pl-3' />
          <img src="/searchicon.png" alt="image" className='h-7 mt-2' />
        </div>
        <div className='flex gap-5 mt-7 text-black'>
          <Link to={'/login'} className='text-xl font-bold hover:scale-105 hover:underline'>Login</Link>
          <Link to={'/signup'} className='text-xl font-bold hover:scale-105 hover:underline'>Signup</Link>
        </div>
        <button className='ml-8 mt-6 mb-3 h-10 w-30 bg-white rounded-xl hover:bg-black hover:text-white font-bold  text-black' onClick={toggle}> {change==="black" ? "white Mode" : "black Mode"}</button>
        <div className='flex item-center justify-center bg-zinc-300 h-12 w-25 rounded-full mt-5 hover:scale-105'>
          <button className='text-black font-bold text-xl ' onClick={() => showdatacart()}>Cart:-{cart.length}</button>
        </div>
         
        <div className="flex flex-col w-35 pt-5">
          <select id="options"
            className="block w-full rounded-xl  bg-white px-3 py-2 text-gray-700 font-bold " value={sort}
            onChange={(e) => setSort(e.target.value)}>
            <option value="">--Sort By--</option>
            <option value='az'>A-Z</option>
            <option value='za'>Z-A</option>
            <option value='low'> Low to Heigh Price</option>
            <option value='heigh'>Heigh to Low Price</option>
            <option value='lowrating'> Low to Heigh rating</option>
            <option value='heighrating'>Heigh to Low rating</option>
          </select>
        </div>
      </div>

      <div>
        <div className="flex  h-auto w-seceen text-white justify-between pr-4 ">

          {loding ? (<div className="flex items-center justify-center w-full h-100 bg-white rounded-lg shadow-md">
            <div className="flex flex-col items-center gap-3">
              <div className="w-30 h-30 rounded-full border-10 border-gray-300 border-t-blue-600 animate-spin" role="status" aria-label="Loading"></div>
              <span className="text-sm text-gray-600 font-bold">Loading, please wait…</span>
            </div>
          </div>) :
            (<div className=' opacity-100   grid grid-cols-4 gap-6 p-6 mt-20 '>
              {addcart ?(sortorder().map((x) =>
                <div key={x.id} className={change==='black' ?"bg-black text-white border-3 h-auto w-75 pl-2" :"bg-white text-black border-3 h-auto w-75 pl-2" }>
                  <LazyLoadImage className='h-40 pl-9 '
                    src={x.images[0]} />
                  Title:-{x.title}<br />
                  <p className='font-bold text-xl'>Price:-${x.price}</p>
                  Category:- {x.category}<br />
                  DiscountPercentage:- {x.discountPercentage}<br />
                  Rating:- {x.rating}<br />
                  Stock:- {x.stock}<br />
                  <p className='hover:text-green-500 font-bold ml-20 underline text-gray-600 hover:scale-105'><Link to={`/product/${x.id}` }>View Details</Link></p>
                  <button className='ml-8 mt-3 mb-3 h-10 w-30 bg-gray-800 rounded-xl hover:bg-gray-500 text-white' onClick={() => cartclick(x)}>{cart.some(y => y.id == x.id) ? <p className='bg-red-700 h-full rounded-xl pt-2'>remove to cart</p> : <p className='bg-green-700 h-full rounded-xl pt-2'>add to cart</p>}</button>
                </div>
              )): (cart.length > 0 ? (cart.map((x) =>
                <div className={change==='black' ?"bg-black text-white border-3 h-auto w-75 pl-2" :"bg-white text-black border-3 h-auto w-75 pl-2" }>

                  <LazyLoadImage className='h-40 pl-9 '
                    src={x.images[0]} />
                  Title:-{x.title}<br />
                  <p className='font-bold text-xl'>Price:-${x.price}</p>
                  Category:- {x.category}<br />
                  DiscountPercentage:- {x.discountPercentage}<br />
                  Rating:- {x.rating}<br />
                  Stock:- {x.stock}<br />
                  <p className='hover:text-green-500 font-bold ml-20 underline text-gray-600 hover:scale-105'><Link to={`/product/${x.id}` }>View Details</Link></p>
                  <button className='ml-8 mt-3 mb-3 h-10 w-30 bg-red-800 rounded-xl  text-white' onClick={() => cartclick(x)}>remove to cart</button>
                </div>
              )) : (<h1 className='col-span-full font-bold text-2xl m-30 ml-50'>Your Cart is Empty</h1>))}
            </div>)}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Center
