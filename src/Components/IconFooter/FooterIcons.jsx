import React from 'react'
import AddHomeIcon from '@mui/icons-material/AddHome';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import RocketRoundedIcon from '@mui/icons-material/RocketRounded';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

function FooterIcons() {
  return (
    <div className='fixed sm:hidden bottom-0 bg-white w-full h-14 items-center flex justify-around'>
        <div className='bg-[#f4bbd7] rounded-full p-1 text-[#d91275]'>
            <AddHomeIcon  fontSize='large'/>
        </div>
        <div className='hover:bg-[#f4bbd7] rounded-full p-1 text-[#9a9a9a]'>
            <ChatBubbleIcon  fontSize='large'/>
        </div>
        <div className='hover:bg-[#f4bbd7] rounded-full p-1 text-[#9a9a9a]'>
             <SettingsRoundedIcon  fontSize='large'/>
        </div>
        <div className='hover:bg-[#f4bbd7] rounded-full p-1 text-[#9a9a9a]'>
            <RocketRoundedIcon  fontSize='large'/>
        </div>
        <div className='hover:bg-[#f4bbd7] rounded-full p-1 text-[#9a9a9a]'>
            <TravelExploreIcon  fontSize='large'/>
        </div>
    </div>
  )
}

export default FooterIcons