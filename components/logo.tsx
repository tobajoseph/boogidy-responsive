import type { NextPage } from "next";

const Logo: NextPage = () => {
  return (
    <div className="w-[374.67px] flex flex-row py-2 pr-0 pl-6 box-border items-center justify-start">
      <a
        className="[text-decoration:none] relative rounded-3xs w-[152px] h-[54px] bg-[url(/logo@3x.png)] bg-cover bg-no-repeat bg-[top]"
        href="/"
      />
    </div>
  );
};

export default Logo;
