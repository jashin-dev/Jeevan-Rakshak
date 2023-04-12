import React from 'react'

export default function DonateCard({image , name , age , location , bloodGrp}) {
  return (
    
      <div className='bg-white w-full h-[80px] items-center justify-between flex flex-row rounded-md gap-3 border shadow-md p-5 hover:scale-105 transition-all duration-200'>
        <div>
            <img src="../../images/herosection.png" alt="" className='h-[60px]  inline-block object-cover'/>
        </div>
     
            <div>Name : {name} </div>
            <div>Age : {age} </div>
            <div>Location : {location}</div>
            <div>Blood Group : {bloodGrp}</div>


            <div className='flex flex-row gap-5 '>
              <button className='p-[10px] border-none rounded bg-red-400 text-white font-semibold'>Donate Blood</button>
              <button className='p-[10px] border-none rounded bg-red-400 text-white font-semibold'>Chat</button>
            </div>

       
      </div>
    
  )
}
