import type { NextPage } from "next";
import ImageSlider from "./image-slider";
import SignInForm from "./sign-in-form";

const SignInMainSection: NextPage = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-row items-center justify-center text-center text-17xl text-gray-100 font-inter md:flex-col">
      <ImageSlider />
      <SignInForm />
    </div>
  );
};

export default SignInMainSection;
