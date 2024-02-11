import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';

function MainContainer() {
  return (
    <div className="w-[64%] h-full flex flex-col gap-y-5">
      <div className="flex gap-x-2">
        <div className="w-[49%] bg-amber-700 rounded-xl">
          <img src="/Capture.PNG" className="w-full rounded-xl h-full" alt="cover" />
        </div>
        <div className="w-[49%] bg-white shadow-md font-semibold shadow-slate-400 h-full pb-5 rounded-xl">
          <div className="flex flex-col pl-3 ml-2 py-3 gap-y-1.5">
            <h1 className="text-2xl font-bold">Faheema</h1>
            <h1 className="text-xl font-bold text-[#596670]">MN001XDR</h1>
            <div className="text-[#9a9a9a]">
            <LocationOnIcon fontSize="inherit"/>
            <small className="text-sm font-semibold"> 52km from you</small> 
            </div>
            <h1 className="text-xl font-medium ">Never Married</h1>
            <h1 className="text-xl font-medium ">Bachelors (BSc Computer Science)</h1>
            <h1 className="text-xl font-medium ">Kozhikode, Kozhikode, Kerala</h1>
          </div>

          <div className="flex flex-col gap-y-3 pl-3 pb-9 ml-2">
            <p className="text-base font-semibold w-[80%]">
              Lorem Ipsum is simply dummy text of the 
              printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
            <h1 className="text-2xl font-bold">Interests</h1>
            <div className="w-[90%] flex justify-between text-[#572982]">
              <div className="border-2 border-[#572982] rounded-full px-3 flex items-center justify-center py-1">
                <p>📺 TV Shows</p>
              </div>
              <div className="border-2 border-[#572982] rounded-full px-3 flex items-center justify-center py-1">
                <p>📸 Photography</p>
              </div>
              <div className="border-2 border-[#572982] rounded-full px-3 flex items-center justify-center py-1">
                <p>🎨 Design</p>
              </div>
            </div>
            <div className="flex w-[66%] text-[#572982]  justify-between">
            <div className="border-2 border-[#572982] rounded-full px-3 flex items-center justify-center py-1">
                <p>🖼️ Art Gallery</p>
              </div>
              <div className="border-2 border-[#572982] rounded-full px-3 flex items-center justify-center py-1">
                <p>✨Board games</p>
              </div>
            </div>

          </div>

            <div className="flex flex-col  justify-between  pt-4 gap-y-4">
            <div className="flex justify-around w-full">
            <div className="text-xl font-semibold flex items-center hover:scale-105 bg-[#f5c6dd] px-3 py-2 rounded-full gap-x-2">
                 <FavoriteBorderIcon className="text-[#d91275]"/>
                 <p>Show Interest</p>
              </div>
              <div className="text-xl font-semibold flex bg-[#ffebe0] hover:scale-105 px-3 py-2 rounded-full items-center gap-x-2">
                <SendIcon className="text-[#471476]"/>
                <p>Share Profile</p>
              </div>
            </div>
              <div className="flex text-xl font-semibold hover:bg-black items-center  hover:scale-105 justify-center bg-[#d91275] px-3 py-2 rounded-full text-white m-auto gap-x-2 w-[90%] ">
                 <PhoneIcon/>
                 <p>Request Call</p>
              </div>
            </div>
        </div>
      </div>

      <div className="w-full bg-white shadow-md shadow-slate-300 h-full gap-y-8 rounded-xl p-4 flex flex-col">
          <div className="space-y-1">
            <h1 className="text-2xl font-black pb-2">Bio</h1>
            <h1 className="text-xl font-bold text-[#9a9a9a]">Basic Information</h1>
            <div className="w-2/3  grid grid-cols-2 text-lg">
               <p className="col-span-1 text-lg font-bold">Date of Birth </p>
               <p className="col-span-1 font-medium">27-12-1993</p>
               <p className="col-span-1 text-lg font-bold">Email Id</p>
               <p className="col-span-1 font-medium">example@gmail.com</p>
               <p className="col-span-1 text-lg font-bold">Blood Group</p>
               <p className="col-span-1 font-medium">AB+</p>
               <p className="col-span-1 text-lg font-bold">Height</p>
               <p className="col-span-1 font-medium">164cm</p>
               <p className="col-span-1 text-lg font-bold">Weight</p>
               <p className="col-span-1 font-medium">64kg</p>
            </div>
          </div>
          <div className="space-y-1">
          <h1 className="text-xl text-[#9a9a9a] font-bold">Religious Information</h1>
            <div className="w-2/3 grid grid-cols-2 text-lg">
               <p className="col-span-1 text-lg font-bold">Religion </p>
               <p className="col-span-1 font-medium">Islam</p>
               <p className="col-span-1 text-lg font-bold">Sect</p>
               <p className="col-span-1 text-lg font-medium">Sunni</p>
               <p className="col-span-1 font-bold">Perform Namaz</p>
               <p className="col-span-1 text-lg font-medium">Always</p>
               <p className="col-span-1 font-bold">Read Qur'an</p>
               <p className="col-span-1 text-lg font-medium">Daily</p>
               <p className="col-span-1 text-lg font-bold">Religiousness</p>
               <p className="col-span-1 text-lg font-medium">Religious</p>
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-xl font-bold text-[#9a9a9a]">Educational and Professional Information</h1>
            <div className="w-2/3  grid grid-cols-2 text-lg">
              <p className="font-bold">Education</p>
              <p className="font-medium">Bachelors (Bsc Computer Science)</p>
              <p className="font-bold">Profession</p>
              <p className="font-medium">Computer Engineer</p>
            </div>
          </div>
      <div className="w-full h-14 text-lg font-semibold hover:bg-black text-white bg-[#d91275] rounded-full flex justify-center items-center">
        <p>Upgrade to See More</p>
      </div>
      </div>
    </div>
  );
}

export default MainContainer;
