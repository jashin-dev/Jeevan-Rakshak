import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


function FAQ() {
  const[collapse,setCollapse]=useState(true);
  const handleCollapse = ()=>{setCollapse(collapse=>!collapse)} 
  return (
    <div>
      <Navbar />
      <div class="w-[80%] mx-auto mt-20 mb-20">
      <div class="text-3xl font-bold text-center mb-10">FAQ</div>
        <button class="font-bold text-xl mb bg-[#777] text-white cursor-pointer p-[18px] w-full outline-none text-left hover:bg-[#555] coll" onClick={handleCollapse}>Q: Who can donate blood?</button>
        {collapse?   <div class="text-xl text-[#575656] mb-4 overflow-hidden bg-[#f1f1f1]">
          A: Anyone who is between the ages of 17 and 65 and is in good health
          can donate blood.
        </div>:<div></div>}
        <div class="font-bold text-xl mb">Q: How often can I donate blood?</div>
        <div class="text-xl text-[#575656] mb-4">A: You can donate blood every 56 days (8 weeks).</div>
        <div class="font-bold text-xl mb">Q: Is it safe to donate blood?</div>
        <div class="text-xl text-[#575656] mb-4">
          A: Yes, it is safe to donate blood. The equipment used is sterile, and
          a new needle is used for each donation.
        </div>

        <div class="font-bold text-xl mb">Q: What happens during the blood donation process?</div>
        <div class="text-xl text-[#575656] mb-4">
          A: The process is simple and consists of registration, a brief medical
          screening, and the actual donation process. The donation itself takes
          about 10 minutes.
        </div>
        <div class="font-bold text-xl mb">Q: How long does it take to donate blood?</div>
        <div class="text-xl text-[#575656] mb-4">A: The entire process takes about 45 minutes.</div>
        <div class="font-bold text-xl mb">Q: What should I do before donating blood?</div>
        <div class="text-xl text-[#575656] mb-4">
          A: Before donating blood, you should eat a nutritious meal, drink
          plenty of water, and get a good night's rest.
        </div>
        <div class="font-bold text-xl mb">Q: How can I find a blood donation center near me?</div>
        <div class="text-xl text-[#575656] mb-4">
          A: You can search for blood donation centers near you online or
          contact your local Red Cross or blood bank.
        </div>
      </div>
      <Footer />
     
      
    </div>
  );
  
}
export default FAQ;
