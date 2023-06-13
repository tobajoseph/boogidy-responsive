import type { NextPage } from "next";
import AddressCard from "./address-card";

const DeliveryAddressCard: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-[24px] text-center text-5xl text-gray-100 font-inter sm:flex-[unset] sm:self-stretch">
      <div className="self-stretch h-[29px] flex flex-col items-center justify-between">
        <div className="self-stretch relative font-semibold">
          Delivery Address
        </div>
      </div>
      <AddressCard locationText="Home" />
      <AddressCard locationText="Office" />
      <button className="cursor-pointer py-4 px-16 bg-white self-stretch box-border h-[52px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-gray-200">
        <div className="flex flex-col py-1 px-0 items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-[13px]">
            <img className="relative w-3.5 h-3.5" alt="" src="/add.svg" />
            <div className="relative text-sm font-semibold font-inter text-gray-200 text-left">
              Add New Address
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default DeliveryAddressCard;
