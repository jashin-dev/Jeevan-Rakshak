import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function User() {
  const state = useContext(AppContext);
  const [user, setUser] = state.userApi.user;
  const [history, setHistory] = state.userApi.history;

  useEffect(() => {
    console.log(history);
  }, [user]);

  return (
    <div>
      <Navbar />
      <div className="my-10 py-10 px-10 w-[500px] mx-auto flex flex-col justify-center gap-4 rounded-lg">
        <img
          src="./images/user_avatar.png"
          alt=""
          className="w-[160px] rounded-full mx-auto pb-2"
        />
        <div className="text-center text-2xl font-bold pb-5">Profile</div>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <label
              htmlFor="fname"
              className="block text-gray-700 font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={user.firstName}
              readOnly
              className="appearance-none bg-gray-200 border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="lname"
              className="block text-gray-700 font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={user.lastName}
              readOnly
              className="appearance-none bg-gray-200 border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            readOnly
            className="appearance-none bg-gray-200 border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex just gap-10">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={user.pincode}
              readOnly
              className="appearance-none bg-gray-200 border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="group"
              className="block text-gray-700 font-bold mb-2"
            >
              Blood Group
            </label>
            <input
              type="text"
              id="group"
              name="group"
              value={user.bloodGrp}
              readOnly
              className="appearance-none bg-gray-200 border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
      </div>
    <div className="m-5 p-2 text-2xl font-bold pl-5">My Requests</div>
      <div className="pl-5">
        <ul className="flex flex-row">
          {history.requestArr.map((ele, index) => (
            <ul className="p-10 m-5 w-[300px] bg-white border rounded-md">
              <li>
                <img
                  src="./images/user_avatar.png"
                  className=" w-[60px] mx-auto mb-4 rounded-full"
                  alt=""
                />
              </li>
              <li key={index} className="flex flex-col">
                <div className="font-bold">Status:</div>
                {ele.status}
              </li>
              {ele.status==="Assigned"?
              <li key={index} className="flex flex-col">
                <div className="font-bold">Donor Id:{ele.donor_id}</div>
              </li>:<></>}

              <li key={index} className="flex flex-col">
                <div className="font-bold">Description:</div>
                {ele.desc}
              </li>
            </ul>
          ))}
        </ul>
      </div>
      <div className="m-5 p-2 text-2xl font-bold pl-5">My Donations</div> 
      <div className="pl-5">
        <ul className="flex flex-row">
          {history.donatesArr.map((ele, index) => (
            <ul className="p-10 m-5 w-[300px] bg-white border rounded-md">
              <li>
                <img
                  src="./images/user_avatar.png"
                  className=" w-[60px] mx-auto mb-4 rounded-full"
                  alt=""
                />
              </li>
              <li key={index} className="flex flex-col">
                <div className="font-bold">Status:</div>
                {ele.status}
              </li>
              {ele.status==="Assigned"?
              <li key={index} className="flex flex-col">
                <div className="font-bold">Donor Id:{ele.donor_id}</div>
              </li>:<></>}

              <li key={index} className="flex flex-col">
                <div className="font-bold">Description:</div>
                {ele.desc}
              </li>
            </ul>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
