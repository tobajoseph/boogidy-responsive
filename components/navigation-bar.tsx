import type { NextPage } from "next";
import Logo from "./logo";
import MainMenus from "./main-menus";
import UserLoginStatusContainer from "./user-login-status-container";

const NavigationBar: NextPage = () => {
  return (
    <nav className="self-stretch bg-white overflow-hidden flex flex-row py-6 px-0 items-center justify-between text-center text-sm text-gray-200 font-inter">
      <Logo />
      <MainMenus />
      <UserLoginStatusContainer />
    </nav>
  );
};

export default NavigationBar;
