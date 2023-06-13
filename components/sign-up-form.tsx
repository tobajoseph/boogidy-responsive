import type { NextPage } from "next";
import SocialLogin from "./social-login";

const SignUpForm: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col py-0 px-[88px] items-start justify-center gap-[16px] text-center text-17xl text-gray-100 font-inter md:pl-6 md:pr-6 md:box-border md:flex-[unset] md:self-stretch">
      <a
        className="[text-decoration:none] self-stretch flex flex-row items-center justify-center"
        href="/"
      >
        <img
          className="relative rounded-3xs w-[152px] h-[54px] object-cover"
          alt=""
          src="/logo@3x.png"
        />
      </a>
      <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="flex-1 relative font-semibold">Let’s Get Started</div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[8px] text-base">
          <div className="self-stretch h-[474px] flex flex-col items-center justify-center gap-[8px]">
            <input
              className="font-inter text-sm bg-white self-stretch flex flex-row py-4 px-0 items-center justify-start border-[1px] border-solid border-gainsboro"
              type="text"
              placeholder="Name"
              minLength={3}
              required
            />
            <input
              className="font-inter text-sm bg-white self-stretch flex flex-row py-4 px-0 items-center justify-start border-[1px] border-solid border-gainsboro"
              type="email"
              placeholder="Email"
              required
            />
            <div className="self-stretch flex flex-row items-center justify-start lg:flex-row lg:gap-[3px] lg:items-center lg:justify-between md:flex-row md:gap-[3px] md:items-center md:justify-between">
              <input
                className="font-inter text-sm bg-white box-border w-[120px] h-[51px] flex flex-row p-4 items-center justify-start border-[1px] border-solid border-gainsboro"
                type="text"
                placeholder="+01"
              />
              <input
                className="font-inter text-sm bg-white flex-1 flex flex-row p-4 items-center justify-start border-[1px] border-solid border-gainsboro"
                type="number"
                placeholder="Phone Number"
                min={5}
              />
            </div>
            <input
              className="font-inter text-sm bg-white self-stretch flex flex-row py-4 px-0 items-center justify-start border-[1px] border-solid border-gainsboro"
              type="password"
              placeholder="Password"
              minLength={6}
              required
            />
            <input
              className="font-inter text-sm bg-white self-stretch flex flex-row py-4 px-0 items-center justify-start border-[1px] border-solid border-gainsboro"
              type="text"
              placeholder="Referral Code (optional)"
            />
            <input
              className="cursor-pointer self-stretch flex flex-row py-2 px-0 items-center justify-start"
              type="checkbox"
              required
            />
            <button className="cursor-pointer [border:none] py-4 px-0 bg-crimson self-stretch overflow-hidden flex flex-row items-center justify-start">
              <div className="flex-1 relative text-sm font-semibold font-inter text-white text-center">
                Continue
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row py-2.5 px-0 items-center justify-start">
            <div className="flex-1 relative leading-[24px]">or</div>
          </div>
          <SocialLogin />
        </div>
      </div>
      <a
        className="[text-decoration:none] self-stretch flex flex-row py-4 px-0 items-center justify-center text-sm text-crimson"
        href="/"
      >
        <div className="flex-1 flex flex-row items-center justify-center gap-[10px] lg:flex-row lg:gap-[10px] lg:items-center lg:justify-center md:flex-row md:gap-[10px] md:items-center md:justify-center">
          <img className="relative w-4 h-4" alt="" src="/arrow-back.svg" />
          <div className="relative font-semibold">Back to Home</div>
        </div>
      </a>
    </div>
  );
};

export default SignUpForm;
