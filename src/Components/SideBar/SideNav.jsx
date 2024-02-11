import React from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Footer from "./Footer";
import SideList from "./SideList";
import { useLocation } from "react-router-dom";
import DownloadApp from "./DownloadApp";

function SideNav() {
  const location = useLocation('')
  return (
    <div className="sm:w-[35%] md:w-[30%]  lg:w-[22%]  hidden sm:flex flex-col items-center">
      {/* Profile Pic sec */}
      <div className="w-11/12 bg-white rounded-t-lg pb-2">
        <div className="w-full h-[22rem] bg-white rounded-t-lg flex flex-col items-center justify-center gap-y-1">
          <div className="h-[65%] w-[93%] rounded-2xl">
            <img src="men.jpg" className="w-full h-full rounded-3xl" alt="" />
          </div>
          <div className="w-full flex flex-col pl-2 gap-y-1 mt-3">
            <h1 className="text-base sm:text-xl font-semibold">Muhammed Anas</h1>
            <h1 className="text-base sm:text-xl text-[#596670] font-semibold">MN001XDR</h1>
          </div>
          <div className="w-full pl-2 flex gap-x-1 cursor-pointer text-[#9a9a9a] items-center justify-start">
            <RemoveRedEyeOutlinedIcon />
            <p className="mb-0.5">View Profile</p>
          </div>
        </div>
      </div>

      {/* SideBar List Component */}
      <SideList />

      {/* Download our App component */}
      <DownloadApp/>

      {/* Sidebar Footer Component */}
      {location.pathname !=='/' && <Footer />}
      
    </div>
  );
}

export default SideNav;
