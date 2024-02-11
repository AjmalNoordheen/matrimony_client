import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import SideNav from '../Components/SideBar/SideNav'
import MainContainer from '../Components/ProfileSection/MainContainer'

function UserProfile() {
  return (
   <>
    <Navbar/>
    <div className='w-screen h-[4rem] bg-[#f6f6f6]'/>
    <div className='w-screen h-full bg-[#f6f6f6] flex  justify-center items- gap-x-2 '>
        <SideNav/>
        <MainContainer/>
    </div>
   </>
  )
}

export default UserProfile