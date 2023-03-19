function Navbar() {
    return (
        <nav
            className="w-full flex justify-between items-center p-[10px] px-[60px] lg:flex-row flex-col sticky lg:-top-[50px] rounded-lg border-b-2 bg-white opacity-90 backdrop-blur-sm z-10 -top-[180px]"
            id="nav"
        >
            <div
                className="flex hover:scale-105 transition-all duration-200 relative items-end w-[205px]"
            >
                <img src="images/LOGO.png" alt="" className="w-[60px]" />
                <div
                    className="text-[35px] font-bold text-[#000000] left-[53px] absolute tracking-wider"
                >
                    <span className="font-bold text-[#2593D2]">opy</span>Print
                </div>
            </div>
            <div
                className="flex justify-center sticky lg:gap-10 gap-3 text-[18px] py-2 text-[#7C7C7C] font-semibold lg:flex-row flex-col"
            >
                <div className="hover:text-lightBlue transition-all duration-200">
                    <a href="#"> Prices</a>
                </div>
                <div className="hover:text-lightBlue transition-all duration-200">
                    <a href="#aboutus">About Us</a>
                </div>
                <div className="hover:text-lightBlue transition-all duration-200">
                    <a href="#contactus">Contact Us</a>
                </div>
            </div>
            <div
                className="flex lg:gap-5 gap-3 text-[#F7F5EB] text-[18px] font-semibold"
            >
                <button
                    className="max-lg:w-[40vw] px-5 py-2 rounded-md bg-btnBlue hover:scale-105 transition-all duration-200"
                >
                    Login
                </button>
                <button
                    className="max-lg:w-[40vw] px-5 py-2 rounded-md bg-[#020548] hover:scale-105 transition-all duration-200"
                >
                    Sign Up
                </button>
            </div>
        </nav>
    )
};
export default Navbar;