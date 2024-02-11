import React from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Footer from "./Footer";
import SideList from "./SideList";

function SideNav() {
  return (
    <div className="w-[22%]  flex flex-col items-center">
      {/* Profile Pic sec */}
      <div className="w-11/12 bg-white rounded-t-lg pb-2">
        <div className="w-full h-[22rem] bg-white rounded-t-lg flex flex-col items-center justify-center gap-y-1">
          <div className="h-[65%] w-[93%] rounded-2xl">
            <img src="men.jpg" className="w-full h-full rounded-3xl" alt="" />
          </div>
          <div className="w-full flex flex-col pl-2 gap-y-1 mt-3">
            <h1 className="text-xl font-semibold">Muhammed Anas</h1>
            <h1 className="text-xl text-[#596670] font-semibold">MN001XDR</h1>
          </div>
          <div className="w-full pl-2 flex gap-x-1 text-[#9a9a9a] items-center justify-start">
            <RemoveRedEyeOutlinedIcon />
            <p className="mb-0.5">View Profile</p>
          </div>
        </div>
      </div>

      {/* SideBar List Component */}
      <SideList />

      {/* Download our App component */}
      <div className="w-[93%] rounded-lg flex flex-col justify-center  mt-6 p-3 pb-5 bg-white">
        <h1 className="pl-2 font-bold">Download our App</h1>
        <small className="pl-2 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </small>
        <div className=" w-11/12 flex flex-col items-center gap-y-3 mt-3 ">
          <div className="h-[3.5rem] w-11/12 flex items-center rounded-md bg-black">
            <img
              src="playstore.png"
              className="w-1/5 h-[80%] ml-3"
              alt="playstore"
            />
            <div className="text-white text-xs">
              <p className="text-xs pl-2">GET IT ON </p>
              <p className="text-2xl font-semibold pl-2">Google Play</p>
            </div>
          </div>
          <div className="h-[3.5rem] w-11/12 flex items-center rounded-md bg-black">
            <img src="apple.png" className="w-1/5 h-[83%] ml-3" alt="apple" />
            <div className="text-white text-xs">
              <p className="text-xs pl-2 font-semibold">Download on the </p>
              <p className="text-2xl font-semibold pl-2">App Store</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Footer Component */}
      <Footer />
      
    </div>
  );
}

export default SideNav;
