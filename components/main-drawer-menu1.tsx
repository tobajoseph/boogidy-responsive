import type { NextPage } from "next";
import { useEffect } from "react";

type MainDrawerMenu1Type = {
  onClose?: () => void;
};

const MainDrawerMenu1: NextPage<MainDrawerMenu1Type> = ({ onClose }) => {
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
      className="relative bg-white w-[250px] h-full overflow-hidden flex flex-col py-2 px-6 box-border items-center justify-start gap-[24px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-[90%] text-left text-sm text-gray-200 font-inter"
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
    </div>
  );
};

export default MainDrawerMenu1;
