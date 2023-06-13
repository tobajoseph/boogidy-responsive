import type { NextPage } from "next";
import Logo from "./logo";
import MainMenus from "./main-menus";
import UserSignInMenu from "./user-sign-in-menu";

const Header: NextPage = () => {
  return (
    <nav className="self-stretch bg-white overflow-hidden flex flex-row py-6 px-0 items-center justify-between text-left text-sm text-crimson font-inter">
      <Logo />
      <MainMenus />
      <UserSignInMenu />
    </nav>
  );
};

export default Header;
