import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
export default function DonateCard({request}) {
  const[collapse,setCollapse]=useState(false);
  const handleCollapse = ()=>{setCollapse(collapse=>!collapse)} 
  const navigate = useNavigate() ;  
  const handleLocationClick = ()=>{
        
        let temp  = request.location.split(' ').join('+') ;

        const url = `https://www.google.com/maps?daddr=${temp}`
        window.location = url ; 
         
  }
  return (
    <tr className='bg-white  rounded-md border shadow-md   transition-all duration-200' onClick={handleCollapse}>
   
      <td className='p-2'>
          <img src="../../images/herosection.png" alt="" className='h-[60px]  inline-block object-cover'/>
      </td>
   
          <td>{request.user_id.firstName + " " + request.user_id.lastName } </td>
          <td className='hover:cursor-pointer'><span onClick={handleLocationClick}>{request.location}</span></td>
          <td>{request.user_id.bloodGrp}</td>
          <td className='flex flex-row gap-5 p-4'>
            <button className='p-[10px] border-none rounded bg-[#f45454] text-white font-semibold hover:bg-[#e84343]' onClick={()=>{navigate('/calendar')}}>Donate Blood</button>
            <button className='p-[10px] border-none rounded bg-[#f45454] text-white font-semibold hover:bg-[#e84343]' onClick={()=>{navigate('/chat')}}>Chat</button>
          </td>

</tr>
      )
}
