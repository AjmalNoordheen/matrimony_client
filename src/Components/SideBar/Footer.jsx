import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

function Footer() {
  return (
    <div className='w-full py-3 mt-2 flex flex-col  gap-y-3'>
                    <div className='w-full mx-4 md:mx-0 grid grid-cols-3 gap-1  '>
                        <small className='text-xs font-semibold col-span-2 md:col-span-1'>Privacy Policy</small>
                        <small className='text-xs font-semibold col-span-2 md:col-span-2'>Terms and Condition</small>
                        <small className='text-xs font-semibold col-span-2 md:col-span-1'>Feedback</small>
                        <small className='text-xs font-semibold col-span-2 md:col-span-1'>Help & Support</small>
                        <small className='text-xs font-semibold col-span-2 md:col-span-1 ml-'>Pricing</small>
                    </div>
                    <div className='w-full mx-4 md:mx-0 text-[#d91275] grid grid-cols-7 '>
                        <YouTubeIcon fontSize='small' className='col-span-1'/>
                        <InstagramIcon fontSize='small' className='col-span-1'/>
                        <FacebookIcon fontSize='small' className='col-span-1'/>
                        <XIcon fontSize='small' className='col-span-1'/>
                        <div className='text-[#a0a0a0] col-span-6 md:col-span-3 flex items-center' >
                          <CopyrightOutlinedIcon fontSize='inherit' />
                          <small>2024 Mynikkah</small>
                        </div>
                    </div>
                </div>
  )
}

export default Footer