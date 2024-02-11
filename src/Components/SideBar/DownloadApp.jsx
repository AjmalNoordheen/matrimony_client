import React from 'react'

function DownloadApp() {
  return (
    <>
    {/* Playstore/Apple Dowload section */}
    <div className="w-[99%] lg:w-[93%] rounded-lg flex flex-col justify-center  mt-6 lg:p-3 pb-5 bg-white">
        <h1 className="pl-2 font-bold">Download our App</h1>
        <small className="pl-2 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </small>
        <div className=" w-11/12 flex flex-col items-center gap-y-3 mt-3 ">
          <div className="h-[3.5rem] w-full lg:w-11/12 flex items-center rounded-md bg-black">
            <img
              src="playstore.png"
              className="w-1/5 h-[80%] ml-3"
              alt="playstore"
            />
            <div className="text-white text-xs">
              <p className="text-xs pl-2">GET IT ON </p>
              <p className="text-sm sm:text-xl md:text-lg lg:text-2xl font-semibold pl-2">Google Play</p>
            </div>
          </div>
          <div className="h-[3.5rem] w-full lg:w-11/12 flex items-center rounded-md bg-black">
            <img src="apple.png" className="w-1/5 h-[83%] ml-3" alt="apple" />
            <div className="text-white text-xs">
              <p className="text-xs pl-2 font-semibold">Download on the </p>
              <p className="text-sm sm:text-xl md:text-lg lg:text-2xl font-semibold pl-2">App Store</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DownloadApp