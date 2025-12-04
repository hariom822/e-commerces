import React from 'react'

const Footer = () => {
  return (
    <div className=" bg-slate-400 h-auto w-seceen  text-black">
      <div className="flex  h-auto w-seceen  text-black">
        <div>
          <div className='h-[10vh] '>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/038/516/357/small_2x/ai-generated-eagle-logo-design-in-black-style-on-transparant-background-png.png" alt="image" className='h-20 w-20 p-2 ml-20  rounded-full text-white' />
          </div>
          <p className="text-black  p-5">
            Quality xs, fast delivery,<br /> and exceptional customer <br />service — all in one place. Follow us <br />for launches, deals and more!
          </p>
        </div>

        <div className='h-full w-40 p-5 ml-30'>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 font-bold text-black">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">Categories</a></li>
            <li><a href="#" className="hover:underline">Offers</a></li>
          </ul>
        </div>
        <div className='h-full w-40 p-5 ml-20'>
          <h4 className="font-semibold mb-4  w-40">Customer Service</h4>
          <ul className="space-y-2 ml-6 font-bold  text-black">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Track Order</a></li>
          </ul>
        </div>
        <div className='ml-30'>
          <div className="mt-6 font-bold text-black ">
            <h4 className="font-semibold mb-4  w-45">Customer Support</h4>
            <p>Call us: <a href="tel:+911234567890" className="hover:underline">+91 6367536317</a></p>
            <p>Email: <a href="mailto:hello@shopmate.com" className="hover:underline">hariomsharma@shopmate.com</a></p>
          </div>
          <div className='flex'>
            <img src="https://cdn-icons-png.flaticon.com/256/124/124021.png" alt="twittericon" className='h-7 m-4' />

            <img src="https://static.vecteezy.com/system/resources/previews/021/495/985/non_2x/facebook-social-media-logo-icon-free-png.png" alt="fesbookicon" className='h-7 m-4' />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="instaicon"
              className='h-7 m-4' />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png" className='h-7 m-4 ' alt="Linkedinimg" />
          </div>
        </div>
      </div>

      <div className=' text-2xl h-[10vh] p-3   text-center text-black'>
        <h1 className='font-bold'>© 2025 Hariom Sharma | Privacy Policy | Terms of Service</h1>
      </div>
    </div>
  )
}

export default Footer
