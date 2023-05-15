import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
export default function DonateCard({ request }) {
  const state = useContext(AppContext);
  const [token, setToken] = state.token;
  const navigate = useNavigate();
  const handleLocationClick = () => {
    let temp = request.location.split(" ").join("+");

    const url = `https://www.google.com/maps?daddr=${temp}`;
    window.location = url;
  };

  const handleDonateClick = async () => {
    try {

      console.log(token);
      const res = await axios.put(`/request/donate/${request._id}`,{} , {
        headers : {
          Authorization : token 
        }
      });

      navigate("/calendar");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <tr className='bg-white  rounded-md border shadow-md   transition-all duration-200' >
   
      <td className='p-2'>
          <img src="./images/user_avatar.png" alt="" className='h-[60px]  inline-block object-cover rounded-full'/>
      </td>
   
          <td>{request.user_id.firstName + " " + request.user_id.lastName } </td>
          <td className='hover:cursor-pointer overflow-hidden'><span onClick={handleLocationClick} >{request.location}</span></td>
          <td>{request.user_id.bloodGrp}</td>
          <td className='flex flex-row gap-5 p-4'>
            <button className='p-[10px] border-none rounded bg-[#f45454] text-white font-semibold hover:bg-[#e84343]' onClick={handleDonateClick}>Donate Blood</button>
            <button className='p-[10px] border-none rounded bg-[#f45454] text-white font-semibold hover:bg-[#e84343]' onClick={()=>{navigate('/chat')}}>Chat</button>
          </td>

</tr>
      )
}
