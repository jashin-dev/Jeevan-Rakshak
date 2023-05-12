import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import user from "../udata";

export default function User() {
  return (
    <div>
      <Navbar />
      <div className="my-10 py-10 px-10 w-[500px] mx-auto flex flex-col justify-center gap-4 rounded-lg">
        <div className="flex gap-10">
          <div className="flex flex-col">
            <label for="fname" className="block text-gray-700 font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={user.fname}
              readOnly
              className="appearance-none bg-gray-200 border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col">
            <label for="lname" className="block text-gray-700 font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={user.lname}
              readOnly
              className="appearance-none bg-gray-200 border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex flex-col">
            <label for="email" className="block text-gray-700 font-bold mb-2">
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
          <div className="flex flex-col">
            <label for="phone" className="block text-gray-700 font-bold mb-2">
             Mobile Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={user.phone}
              readOnly
              className="appearance-none bg-gray-200 border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex just gap-10">

          <div className="flex flex-col">
            <label for="email" className="block text-gray-700 font-bold mb-2">
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
            <label for="group" className="block text-gray-700 font-bold mb-2">
             Blood Group
            </label>
            <input
              type="text"
              id="group"
              name="group"
              value={user.bloodGroup}
              readOnly
              className="appearance-none bg-gray-200 border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          </div>
      </div>

      <Footer />
    </div>
  );
}
