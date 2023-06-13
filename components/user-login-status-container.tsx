import type { NextPage } from "next";
import { useState, useMemo, useCallback } from "react";
import CSS, { Property } from "csstype";
import MainDrawerMenu1 from "./main-drawer-menu1";
import PortalDrawer from "./portal-drawer";
import MainDrawerMenu2 from "./main-drawer-menu2";

type UserLoginStatusContainerType = {
  /** Style props */
  hamburgerMenu1BoxSizing?: Property.BoxSizing;
  hamburgerMenu2BoxSizing?: Property.BoxSizing;
};

const UserLoginStatusContainer: NextPage<UserLoginStatusContainerType> = ({
  hamburgerMenu1BoxSizing,
  hamburgerMenu2BoxSizing,
}) => {
  const hamburgerMenu1Style: CSS.Properties = useMemo(() => {
    return {
      boxSizing: hamburgerMenu1BoxSizing,
    };
  }, [hamburgerMenu1BoxSizing]);

  const hamburgerMenu2Style: CSS.Properties = useMemo(() => {
    return {
      boxSizing: hamburgerMenu2BoxSizing,
    };
  }, [hamburgerMenu2BoxSizing]);

  const [isMainDrawerMenuOpen, setMainDrawerMenuOpen] = useState(false);
  const [isMainDrawerMenu2Open, setMainDrawerMenu2Open] = useState(false);

  const openMainDrawerMenu = useCallback(() => {
    setMainDrawerMenuOpen(true);
  }, []);

  const closeMainDrawerMenu = useCallback(() => {
    setMainDrawerMenuOpen(false);
  }, []);

  const openMainDrawerMenu2 = useCallback(() => {
    setMainDrawerMenu2Open(true);
  }, []);

  const closeMainDrawerMenu2 = useCallback(() => {
    setMainDrawerMenu2Open(false);
  }, []);

  return (
    <>
      <div className="w-[374.67px] flex flex-row py-0 pr-6 pl-0 box-border items-center justify-end gap-[24px] text-left text-sm text-gray-100 font-inter sm:hidden">
        <a
          className="[text-decoration:none] rounded-lg w-[52px] flex flex-row p-1.5 box-border items-center justify-center relative gap-[8px] text-[inherit] [&_.submenu1]:hover:flex [&_.submenu1]:hover:h-auto [&_.submenu1]:hover:animate-[1s_ease_0s_1_normal_none_fade-in] [&_.submenu1]:hover:opacity-[1]"
          href="#"
        >
          <img
            className="relative rounded-581xl w-10 h-10 object-cover z-[0]"
            alt=""
            src="/rectangle-32@2x.png"
          />
          <div className="submenu1 my-0 mx-[!important] absolute w-[400%] top-[64px] right-[-161.54%] left-[-138.46%] bg-white hidden flex-col py-0 px-6 box-border items-start justify-start gap-[32px] z-[1] hover:animate-[1s_ease_0s_1_normal_none_fade-in] hover:opacity-[1]">
            <a
              className="[text-decoration:none] self-stretch flex flex-row items-center justify-start gap-[8px] text-[inherit]"
              href="#"
            >
              <img
                className="relative w-[24.26px] h-6"
                alt=""
                src="/account-box.svg"
              />
              <div className="flex-1 relative">My Profile</div>
            </a>
            <a
              className="[text-decoration:none] self-stretch flex flex-row items-center justify-start gap-[8px] text-[inherit]"
              href="#"
            >
              <img
                className="relative w-[24.26px] h-6"
                alt=""
                src="/account-balance-wallet.svg"
              />
              <div className="flex-1 relative">Wallet $50.67</div>
            </a>
            <a
              className="[text-decoration:none] self-stretch flex flex-row items-center justify-start gap-[8px] text-[inherit]"
              href="#"
            >
              <img
                className="relative w-[24.26px] h-6"
                alt=""
                src="/logout.svg"
              />
              <div className="flex-1 relative">Logout</div>
            </a>
          </div>
        </a>
        <a
          className="[text-decoration:none] relative text-gray-200 inline-block w-[46px] shrink-0 hover:font-semibold hover:font-inter hover:text-crimson active:font-semibold active:font-inter active:text-crimson"
          href="#"
        >
          Orders
        </a>
        <img
          className="max-h-full w-6 object-cover"
          alt=""
          src="/notifications@2x.png"
        />
        <button
          className="cursor-pointer [border:none] p-2.5 bg-[transparent] hidden flex-row items-start justify-start md:flex sm:hidden"
          onClick={openMainDrawerMenu}
          style={hamburgerMenu1Style}
        >
          <img
            className="relative w-[21.88px] h-[21.88px]"
            alt=""
            src="/vector.svg"
          />
        </button>
        <button
          className="cursor-pointer [border:none] p-2.5 bg-[transparent] hidden flex-row items-start justify-start md:hidden sm:flex"
          onClick={openMainDrawerMenu2}
          style={hamburgerMenu2Style}
        >
          <img
            className="relative w-[21.88px] h-[21.88px]"
            alt=""
            src="/vector.svg"
          />
        </button>
      </div>
      {isMainDrawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeMainDrawerMenu}
        >
          <MainDrawerMenu1 onClose={closeMainDrawerMenu} />
        </PortalDrawer>
      )}
      {isMainDrawerMenu2Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeMainDrawerMenu2}
        >
          <MainDrawerMenu2 onClose={closeMainDrawerMenu2} />
        </PortalDrawer>
      )}
    </>
  );
};

export default UserLoginStatusContainer;
