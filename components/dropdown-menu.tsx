import type { NextPage } from "next";
import { useEffect } from "react";

type DropdownMenuType = {
  onClose?: () => void;
};

const DropdownMenu: NextPage<DropdownMenuType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-white w-[250px] h-full overflow-hidden flex flex-col p-2 box-border items-start justify-center gap-[24px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-[90%] text-left text-sm text-gray-200 font-inter"
      data-animate-on-scroll
    >
      <ul className="self-stretch flex flex-col items-start justify-center gap-[24px]">
        <a className="[text-decoration:none] self-stretch relative font-semibold text-crimson">
          Home
        </a>
        <a className="[text-decoration:none] self-stretch relative text-[inherit]">
          About Us
        </a>
        <a className="[text-decoration:none] self-stretch relative text-[inherit]">
          Products
        </a>
        <a className="[text-decoration:none] self-stretch relative text-[inherit]">
          Partners
        </a>
        <a className="[text-decoration:none] self-stretch relative text-[inherit]">
          Contact Us
        </a>
        <select className="bg-darkgray-200 w-28 flex flex-row py-0 px-2 box-border items-center justify-start gap-[8px]">
          <option value="EG">English</option>
          <option value="ESP">Spanish</option>
        </select>
      </ul>
      <div className="w-[152px] flex flex-col items-start justify-center gap-[24px] text-crimson">
        <a
          className="[text-decoration:none] self-stretch bg-white h-[52px] overflow-hidden shrink-0 flex flex-row py-4 px-8 box-border items-center justify-center text-[inherit]"
          href="#"
        >
          <div className="relative font-semibold">Sign In</div>
        </a>
        <button className="cursor-pointer [border:none] py-4 px-8 bg-crimson self-stretch rounded-lg h-[52px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-center">
          <div className="relative text-sm font-semibold font-inter text-white text-left">
            Sign Up
          </div>
        </button>
      </div>
    </div>
  );
};

export default DropdownMenu;
