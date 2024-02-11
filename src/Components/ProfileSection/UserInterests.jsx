import React from 'react'

function UserInterests() {
  return (
    <>
    <div className="flex flex-col gap-y-3 pl-3 pb-9 ml-2">
            <p className="text-base font-semibold w-[80%]">
              Lorem Ipsum is simply dummy text of the 
              printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>

            {/* Interests */}
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
    </>
  )
}

export default UserInterests