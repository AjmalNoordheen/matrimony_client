import React from 'react'
import Users from './Users'
import Footer from '../SideBar/Footer'

function ChatUser() {
  return (
    <>
    <div className='hidden md:flex w-[30%] xl:w-[24%] h-full  flex-col items-center gap-y-2 pb-2 '>
      
      {/* Right most Messeges Section */}
      <div className='w-[98%] xl:w-11/12 bg-white px-2   rounded-2xl'>
        <div className='flex justify-between  items-center py-2'>
          <p className='text-lg font-bold'>Messages</p>
          <small className='text-base  text-[#d91275]'>see all</small>
        </div>
        {/* Users Listing */}
        <Users/> 
      </div>

        {/* Rightmost Like And Matches Section */}
      <div className='w-[98%] xl:w-11/12 bg-white px-2 py-0.5 mt-4  rounded-2xl'>
      <div className='flex justify-between items-center pb-1'>
          <p className='text-lg font-bold'>Likes and Matches</p>
          <small className='text-base  text-[#d91275]'>see all</small>
        </div>
        <div className='flex relative text-base py-1 mt-4'>
          <div className='w-[55%] text-white bg-[#d91275] z-20 p-1 flex justify-center items-center rounded-lg'>
            <p>Likes</p>
          </div>
          <div className='w-[60%] bg-[#f5c6dd] p-1  absolute right-0 justify-center items-center rounded-lg'>
           <p className='text-center'>Matches</p> 
          </div>
        </div>
        <Users/>
      </div>

        {/* Footer Component with socialmedia icons */}
      <div className='w-11/12  px-2 py-0.5 mt-4  rounded-2xl'>
      <Footer/>
    </div>
    </div>
        </>

  )
}

export default ChatUser