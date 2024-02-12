import React from 'react'
import { useLocation } from 'react-router-dom'
import { userListItems } from '../config'


function Navbar() {
  const location = useLocation()
  return (
    <div className='w-screen h-[4.7rem] flex md:block bg-white gap-x-3 overflow-hidden'>
      
      {/* Profile */}
      <div className='w-16 h-full flex md:hidden flex-col justify-center ml-3'>
        <img className='w-full h-16 rounded-full' src="/profilem.png" alt="" /> 
      </div>

        {/* Users Lists */}
        <div className={`w-[65%] h-full ${location.pathname === '/profile' ? 'hidden' : ''} flex md:hidden space-x-3 items-center`}>
            {userListItems.slice(0, 3).map((item, index) => (
            <div key={item + index} className='w-16 h-16  rounded-full border-[#d91275] border-2'>
             <img loading='lazy' src={item.pic} className='w-full h-full rounded-full border border-yellow-600' alt="" />
            </div>
          ))}
        </div>


      {/* Logout Button */}
        <div className='w-2/12 h-full float-right bg-white  hidden sm:flex justify-center items-center gap-x-0.5'>
            <img className='w-[15%]' src="/log.png" alt="" />
            <p className='font-semibold'>Logout</p>
        </div>
    </div>
  )
}

export default Navbar