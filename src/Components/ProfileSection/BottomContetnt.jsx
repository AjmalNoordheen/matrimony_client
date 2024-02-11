import React from 'react'

function BottomContetnt() {
    const basicInfor = ['Date of Birth','27-12-1993','Email Id','example@gmail.com','Blood Group','AB+','Height',
                         '164cm','Weight','64kg']
    const Religious = ['Religion','Islam','Sect','Sunni','Perform Namaz','Always',"Read Qur'an",'Daily','Religiousness','Religious']                     
  return (
    <>
    <div className="w-full bg-white shadow-md shadow-slate-300 h-full gap-y-8 rounded-xl p-4 flex flex-col">
          
          <div className="space-y-1">
            <h1 className="text-2xl font-black pb-2">Bio</h1>
            <h1 className="text-xl font-bold text-[#9a9a9a]">Basic Information</h1>
            <div className="lg:w-2/3  grid grid-cols-2 sm:text-lg">
                {basicInfor.map((item,index)=>
                <>
                {index%2===0?
                <p className="col-span-1 text-lg font-bold">{item} </p>:
                <p className="col-span-1 font-medium">{item}</p>}
                </>)}
            </div>
          </div>

          <div className="space-y-1">
          <h1 className="text-xl text-[#9a9a9a] font-bold">Religious Information</h1>
          <div className="lg:w-2/3  grid grid-cols-2 sm:text-lg">
                {Religious.map((item,index)=>
                <>
                {index%2===0?
                <p className="col-span-1 text-lg font-bold">{item} </p>:
                <p className="col-span-1 font-medium">{item}</p>}
                </>)}
            </div>
          </div>
          
          <div className="space-y-1">
            <h1 className="text-xl font-bold text-[#9a9a9a]">Educational and Professional Information</h1>
            <div className="lg:w-2/3  grid grid-cols-2 sm:text-lg">
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
    </>
  )
}

export default BottomContetnt