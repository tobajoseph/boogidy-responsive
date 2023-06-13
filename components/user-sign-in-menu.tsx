import type { NextPage } from "next";

const UserSignInMenu: NextPage = () => {
  return (
    <div className="w-[264px] flex flex-row items-center justify-end gap-[24px] text-left text-sm text-crimson font-inter md:hidden">
      <a
        className="[text-decoration:none] bg-white w-[120px] h-14 overflow-hidden shrink-0 flex flex-row py-4 px-8 box-border items-center justify-center text-[inherit]"
        href="#"
      >
        <div className="relative font-semibold">Sign In</div>
      </a>
      <button className="cursor-pointer [border:none] py-4 px-8 bg-crimson rounded-lg w-[120px] h-14 overflow-hidden shrink-0 flex flex-row box-border items-center justify-center">
        <div className="relative text-sm font-semibold font-inter text-white text-left">
          Sign Up
        </div>
      </button>
    </div>
  );
};

export default UserSignInMenu;
