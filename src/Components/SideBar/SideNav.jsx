import React from 'react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import AddHomeIcon from '@mui/icons-material/AddHome';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import RocketRoundedIcon from '@mui/icons-material/RocketRounded';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

function SideNav() {
  return (
    <div className='w-[22%] py-1 flex flex-col items-center bg-red-300'>
        {/* Profile Pic sec */}
        <div className='w-11/12 bg-white'>
            <div className='w-full h-[22rem] bg-yellow-500 flex flex-col items-center justify-center gap-y-1'>
                <div className='h-[65%] w-[93%] rounded-2xl'>
                    <img src="men.jpg" className='w-full h-full rounded-2xl' alt="" />
                </div>
                <div className='w-full flex flex-col pl-2 gap-y-1 mt-3'>
                    <h1 className='text-xl font-semibold'>Muhammed Anas</h1>
                    <h1 className='text-xl text-slate-700 font-semibold'>MN001XDR</h1>
                </div>
                <div className='w-full pl-2 flex font-light text-slate-500 items-center justify-start'>
                    <RemoveRedEyeOutlinedIcon />
                    <p>View Profile</p>
                </div>
            </div>
        </div>
        {/* List */}
        <div className='w-11/12 flex flex-col items-center gap-y-3 mt-2 py-2 font-semibold bg-white'>
            <div className='w-[93%] h-[3.5rem] bg-[#f4bbd7] rounded-lg flex items-center gap-3'>
                <AddHomeIcon fontSize='medium' className='ml-3 text-[#d91275]'/>
                <h1 className='text-lg'>Home</h1>
            </div>
            <div className='w-[93%] h-[3.5rem] bg-white rounded-lg text-[#9a9a9a] flex items-center gap-3'>
                <ChatBubbleIcon fontSize='medium' className='ml-3'/>
                <h1 className='text-lg'>Messages</h1>
            </div>
            <div className='w-[93%] h-[3.5rem] rounded-lg bg-white text-[#9a9a9a] flex items-center gap-3'>
                <SettingsRoundedIcon fontSize='medium' className='ml-3'/>
                <h1 className='text-lg'>Settings</h1>
            </div>

           <div className='w-[93%] h-[3.5rem] rounded-lg bg-white text-[#9a9a9a] flex items-center gap-3'>
                <RocketRoundedIcon fontSize='medium' className='ml-3'/>
                <h1 className='text-lg'>Upgrade</h1>
            </div>
            <div className='w-[93%] h-[3.5rem] rounded-lg bg-white text-[#9a9a9a] flex items-center gap-3'>
                <TravelExploreIcon fontSize='medium' className='ml-3'/>
                <h1 className='text-lg'>Explore</h1>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default SideNav