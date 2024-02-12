import React from 'react'
import { useLocation } from 'react-router-dom'

function UserInterests() {
  const location  = useLocation()

  const interests = [
    { text: '📺 TVShows', hidden: false },
    { text: '📸 Photography', hidden: false },
    { text: '🎭 Acting', hidden: false },
    { text: '🎨 Design', hidden:location.pathname==='/' ? false: true }
  ];

  return (
    <>
    <div className={`${location.pathname ==='/'?'ml-0 rounded-b-2xl':'ml-2'} flex flex-col gap-y-3 pl-3 pb-9  bg-white`}>
            <p className={location.pathname ==='/'?"text-base  w-[94%]":"text-base font-semibold w-[80%]"}>
              Lorem Ipsum is simply dummy text of the 
              printing and typesetting industry. Lorem Ipsum has been the industry's.
            </p>

            {/* Interests */}
            <h1 className="text-2xl font-bold">Interests</h1>
            <div className={`w-[95%] flex flex-col sm:flex-row ${location.pathname ==='/'?"md:flex-col lg:flex-row":"lg:flex-col"}  gap-y-2 xl:flex-row justify-between text-[#572982]`}>
                {interests.map((item,index)=>
                  <div key={index+item.text} className={location.pathname ==='/'?`bg-[#d91275] text-sm  text-white rounded-full px-3 py-1.5 flex items-center justify-center`:`border-2 ${item.hidden?'hidden':''} border-[#572982] rounded-full px-2 flex items-center justify-center py-1`}>
                    <p>{item.text}</p>
                  </div>
                )}
            </div>

            <div className={`intersts2 flex ${location.pathname==='/'?'md:w-[91%]':'md:w-[61%]'} sm:flex-row lg:flex-col  xl:flex-row w-[98%] sm:w-[95%] gap-y-2  md:w-[61%] lg:w-[95%] xl:w-[72%] text-[#572982]  justify-between`}>
            <div className={location.pathname ==='/'?"bg-[#d91275] text-sm text-white rounded-full px-3 py-1 flex items-center justify-center":"border-2 border-[#572982] rounded-full px-2 flex items-center justify-center py-1"}>
                <p>🖼️ Art Gallery</p>
              </div>
              <div className={location.pathname ==='/'?"bg-[#d91275] text-sm text-white rounded-full px-3 py-1 flex items-center justify-center":"border-2 border-[#572982] rounded-full px-2 flex items-center justify-center py-1"}>
                <p>✨Board games</p>
              </div>
              <div className={location.pathname ==='/'?"bg-[#d91275] text-sm text-white rounded-full px-3 py-1 flex items-center justify-center":"hidden"}>
                <p>🏏Cricket</p>
              </div>
            </div>
          </div>
    </>
  )
}

export default UserInterests