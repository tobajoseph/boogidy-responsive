import type { NextPage } from "next";
import UserProfileCard from "./user-profile-card";
import DeliveryAddressCard from "./delivery-address-card";

const ContentDetails: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start gap-[40px] text-left text-5xl text-gray-100 font-inter sm:flex-col sm:gap-[16px]">
      <UserProfileCard />
      <DeliveryAddressCard />
    </div>
  );
};

export default ContentDetails;
