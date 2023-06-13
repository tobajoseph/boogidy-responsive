import type { NextPage } from "next";

const SocialLogin: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
      <button className="cursor-pointer py-4 px-0 bg-white self-stretch overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-200">
        <img
          className="relative w-5 h-5 object-cover"
          alt=""
          src="/image-7@2x.png"
        />
        <div className="relative text-sm font-semibold font-inter text-gray-200 text-left">
          Continue with Google
        </div>
      </button>
      <button className="cursor-pointer py-4 px-0 bg-white self-stretch overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-200">
        <img className="relative w-[16.85px] h-5" alt="" src="/vector1.svg" />
        <div className="relative text-sm font-semibold font-inter text-gray-200 text-left">
          Continue with Apple
        </div>
      </button>
      <button className="cursor-pointer py-4 px-0 bg-white self-stretch overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-200">
        <img
          className="relative w-5 h-5 object-cover"
          alt=""
          src="/image-8@2x.png"
        />
        <div className="relative text-sm font-semibold font-inter text-gray-200 text-left">
          Continue with Facebook
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
