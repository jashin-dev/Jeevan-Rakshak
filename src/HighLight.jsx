function HighLight(){
    return (
        <div
          className="bg-btnBlue w-full py-8 text-white flex lg:text-[25px] font-semibold lg:px-[60px] items-end px-[20px]"
        >
          <div
            className="items-center flex flex-col border-r-2 flex-grow h-[77px] px-1"
          >
            <div className="flex-grow"></div>
            <img
              src="images/colorprint.png"
              alt=""
              className="w-[40px] max-lg:w-[30px]"
            />
            <div className="text-center">Color Print</div>
          </div>
          <div
            className="flex flex-col items-center border-r-2 flex-grow h-[77px] justify-center px-1"
          >
            <div className="flex-grow"></div>
            <div className="text-[#7C7C7C] text-md text-center">5000+</div>
            <div className="text-center">Donation</div>
          </div>

          <div
            className="flex flex-col items-center border-r-2 flex-grow h-[77px] px-1"
          >
            <div className="flex-grow"></div>
            <div className="text-[#7C7C7C] text-md text-center">3000+</div>
            <div className="text-center">
              <div className="max-lg:hidden"></div>
              Community
            </div>
          </div>
          <div className="flex flex-col items-center flex-grow h-[77px] px-1">
            <div className="flex-grow"></div>
            <div className="text-[#7C7C7C] text-md text-center">5+</div>
            <div className="text-center">Locations</div>
          </div>
        </div>
    )
}

export default HighLight ; 