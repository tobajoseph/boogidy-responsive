import type { NextPage } from "next";
import HomeHeader from "../components/home-header";
import MainSection from "../components/main-section";
import HomeFooter from "../components/home-footer";

const Home: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[3233.54px] overflow-hidden flex flex-col py-0 px-[150px] box-border items-center justify-start md:flex-col md:pl-4 md:pr-4 md:box-border">
      <HomeHeader />
      <MainSection />
      <HomeFooter />
    </div>
  );
};

export default Home;
