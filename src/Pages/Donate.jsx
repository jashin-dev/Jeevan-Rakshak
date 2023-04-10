import React from 'react'
import DonateCard from '../Components/DonateCard'
import Footer from '../Footer'
import Navbar from '../Navbar'

export default function Donate() {
  return (
    <div className='flex flex-col gap-5 bg-white justify-center items-center rounded-xl '>

        {/* pass the props in donate card  */}
        <Navbar/>
        <div class="text-4xl font-bold pt-10">Requests</div>
        <div class="flex flex-wrap justify-center items-center p-10 gap-10 pb-32">
        <DonateCard/>
        <DonateCard/>
        <DonateCard/>
        <DonateCard/>
        </div>
        <Footer/>
    </div>
  )
}
