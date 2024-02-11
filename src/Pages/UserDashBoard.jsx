import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import SideNav from '../Components/SideBar/SideNav'
import PostsList from '../Components/Dashboard/PostsList'
import ChatUser from '../Components/Dashboard/ChatUser'
import FooterIcons from '../Components/IconFooter/FooterIcons'

function DashBoardPage() {
  return (
    <>
      <Navbar/>
      <div className='w-screen h-[2rem] bg-[#f6f6f6]'/>
      <div className='w-screen h-full bg-[#f6f6f6] flex justify-center items- gap-x-2 pb-20'>
        <SideNav/>
        <PostsList/>
        <ChatUser/>
      </div>
      <FooterIcons/>
    </>
  )
}

export default DashBoardPage