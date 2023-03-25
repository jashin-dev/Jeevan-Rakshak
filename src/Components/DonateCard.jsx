import React from 'react'

export default function DonateCard({image , name , age , location , bloodGrp}) {
  return (
    
      <div className='bg-white w-[500px] flex flex-row rounded-md gap-5 '>
        <div>
            <img src="../../images/herosection.png" alt="" className='w-[200px] h-[200px] inline-block object-cover'/>
        </div>
        <div className='flex flex-col justify-around'>
            <div>Name : {name} </div>
            <div>Age : {age} </div>
            <div>Location : {location}</div>
            <div>Blood Group : {bloodGrp}</div>


            <div className='flex flex-row gap-5 '>
              <button className='p-[10px] border-none rounded bg-red-400'>Donate Blood</button>
              <button className='p-[10px] border-none rounded bg-red-400'>Chat</button>
            </div>

        </div>
      </div>
    
  )
}
