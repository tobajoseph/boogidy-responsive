import type { NextPage } from "next";

const HeroSection: NextPage = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-col pt-28 pb-0 pr-0 pl-8 items-start justify-start gap-[8px] bg-[url(/hero@3x.png)] bg-cover bg-no-repeat bg-[top] text-left text-29xl text-gray-100 font-inter md:pl-0 md:pt-0 md:box-border">
      <div className="self-stretch relative font-semibold">
        Ride with Confidence: Safe, Reliable, and Convenient
      </div>
      <div className="self-stretch relative text-lg leading-[27px] text-darkslategray">
        {" "}
        Experience peace of mind as you travel.
      </div>
      <div className="self-stretch flex flex-col items-center justify-center md:pt-0 md:box-border">
        <div className="self-stretch flex flex-row py-0 pr-[400px] pl-0 items-center justify-between md:flex-col md:pl-4 md:pt-0 md:pr-4 md:box-border">
          <div className="bg-white shadow-[8px_0px_40px_-16px_rgba(0,_0,_0,_0.08)] w-[708px] flex flex-row py-8 px-16 box-border items-center justify-between md:flex-col md:gap-[8px] md:pt-2 md:pr-0 md:pb-2 md:box-border">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-36 flex flex-row items-center justify-start gap-[8px]">
              <img className="relative w-6 h-6" alt="" src="/inventory-2.svg" />
              <div className="flex-1 relative text-lg font-semibold font-inter text-crimson text-left">
                Ride with Us
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-52 flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-6 h-6"
                alt=""
                src="/inventory-21.svg"
              />
              <div className="flex-1 relative text-lg font-inter text-gray-100 text-left">
                Order Food/Grocery
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-44 flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-6 h-6"
                alt=""
                src="/inventory-22.svg"
              />
              <div className="flex-1 relative text-lg font-inter text-gray-100 text-left">
                Become a Driver
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch bg-white shadow-[8px_0px_40px_-16px_rgba(0,_0,_0,_0.08)] flex flex-row py-6 pr-[200px] pl-6 items-center justify-start gap-[16px] md:flex-col md:gap-[11px] md:py-1 md:px-0 md:box-border">
          <input
            className="font-inter text-sm bg-white flex-1 flex flex-row p-4 items-center justify-start border-[1px] border-solid border-brown md:pt-1 md:box-border md:flex-[unset] md:self-stretch"
            type="text"
            placeholder="Pick-Up Location"
            required
          />
          <input
            className="font-inter text-sm bg-white flex-1 flex flex-row p-4 items-center justify-start border-[1px] border-solid border-brown md:pt-1 md:pb-1 md:box-border md:flex-[unset] md:self-stretch"
            type="text"
            placeholder="Drop-Off Location"
            required
          />
          <button className="cursor-pointer [border:none] py-4 px-0 bg-crimson flex-1 rounded-lg overflow-hidden flex flex-row items-center justify-start md:pt-1 md:pb-1 md:box-border md:flex-[unset] md:self-stretch">
            <div className="flex-1 relative text-sm font-semibold font-inter text-white text-center">
              Ride Now
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
