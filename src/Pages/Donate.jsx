import React from 'react'
import DonateCard from '../Components/DonateCard'

export default function Donate() {
  return (
    <div className='flex flex-col gap-5 bg-[#fedcdc] justify-center items-center '>

        {/* pass the props in donate card  */}
        <DonateCard/>
        <DonateCard/>
        <DonateCard/>
        <DonateCard/>
    </div>
  )
}
