import type { NextPage } from "next";

const UserProfileCard: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col py-0 px-4 items-center justify-center gap-[8px] text-left text-5xl text-gray-100 font-inter sm:flex-[unset] sm:self-stretch">
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="relative font-semibold inline-block w-[170.62px] shrink-0">
          Basic Information
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-semibold font-inter text-crimson text-right inline-block w-[170.62px] shrink-0">
          Edit Profile
        </button>
      </div>
      <div className="self-stretch rounded-[16.87px] overflow-hidden flex flex-row py-2 px-0 items-center justify-start">
        <img
          className="relative rounded-1165xl w-[110.51px] h-[110.51px] object-cover"
          alt=""
          src="/rectangle-321@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[16px] text-right text-sm text-crimson">
        <input
          className="font-inter text-sm bg-white self-stretch box-border h-[52px] flex flex-row py-4 px-6 items-center justify-start border-[1px] border-solid border-gray-200"
          type="text"
          placeholder="John Doe"
          readOnly
        />
        <input
          className="font-inter text-sm bg-white self-stretch box-border h-[51px] flex flex-row py-4 px-6 items-center justify-start border-[1px] border-solid border-gray-200"
          type="text"
          placeholder="johndoe@gmail.com"
          readOnly
        />
        <input
          className="bg-white self-stretch box-border h-[52px] flex flex-row py-4 px-6 items-center justify-start border-[1px] border-solid border-gray-200"
          type="text"
          readOnly
        />
        <div className="self-stretch relative font-medium">Change Password</div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
          <input
            className="font-inter text-sm bg-white box-border w-[114.42px] h-[52px] flex flex-row py-4 px-6 items-center justify-center border-[1px] border-solid border-gray-200"
            type="text"
            placeholder="+01"
            readOnly
          />
          <input
            className="font-inter text-sm bg-white flex-1 box-border h-[52px] flex flex-row py-4 px-6 items-center justify-start border-[1px] border-solid border-gray-200"
            type="text"
            placeholder="0123 456789"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
