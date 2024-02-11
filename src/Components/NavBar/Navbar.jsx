import React from 'react'


function Navbar() {
  return (
    <div className='w-screen h-[4.7rem] bg-white'>
        <div className='w-2/12 h-full float-right bg-white flex justify-center items-center gap-x-0.5'>
            <img className='w-[15%]' src="/log.png" alt="" />
            <p className='font-semibold'>Logout</p>
        </div>
    </div>
  )
}

export default Navbar