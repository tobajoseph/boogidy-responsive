import type { NextPage } from "next";

const BookingForm: NextPage = () => {
  return (
    <div className="self-stretch bg-white shadow-[4px_0px_24px_rgba(0,_0,_0,_0.1)] w-[570px] flex flex-col p-8 box-border items-start justify-start gap-[20px] text-left text-13xl text-crimson font-inter">
      <div className="self-stretch flex flex-row items-center justify-center gap-[10px]">
        <img
          className="relative w-[38px] h-[38px]"
          alt=""
          src="/directions-car.svg"
        />
        <div className="flex-1 relative font-semibold">Ride with Us</div>
      </div>
      <input
        className="font-inter text-sm bg-white self-stretch flex flex-row py-[17px] px-[25px] items-center justify-start border-[1px] border-solid border-gainsboro"
        type="text"
        placeholder="Pick-Up Location"
      />
      <input
        className="font-inter text-sm bg-white self-stretch flex flex-row py-[17px] px-[25px] items-center justify-start border-[1px] border-solid border-gainsboro"
        type="text"
        placeholder="Drop-Off Location"
      />
      <input
        className="font-inter text-sm bg-white self-stretch flex flex-row py-[17px] px-[25px] items-center justify-between border-[1px] border-solid border-gainsboro"
        type="text"
        placeholder="Leave Now"
      />
      <input
        className="font-inter text-sm bg-white self-stretch flex flex-row py-[17px] px-[25px] items-center justify-start border-[1px] border-solid border-gainsboro"
        type="text"
        placeholder="Promo Code"
      />
      <input
        className="font-inter text-sm bg-white self-stretch flex flex-row py-[17px] px-[25px] items-center justify-start border-[1px] border-solid border-gainsboro"
        type="text"
        placeholder="Card ending with **87"
      />
      <button className="cursor-pointer [border:none] py-4 px-16 bg-crimson self-stretch overflow-hidden flex flex-row items-center justify-center">
        <div className="relative text-sm font-semibold font-inter text-white text-left">
          Request Ride
        </div>
      </button>
    </div>
  );
};

export default BookingForm;
