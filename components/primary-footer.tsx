import type { NextPage } from "next";

const PrimaryFooter: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row py-5 px-6 items-center justify-start gap-[24px] text-left text-base text-gray-200 font-inter md:flex-col md:gap-[8px] md:py-1 md:px-0 md:box-border sm:flex-col sm:gap-[70px] sm:items-center sm:justify-start">
      <div className="flex-1 flex flex-col items-center justify-center gap-[8px] text-black md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
        <img
          className="relative rounded-3xs w-[250px] h-[89px] object-cover"
          alt=""
          src="/rectangle-23@2x.png"
        />
        <div className="self-stretch relative">
          At Boogidy, we are dedicated to revolutionizing transportation by
          providing reliable, convenient, and safe rides to our valued
          customers. Our mission is to deliver a seamless and enjoyable travel
          experience, powered by advanced technology and exceptional customer
          service. Ride with us and experience the future of transportation.
        </div>
        <section className="self-stretch flex flex-col items-center justify-center border-[1px] border-solid border-crimson md:flex-col md:gap-[8px] md:items-center md:justify-center md:py-1 md:px-0 md:box-border">
          <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
            <img
              className="relative w-[117px] h-[34px] object-cover"
              alt=""
              src="/apple-logo1@2x.png"
            />
            <img
              className="relative w-[118px] h-[34px] object-cover"
              alt=""
              src="/android-logo1@2x.png"
            />
          </div>
        </section>
      </div>
      <div className="w-[255px] flex flex-col items-start justify-center gap-[24px] text-sm md:py-1 md:px-0 md:box-border">
        <h2 className="m-0 self-stretch relative text-base font-semibold font-inherit inline-block h-px shrink-0">
          Quick Navigations
        </h2>
        <a
          className="[text-decoration:none] self-stretch relative text-[inherit] inline-block h-px shrink-0"
          href="#"
        >
          About Us
        </a>
        <a
          className="[text-decoration:none] self-stretch relative text-[inherit] inline-block h-px shrink-0"
          href="#"
        >
          Partners
        </a>
        <a
          className="[text-decoration:none] self-stretch relative text-[inherit] inline-block h-px shrink-0"
          href="#"
        >
          Products
        </a>
        <a
          className="[text-decoration:none] self-stretch relative text-[inherit]"
          href="#"
        >
          FAQs
        </a>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center gap-[24px] text-sm md:gap-[8px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
        <h2 className="m-0 self-stretch flex-1 relative text-base font-semibold font-inherit">
          Links
        </h2>
        <a
          className="[text-decoration:none] self-stretch flex-1 relative text-[inherit]"
          href="#"
        >
          Blogs
        </a>
        <a
          className="[text-decoration:none] self-stretch flex-1 relative text-[inherit]"
          href="#"
        >
          Sign Up as User
        </a>
        <a
          className="[text-decoration:none] self-stretch flex-1 relative text-[inherit]"
          href="#"
        >
          Sign Up as Driver
        </a>
        <a
          className="[text-decoration:none] self-stretch flex-1 relative text-[inherit]"
          href="#"
        >
          Sign Up as Partner
        </a>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center gap-[24px] md:gap-[8px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
        <h2 className="m-0 self-stretch relative text-[inherit] font-semibold font-inherit">
          Get in Touch
        </h2>
        <div className="self-stretch flex flex-col items-start justify-center gap-[24px] text-sm">
          <a className="[text-decoration:none] self-stretch relative text-[inherit] inline-block h-px shrink-0">
            +91 123456 789
          </a>
          <a className="[text-decoration:none] self-stretch relative text-[inherit] inline-block h-[17px] shrink-0">
            info@boogidy.com
          </a>
          <div className="self-stretch relative inline-block h-[34px] shrink-0">
            2 John St.Pickerington, OH 43147
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between">
          <a
            className="[text-decoration:none] w-[40.5px] overflow-hidden shrink-0 flex flex-row p-1 box-border items-center justify-between"
            href="#"
            target="_blank"
          >
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              src="/vector3.svg"
            />
          </a>
          <a
            className="[text-decoration:none] w-[40.5px] overflow-hidden shrink-0 flex flex-col py-1.5 px-0.5 box-border items-center justify-start"
            href="#"
            target="_blank"
          >
            <img
              className="relative w-7 h-[20.31px]"
              alt=""
              src="/vector4.svg"
            />
          </a>
          <a
            className="[text-decoration:none] overflow-hidden flex flex-col py-[3px] px-px items-center justify-start"
            href="#"
            target="_blank"
          >
            <img className="relative w-[27px] h-6" alt="" src="/vector5.svg" />
          </a>
          <a
            className="[text-decoration:none] w-[40.5px] overflow-hidden shrink-0 flex flex-row p-[3px] box-border items-center justify-between"
            href="#"
            target="_blank"
          >
            <img
              className="relative w-[26px] h-[26px]"
              alt=""
              src="/vector6.svg"
            />
          </a>
          <a
            className="[text-decoration:none] w-[40.5px] overflow-hidden shrink-0 flex flex-row p-1 box-border items-center justify-between"
            href="#"
            target="_blank"
          >
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              src="/vector7.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrimaryFooter;
