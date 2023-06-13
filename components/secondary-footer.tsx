import type { NextPage } from "next";

const SecondaryFooter: NextPage = () => {
  return (
    <footer className="self-stretch bg-firebrick flex flex-row py-4 px-0 items-center justify-between text-left text-sm text-white font-inter md:flex-col">
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
      <div className="w-[570px] flex flex-row p-2 box-border items-center justify-end text-right md:flex-col">
        <div className="flex-1 relative font-semibold md:flex-[unset] md:self-stretch">
          Boogidy ©️Copyright 2023
        </div>
      </div>
    </footer>
  );
};

export default SecondaryFooter;
