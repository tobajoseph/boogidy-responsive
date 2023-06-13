import type { NextPage } from "next";

type RideBookingCardType = {
  serviceType?: string;
};

const RideBookingCard: NextPage<RideBookingCardType> = ({ serviceType }) => {
  return (
    <div className="self-stretch bg-white flex flex-col py-4 px-8 items-start justify-center gap-[24px] text-left text-5xl text-gray-100 font-inter border-[1px] border-solid border-indianred">
      <div className="self-stretch flex flex-row items-center justify-between text-crimson sm:flex-col">
        <div className="w-[300px] flex flex-row items-start justify-start">
          <div className="flex-1 relative font-semibold">{serviceType}</div>
        </div>
        <div className="self-stretch bg-limegreen w-[300px] flex flex-row items-center justify-center text-center text-sm text-gray-100">
          <b className="flex-1 relative">Completed</b>
        </div>
        <div className="w-[300px] flex flex-row items-center justify-start text-right text-gray-200">
          <div className="flex-1 relative font-medium">$80</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-base sm:flex-col">
        <div className="w-[454px] flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative font-semibold">
            Pickup Location
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
            <div className="self-stretch relative">
              Bodija Estate Baptist Church
            </div>
            <div className="self-stretch relative">Adeyi Avenue, 201345</div>
            <div className="self-stretch relative">Ibadan, Nigeria.</div>
          </div>
        </div>
        <div className="w-[454px] flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative font-semibold">
            Drop off Location
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
            <div className="self-stretch relative">
              Bodija Estate Baptist Church
            </div>
            <div className="self-stretch relative">Adeyi Avenue, 201345</div>
            <div className="self-stretch relative">Ibadan, Nigeria.</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-end text-right text-sm sm:flex-col">
        <b className="flex-1 relative sm:flex-[unset] sm:self-stretch">
          11:53 AM 5/15/2023
        </b>
      </div>
    </div>
  );
};

export default RideBookingCard;
