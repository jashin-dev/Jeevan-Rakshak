function HeroSection() {
    return (
        <section className="my-10">
            <div
                className="flex lg:flex-row flex-col-reverse justify-around items-center p-10 px-[60px] max-lg:px-[30px]"
            >
                <div className="left lg:w-[600px] max-lg:w-full">
                    <h1
                        className="text-4xl max-lg:text-2xl font-bold tracking-wide leading-[50px]"
                    >
                        Unleash Your Inner Organizer with Flawless Copies
                    </h1>
                    <p className="text-textGrey my-4 max-lg:text-sm text-xl">
                        Don't let cluttered documents bring you down. Our photocopying
                        center is here to turn those messy stacks into neat and tidy
                        copies.
                    </p>
                    <div
                        className="text-white text-[20px] max-lg:text-[14px] font-semibold mt-10 gap-5 flex flex-wrap"
                    >
                        <button
                            className="px-5 py-2 w-[200px] rounded-md bg-btnBlue hover:scale-105 transition-all duration-200 max-lg:w-fit"
                        >
                            Our Goal
                        </button>
                        <button
                            className="px-5 py-2 w-[200px] rounded-md bg-btnBlue hover:scale-105 transition-all duration-200 max-lg:w-fit"
                        >
                            Material
                        </button>
                    </div>
                </div>
                <div className="right">
                    <img
                        className="w-[300px] inline-block"
                        src="./images/herosection.png"
                        alt=""
                        srcset=""
                    />
                </div>
            </div>
        </section>
    )
}
export default HeroSection; 