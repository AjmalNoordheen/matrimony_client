import React from 'react'


function Navbar() {
  return (
    <div className='w-screen h-[4.7rem] flex md:block bg-white justify-around overflow-hidden'>
      <div className='w-14 h-full flex md:hidden flex-col justify-center'>
        <img className='w-full h-14 rounded-full' src="men.jpg" alt="" /> 
      </div>
      <div className='w-[65%] h-full flex md:hidden space-x-3 items-center'>
          {Array.from({length:4}).map((item,index)=>
             <div key={item+index} className='w-14 h-14 rounded-full border-[#d91275] border-2'>
             <img src="pro1.webp" className='w-full h-full rounded-full' alt="" />
           </div>
          )}
      </div>
        <div className='w-2/12 h-full float-right bg-white  hidden sm:flex justify-center items-center gap-x-0.5'>
            <img className='w-[15%]' src="/log.png" alt="" />
            <p className='font-semibold'>Logout</p>
        </div>
    </div>
  )
}

export default Navbar