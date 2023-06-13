import type { NextPage } from "next";
import PrimaryFooter from "./primary-footer";

const HomeFooter: NextPage = () => {
  return (
    <footer className="self-stretch bg-whitesmoke-100 flex flex-col items-center justify-center text-left text-base text-gray-200 font-inter md:gap-[8px] md:pt-1 md:pb-1 md:box-border">
      <PrimaryFooter />
      <div className="self-stretch bg-firebrick flex flex-row py-4 px-0 items-center justify-between text-sm text-white md:flex-col md:gap-[8px] sm:flex-col sm:gap-[1115px] sm:items-center sm:justify-start">
        <div className="w-[570px] flex flex-row p-2 box-border items-center justify-start gap-[8px] md:flex-col">
          <a
            className="[text-decoration:none] flex-1 relative font-semibold text-[inherit] md:flex-[unset] md:self-stretch"
            href="#"
          >{`Terms and Conditions      `}</a>
          <div className="flex-1 relative font-semibold text-center md:flex-[unset] md:self-stretch">{`| `}</div>
          <a
            className="[text-decoration:none] flex-1 relative font-semibold text-[inherit] md:flex-[unset] md:self-stretch"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
        <div className="w-[570px] flex flex-row p-2 box-border items-center justify-center text-right md:flex-col">
          <div className="flex-1 relative font-semibold md:flex-[unset] md:self-stretch">
            Boogidy ©️Copyright 2023
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
