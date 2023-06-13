import type { NextPage } from "next";
import NavigationBar from "../components/navigation-bar";
import RideBookingCard from "../components/ride-booking-card";

const OrderHistory: NextPage = () => {
  return (
    <div className="relative bg-whitesmoke-100 w-full overflow-hidden flex flex-col py-0 px-[150px] box-border items-center justify-start text-center text-17xl text-gray-100 font-inter">
      <NavigationBar />
      <div className="self-stretch bg-white flex flex-col py-8 px-40 items-center justify-center gap-[16px]">
        <div className="self-stretch relative font-semibold">Your Orders</div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
          <div className="self-stretch flex flex-row items-center justify-between sm:flex-col">
            <div className="w-[410px] flex flex-row items-center justify-start gap-[16px]">
              <button className="cursor-pointer [border:none] py-2 px-0 bg-limegreen flex-1 rounded-5981xl flex flex-row items-center justify-center">
                <div className="flex-1 relative text-sm font-inter text-gray-100 text-center">
                  All
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-2 px-0 bg-whitesmoke-200 flex-1 rounded-5981xl flex flex-row items-center justify-center">
                <div className="flex-1 relative text-sm font-inter text-gray-100 text-center">
                  Ride Booking
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-2 bg-whitesmoke-200 flex-1 rounded-5981xl flex flex-row items-center justify-center">
                <div className="flex-1 relative text-sm font-inter text-gray-100 text-center">
                  Food Delivery
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-2 bg-whitesmoke-200 flex-1 rounded-5981xl flex flex-row items-center justify-center">
                <div className="flex-1 relative text-sm font-inter text-gray-100 text-center">
                  Grocery Delivery
                </div>
              </button>
            </div>
            <div className="w-[410px] flex flex-row items-center justify-end gap-[24px]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-start">
                <img className="relative w-6 h-6" alt="" src="/search.svg" />
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-start">
                <img className="relative w-6 h-6" alt="" src="/sort.svg" />
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-start">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/filter-alt.svg"
                />
              </button>
            </div>
          </div>
          <div className="self-stretch h-[745px] overflow-y-auto shrink-0 flex flex-col items-start justify-start gap-[16px]">
            <RideBookingCard serviceType="Ride Booking" />
            <RideBookingCard serviceType="Grocery" />
            <RideBookingCard serviceType="Food Delivery" />
            <RideBookingCard serviceType="Ride Booking" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
