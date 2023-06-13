import type { NextPage } from "next";
import ContentDetails from "./content-details";

const UserProfileContent: NextPage = () => {
  return (
    <div className="self-stretch bg-white overflow-hidden flex flex-col py-20 px-0 items-center justify-start gap-[10px] text-center text-17xl text-gray-100 font-inter">
      <div className="self-stretch flex flex-row items-center justify-start">
        <div className="flex-1 relative font-semibold">User Profile</div>
      </div>
      <ContentDetails />
    </div>
  );
};

export default UserProfileContent;
