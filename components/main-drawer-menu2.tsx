import type { NextPage } from "next";
import { useEffect } from "react";

type MainDrawerMenu2Type = {
  onClose?: () => void;
};

const MainDrawerMenu2: NextPage<MainDrawerMenu2Type> = ({ onClose }) => {
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
      className="relative bg-white w-64 overflow-hidden flex flex-col py-2 px-6 box-border items-center justify-start gap-[24px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] h-full max-w-[90%] text-left text-sm text-gray-200 font-inter"
      data-animate-on-scroll
    >
      <a
        className="[text-decoration:none] self-stretch relative text-[inherit]"
        href="#"
      >
        Home
      </a>
      <a
        className="[text-decoration:none] self-stretch relative text-[inherit]"
        href="#"
      >
        About Us
      </a>
      <a
        className="[text-decoration:none] self-stretch relative text-[inherit] hover:font-semibold hover:font-inter active:font-semibold active:font-inter active:text-crimson"
        href="#"
      >
        Products
      </a>
      <a
        className="[text-decoration:none] self-stretch relative text-[inherit] hover:font-semibold hover:font-inter hover:text-crimson active:font-semibold active:font-inter"
        href="#"
      >
        Partners
      </a>
      <a
        className="[text-decoration:none] self-stretch relative text-[inherit] hover:font-semibold hover:font-inter hover:text-crimson active:font-semibold active:font-inter active:text-crimson"
        href="#"
      >
        Contact Us
      </a>
      <div className="bg-white w-52 flex flex-col py-6 px-0 box-border items-start justify-start gap-[24px] text-gray-100 hover:animate-[1s_ease_0s_1_normal_none_fade-in] hover:opacity-[1]">
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
          <div className="flex-1 relative">Orders</div>
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
          <img className="relative w-[24.26px] h-6" alt="" src="/logout.svg" />
          <div className="flex-1 relative">Logout</div>
        </a>
      </div>
    </div>
  );
};

export default MainDrawerMenu2;
