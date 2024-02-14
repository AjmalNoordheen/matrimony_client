import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import UserInterests from '../ProfileSection/UserInterests';
import { useNavigate } from 'react-router-dom';
import Footer from '../SideBar/Footer';
import DownloadApp from '../SideBar/DownloadApp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { userListItems } from '../config';

function PostsList() {
    const navigate = useNavigate()
    const [like,setLike] = useState({})

    // handling like function
    const manageLike = (id) => {
        setLike(prevLikes => ({
            ...prevLikes,
            [id]: !prevLikes[id] 
        }));
    };
    

    // naviagte to profile
    const handleProfileClick = (img) => {
        navigate(`/profile`, { state: { img } });
        sessionStorage.setItem('profileImg', img);
    };

  return (
    <div className=' w-[85%] md:w-[43%] xl:w-[39%] h-full flex flex-col  rounded-2xl  gap-y-3 bg-[#f6f6f6]'>
      {userListItems.map((item,index)=><>
      <div key={item.id} className='w-full h-full bg-white rounded-b-2xl '>
           <div onClick={()=>handleProfileClick(item.pic)} className='h-full'>
                <img loading='lazy' src={item.pic} className='cursor-pointer rounded-t-2xl w-full h-full' alt="" />
           </div>

            {/* Like ,Share ,info Icon section */}
           <div className='flex justify-between p-4'>
                <div >
                    <h1 className='text-2xl font-semibold'>Faheema</h1>
                    <LocationOnIcon className='text-[#9a9a9a]' fontSize="inherit"/>
                    <small className="text-sm font-semibold text-[#9a9a9a]"> 52km from you</small>
                </div>
                 <div className='flex justify-between items-center gap-x-1 sm:gap-x-3'>
                 <div onClick={() => manageLike(item.id)} className='w-10 h-10 sm:h-12 sm:w-12 rounded-full hover:scale-105 flex cursor-pointer justify-center items-center text-[#d91275] bg-[#f5c6dd]'>
                     {like[item.id] ? <FavoriteIcon fontSize='medium'/> : <FavoriteBorderIcon fontSize='medium'/>}
                 </div>

                    <div className='w-10 h-10 sm:h-12 sm:w-12  rounded-full flex hover:scale-105 cursor-pointer justify-center items-center  bg-[#ffebe0] text-[#471476]'>
                        < SendIcon fontSize='medium' className='-rotate-[30deg] mb-1 ml-1'/>
                    </div>
                    <div className='w-10 h-10 sm:h-12 sm:w-12  rounded-full flex hover:scale-105 cursor-pointer justify-center items-center  bg-white shadow-md shadow-slate-400'>
                        <InfoOutlinedIcon fontSize='medium'/>
                    </div>
                </div>
            </div>

                   {/*Intersted items listed Component */}
                    <UserInterests/>
       </div>
                    </>) }
            <div className='flex sm:hidden'>
                <Footer/>
                <DownloadApp/>
            </div>
    </div> 
  )
}

export default PostsList