import React from 'react'

function Users() {
  return (
    <>
    {/* Rigth side users listing */}
    {Array.from({length:5}).map((item,index)=><>
        <div className={`w-full py-1 px-1 flex justify-between hover:bg-slate-200 items-start ${index !== 4 ? 'border-b border-b-[#f4bbd7]':'' } `}>
            <div className='w-8/12 h-14 rounded-full flex  items-center gap-x-3'>
                <img src="pro1.webp" className='w-12 h-12 rounded-full' alt="" />
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-semibold'>Faheema</h1>
                    <p className='text-xs'>Talk to u latr</p>
                </div>
            </div>
            <small className='text-sm'>12.04 pm</small>
        </div>
        </>)}
    </>
  )
}

export default Users