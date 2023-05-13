import React from "react";
import DonateCard from "../Components/DonateCard";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { AppContext } from "../Context/AppContext";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

export default function Donate() {
  const state = useContext(AppContext);
  const [token, setToken] = state.token;
  const [user, setUser] = state.userApi.user;
  const [arr, setArr] = useState([]);

  const getRequest = async () => {
    try {
      const res = await axios.get("/request/getAllRequest");
      

      const requiredArray = res.data.filter((request) => {
        let reqBloodGrp = request.user_id.bloodGrp ; 
        let userBloodGrp = user.bloodGrp ; 
        return (
          reqBloodGrp === userBloodGrp &&
          request.user_id._id !== user._id
        );
      });
    

      setArr(requiredArray);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(()=>{
    getRequest() ; 
  },[token])

  

  return (
    <div className="flex flex-col gap-5 bg-white justify-center items-center rounded-xl ">
      <Navbar />
      <div className="text-4xl font-bold pt-10">Requests</div>
      <div className="flex flex-wrap justify-center items-center p-10 gap-10 pb-32">
          
          {
            arr.map((element , index) => (<DonateCard key = {index} request = {element} />)) 
          }
      </div>
      <Footer />
    </div>
  );
}
