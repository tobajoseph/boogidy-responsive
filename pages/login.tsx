import type { NextPage } from "next";
import SignInMainSection from "../components/sign-in-main-section";
import SecondaryFooter from "../components/secondary-footer";

const Login: NextPage = () => {
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[1401px] overflow-hidden flex flex-col pt-0 px-[150px] pb-[300px] box-border items-center justify-center md:flex-col md:pl-4 md:pr-4 md:box-border md:min-w-[416px]">
      <SignInMainSection />
      <SecondaryFooter />
    </div>
  );
};

export default Login;
