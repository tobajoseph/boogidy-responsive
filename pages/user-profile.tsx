import type { NextPage } from "next";
import NavigationBar from "../components/navigation-bar";
import UserProfileContent from "../components/user-profile-content";

const UserProfile: NextPage = () => {
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[1177px] overflow-hidden flex flex-col pt-0 px-[150px] pb-[300px] box-border items-center justify-start">
      <NavigationBar />
      <UserProfileContent />
    </div>
  );
};

export default UserProfile;
