import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import SideNav from '../Components/SideBar/SideNav'
import MainContainer from '../Components/ProfileSection/MainContainer'
import FooterIcons from '../Components/IconFooter/FooterIcons'
import { useParams } from 'react-router-dom'

function UserProfile() {
  const { pic } = useParams();

  return (
   <>
    <Navbar/>
    <div className='w-screen h-[4rem] bg-[#f6f6f6]'/>
    <div className='w-screen h-full bg-[#f6f6f6] flex  justify-center items- gap-x-2 pb-4'>
        <SideNav/>
        <MainContainer img={pic}/>
    </div>
    <FooterIcons/>
   </>
  )
}

export default UserProfile