import type { NextPage } from "next";
import Header from "./header";
import HeroSection from "./hero-section";

const HomeHeader: NextPage = () => {
  return (
    <header className="self-stretch flex flex-col items-center justify-center md:flex-col md:pl-4 md:pr-4 md:box-border">
      <Header />
      <HeroSection />
    </header>
  );
};

export default HomeHeader;
