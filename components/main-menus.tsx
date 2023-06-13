import type { NextPage } from "next";

const MainMenus: NextPage = () => {
  return (
    <ul className="w-[374.67px] flex flex-row items-center justify-center gap-[24px] text-center text-sm text-gray-200 font-inter md:hidden">
      <a
        className="[text-decoration:none] relative text-[inherit] inline-block w-16 shrink-0 hover:font-semibold hover:font-inter hover:text-crimson active:font-semibold active:font-inter"
        href="#"
      >
        Home
      </a>
      <a
        className="[text-decoration:none] relative text-[inherit] inline-block w-16 shrink-0 hover:font-semibold hover:font-inter hover:text-crimson active:font-semibold active:font-inter active:text-crimson"
        href="#"
      >
        About Us
      </a>
      <a
        className="[text-decoration:none] relative text-[inherit] inline-block w-16 shrink-0 hover:font-semibold hover:font-inter hover:text-crimson active:font-semibold active:font-inter"
        href="#"
      >
        Products
      </a>
      <a
        className="[text-decoration:none] relative text-[inherit] inline-block w-16 shrink-0 hover:font-semibold hover:font-inter hover:text-crimson active:font-semibold active:font-inter active:text-crimson"
        href="#"
      >
        Partners
      </a>
      <a
        className="[text-decoration:none] relative text-[inherit] inline-block w-20 shrink-0 hover:font-semibold hover:font-inter hover:text-crimson active:font-semibold active:font-inter"
        href="#"
      >
        Contact Us
      </a>
      <select className="bg-darkgray-200 w-20 flex flex-row py-0 px-2 box-border items-center justify-center gap-[8px]">
        <option value="EG">English</option>
        <option value="ESP">Spanish</option>
      </select>
    </ul>
  );
};

export default MainMenus;
