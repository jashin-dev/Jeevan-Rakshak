import React from 'react'

export default function DonateCard({image , name , age , location , bloodGrp}) {
  return (
    
      <div className='bg-white '>
        <div>
            <img src= "../../public/images/LOGO.png"/>
        </div>
        <div>
            <div>Name : {name} </div>
            <div>Age : {age} </div>
            <div>Location : {location}</div>
            <div>Blood Group : {bloodGrp}</div>

        </div>
      </div>
    
  )
}
