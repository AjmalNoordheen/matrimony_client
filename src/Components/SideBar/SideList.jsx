import React from 'react'
import AddHomeIcon from '@mui/icons-material/AddHome';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import RocketRoundedIcon from '@mui/icons-material/RocketRounded';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useNavigate } from 'react-router-dom';

function SideList() {
    const navigate = useNavigate('')
  return (
    <>
    {/* SideBar List */}
    <div className='w-11/12 flex flex-col items-center gap-y-3  py-4 rounded-b-lg font-semibold bg-white'>
            <div onClick={()=>naviget('/')} className='w-[93%] h-[3.5rem] bg-[#f4bbd7] rounded-lg flex cursor-pointer items-center gap-3'>
                <AddHomeIcon fontSize='medium' className='ml-3 text-[#d91275]'/>
                <h1 className='text-lg'>Home</h1>
            </div>
            <div className='w-[93%] h-[3.5rem] hover:bg-[#f4bbd7]  hover:text-[#d91275] cursor-pointer  bg-white rounded-lg text-[#9a9a9a] flex items-center gap-3'>
                <ChatBubbleIcon fontSize='medium' className='ml-3'/>
                <h1 className='text-lg'>Messages</h1>
            </div>
            <div className='w-[93%] h-[3.5rem] rounded-lg bg-white hover:bg-[#f4bbd7] hover:text-[#d91275] cursor-pointer text-[#9a9a9a] flex items-center gap-3'>
                <SettingsRoundedIcon fontSize='medium' className='ml-3'/>
                <h1 className='text-lg'>Settings</h1>
            </div>

           <div className='w-[93%] h-[3.5rem] rounded-lg bg-white hover:bg-[#f4bbd7] hover:text-[#d91275] cursor-pointer text-[#9a9a9a] flex items-center gap-3'>
                <RocketRoundedIcon fontSize='medium' className='ml-3'/>
                <h1 className='text-lg'>Upgrade</h1>
            </div>
            <div className='w-[93%] h-[3.5rem] rounded-lg hover:bg-[#f4bbd7] hover:text-[#d91275] cursor-pointer bg-white text-[#9a9a9a] flex items-center gap-3'>
                <TravelExploreIcon fontSize='medium' className='ml-3'/>
                <h1 className='text-lg'>Explore</h1>
            </div>
        </div>
    </>
  )
}

export default SideList