import type { NextPage } from "next";
import SocialLogin from "./social-login";

const SignInForm: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col py-0 px-[88px] items-start justify-center gap-[16px] text-center text-17xl text-gray-100 font-inter md:pl-0.5 md:pr-6 md:box-border md:flex-[unset] md:self-stretch">
      <a
        className="[text-decoration:none] self-stretch flex flex-row items-center justify-center"
        href="/"
      >
        <img
          className="relative rounded-3xs w-[152px] h-[54px] object-cover"
          alt=""
          src="/rectangle-3@2x.png"
        />
      </a>
      <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="flex-1 relative font-semibold">Welcome back!</div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[8px] text-xs">
          <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
            <input
              className="font-inter text-sm bg-white self-stretch flex flex-row py-4 px-0 items-center justify-start border-[1px] border-solid border-gainsboro"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="font-inter text-sm bg-white self-stretch flex flex-row py-4 px-0 items-center justify-start border-[1px] border-solid border-gainsboro"
              type="password"
              placeholder="Password"
              minLength={6}
              required
            />
            <button className="cursor-pointer [border:none] py-4 px-0 bg-crimson self-stretch overflow-hidden flex flex-row items-center justify-start">
              <div className="flex-1 relative text-sm font-semibold font-inter text-white text-center">
                Login
              </div>
            </button>
            <a
              className="[text-decoration:none] self-stretch relative leading-[24px] text-[inherit]"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="self-stretch flex flex-row py-6 px-0 items-center justify-start text-base">
            <div className="flex-1 relative leading-[24px]">or</div>
          </div>
          <SocialLogin />
        </div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[32px] text-sm">
          <a
            className="[text-decoration:none] self-stretch relative text-[inherit]"
            href="#"
          >
            <span>{`New User? `}</span>
            <span className="text-crimson">Create Account</span>
          </a>
          <a
            className="[text-decoration:none] self-stretch flex flex-row items-center justify-center gap-[5px] text-gray-200"
            href="/"
          >
            <img className="relative w-6 h-6" alt="" src="/arrow-back1.svg" />
            <div className="relative font-semibold">Back to Home</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
