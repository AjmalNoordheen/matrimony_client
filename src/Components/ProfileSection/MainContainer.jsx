import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import BottomContetnt from "./BottomContetnt";
import UserInterests from "./UserInterests";
import Footer from "../SideBar/Footer";
import DownloadApp from "../SideBar/DownloadApp";

function MainContainer({img}) {
  return (
    <div className="w-[90%] sm:w-[64%] h-full flex flex-col gap-y-5">
      <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 gap-x-2">
        <div className="w-[95%] h-[30%] lg:h-auto lg:w-[49%] bg-amber-700 rounded-xl">
          <img loading="lazy" src={img} className="w-full rounded-xl h-96 lg:h-full" alt="cover" />
        </div>
        <div className=" w-[95%] lg:w-[49%] bg-white shadow-md font-semibold shadow-slate-400 h-full pb-5 rounded-xl">
          
          {/* User profile Details */}
          <div className="flex flex-col pl-3 ml-2 py-3 gap-y-1.5">
            <h1 className="text-2xl font-bold">Faheema</h1>
            <h1 className="text-xl font-bold text-[#596670]">MN001XDR</h1>
            <div className="text-[#9a9a9a]">
            <LocationOnIcon fontSize="inherit"/>
            <small className="text-sm font-semibold"> 52km from you</small> 
            </div>
            <h1 className="text-lg font-normal ">Never Married</h1>
            <h1 className="text-lg font-normal ">Bachelors (BSc Computer Science)</h1>
            <h1 className="text-lg font-normal ">Kozhikode, Kozhikode, Kerala</h1>
          </div>

           {/* User Interst components */}
             <UserInterests/>
             
           {/* 3 buttons in Rightside of profile*/}
            <div className="flex flex-col  justify-between  pt-4 gap-y-4">
            <div className="flex justify-around w-full">
            <div className="lg:text-sm xl:text-xl md:w-[45%]  font-semibold flex items-center cursor-pointer hover:scale-105 bg-[#f5c6dd] px-3 py-2 rounded-full gap-x-2">
                 <FavoriteBorderIcon className="text-[#d91275]"/>
                 <p>Show Interest</p>
              </div>
              <div className="lg:text-sm xl:text-xl md:w-[45%]  font-semibold flex cursor-pointer bg-[#ffebe0] hover:scale-105 px-3 py-2 rounded-full items-center gap-x-2">
                <SendIcon className="text-[#471476] ml-1 -rotate-45"/>
                <p>Share Profile</p>
              </div>
            </div>
              <div className="flex text-xl font-semibold hover:bg-black items-center  hover:scale-105 justify-center bg-[#d91275] px-3 py-2 rounded-full text-white m-auto gap-x-2 w-[93%] cursor-pointer ">
                 <PhoneIcon/>
                 <p>Request Call</p>
              </div>
            </div>
        </div>
      </div>

      {/* Bottom container Details */}
      <BottomContetnt/>
      <div className="flex items-center justify-around sm:hidden pb-10">
          <Footer/>
          <DownloadApp/>
      </div>
    </div>
  );
}

export default MainContainer;
