import type { NextPage } from "next";
import BlogPost from "./blog-post";

const MainSection: NextPage = () => {
  return (
    <main className="self-stretch flex flex-col items-center justify-center md:flex-col md:pt-0 md:pb-0 md:box-border">
      <section className="box-border w-[1140px] flex flex-row py-8 px-0 items-center justify-center gap-[16px] text-right text-lg text-black font-inter border-[1px] border-solid border-dimgray-100 md:flex-col md:gap-[8px] md:items-center md:justify-center md:py-1 md:px-0 md:box-border">
        <div className="flex-1 relative font-semibold md:flex-[unset] md:self-stretch">
          Download App Now!
        </div>
        <div className="flex-1 flex flex-row items-center justify-start gap-[16px] md:flex-[unset] md:self-stretch">
          <img
            className="relative w-[117px] h-[34px] object-cover"
            alt=""
            src="/apple-logo@2x.png"
          />
          <img
            className="relative w-[118px] h-[34px] object-cover"
            alt=""
            src="/android-logo@2x.png"
          />
        </div>
      </section>
      <section className="w-[1140px] overflow-hidden flex flex-col py-16 px-0 box-border items-center justify-center text-center text-13xl text-gray-100 font-inter md:flex-col md:gap-[8px] md:pt-1 md:pb-1 md:box-border">
        <div className="self-stretch flex flex-col py-2 px-0 items-center justify-center gap-[24px] md:pt-1 md:pb-1 md:box-border">
          <div className="self-stretch relative font-semibold">
            How it works?
          </div>
          <div className="self-stretch relative text-lg text-darkslategray">
            <p className="m-0">
              Our app offers simple steps to seamless steps for your
              transportation needs giving you streamlined and memorable journey
              experience from start to finish!
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[20px] text-85xl text-crimson md:flex-col md:gap-[8px] md:py-1 md:px-0 md:box-border">
          <div className="flex-1 flex flex-col items-center justify-center md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <b className="self-stretch relative opacity-[0.15]">1</b>
              <div className="self-stretch flex flex-col items-center justify-center gap-[16px] text-5xl text-gray-100">
                <div className="self-stretch relative font-semibold">
                  Request, Confirm, Ride
                </div>
                <div className="self-stretch relative text-base leading-[24px]">
                  Use the app to request a ride, confirm your details, and get
                  matched with a nearby driver for a hassle-free transportation
                  experience.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <b className="self-stretch relative opacity-[0.15]">2</b>
              <div className="self-stretch flex flex-col items-center justify-center gap-[16px] text-5xl text-gray-100">
                <div className="self-stretch relative font-semibold">
                  Find, Track, Arrive
                </div>
                <div className="self-stretch relative text-base leading-[24px]">
                  Easily locate available drivers nearby, track their arrival in
                  real-time, and arrive at your destination stress-free with our
                  intuitive app.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <b className="self-stretch relative opacity-[0.15]">3</b>
              <div className="self-stretch flex flex-col items-center justify-center gap-[16px] text-5xl text-gray-100">
                <div className="self-stretch relative font-semibold">
                  Book, Pay, Rate
                </div>
                <div className="self-stretch relative text-base leading-[24px]">
                  Book your ride with a few taps, securely pay through the app,
                  and rate your experience, ensuring a smooth and convenient
                  journey every time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-firebrick w-[1140px] flex flex-col py-12 px-4 box-border items-center justify-center gap-[16px] text-center text-17xl text-white font-inter md:gap-[8px] md:pt-1 md:pr-0 md:pb-1 md:box-border">
        <div className="self-stretch relative font-semibold">Join Us Now!</div>
        <div className="self-stretch flex flex-row py-0 px-2 items-center justify-start gap-[20px] text-5xl text-gray-200 md:flex-col md:gap-[8px] md:items-center md:justify-start">
          <a
            className="[text-decoration:none] flex-1 bg-white flex flex-row py-6 px-12 items-center justify-center gap-[8px] text-[inherit] border-[1px] border-solid border-white md:flex-[unset] md:self-stretch"
            href="#"
          >
            <img
              className="relative w-[67.59px] h-[60.54px]"
              alt=""
              src="/storefront.svg"
            />
            <div className="relative font-semibold">Sign Up as Partner</div>
          </a>
          <a
            className="[text-decoration:none] flex-1 bg-white flex flex-row py-6 px-12 items-center justify-center gap-[8px] text-[inherit] border-[1px] border-solid border-white md:flex-[unset] md:self-stretch"
            href="#"
          >
            <img
              className="relative w-[60.54px] h-[53.82px]"
              alt=""
              src="/directions-car1.svg"
            />
            <div className="relative font-semibold">Sign Up as Driver</div>
          </a>
          <a
            className="[text-decoration:none] flex-1 bg-white flex flex-row py-6 px-12 items-center justify-center gap-[8px] text-[inherit] border-[1px] border-solid border-white md:flex-[unset] md:self-stretch"
            href="#"
          >
            <img
              className="relative w-[60.54px] h-[60.54px]"
              alt=""
              src="/account-box1.svg"
            />
            <div className="relative font-semibold">Sign Up as User</div>
          </a>
        </div>
      </section>
      <section className="w-[1140px] overflow-hidden flex flex-row py-16 px-0 box-border items-center justify-start text-left text-5xl text-gray-100 font-inter md:flex-col md:items-center md:justify-center md:py-1 md:px-0 md:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] md:gap-[8px] md:pt-1 md:pb-1 md:box-border md:flex-[unset] md:self-stretch">
          <div className="self-stretch relative text-13xl font-semibold">
            Why Boogidy?
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
            <div className="self-stretch relative font-semibold">
              Your Safety First: Ride with Confidence, Arrive with Peace of
              Mind!
            </div>
            <div className="self-stretch relative text-base leading-[24px]">
              Experience worry-free rides and prioritize your safety with our
              ride-hailing app. Travel with confidence, knowing your well-being
              is our top priority.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
            <div className="self-stretch relative leading-[24px] font-semibold">
              Reliable Rides, Unbeatable Service: Trust Us to Get You There
              Safely and On Time!
            </div>
            <div className="self-stretch relative text-base leading-[24px]">
              Count on our dependable drivers, punctuality, and exceptional
              customer service for stress-free trips, every time.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
            <div className="self-stretch relative leading-[24px] font-semibold">
              Affordable Fares, Uncompromised Quality: Get More Value for Your
              Money!
            </div>
            <div className="self-stretch relative text-base leading-[24px]">
              Enjoy competitive pricing without compromising on service or
              comfort. Experience premium rides at affordable rates.
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 items-start justify-start md:gap-[0px] md:pt-1 md:pr-0 md:pb-1 md:box-border">
          <img
            className="relative w-[582px] h-[395px] object-cover"
            alt=""
            src="/rectangle-4@2x.png"
          />
        </div>
      </section>
      <section className="w-[1140px] flex flex-col py-6 px-0 box-border items-center justify-center gap-[16px] text-left text-13xl text-gray-200 font-inter md:flex-col md:gap-[8px] md:pt-1 md:pb-1 md:box-border">
        <div className="relative font-semibold">Boogidy Updates</div>
        <div className="self-stretch flex flex-row items-center justify-between md:flex-col md:gap-[8px] md:items-center md:justify-start md:pt-1 md:pb-1 md:box-border">
          <BlogPost
            postTitle="/blog-image@2x.png"
            postDate="23 May, 2023"
            postImage="Behind the Wheel: Meet Our Dedicated Drivers and Their Stories"
            postDescription="Get to know the amazing individuals behind the wheel, their experiences, and the commitment they bring to delivering exceptional rides for you."
          />
          <BlogPost
            postTitle="/blog-image1@2x.png"
            postDate="31 May, 2023"
            postImage="Unleashing Convenience: The Future of Ride-Hailing Technology"
            postDescription="Discover the future of ride-hailing technology as our innovative features and cutting-edge technology revolutionize the way you travel, delivering unparalleled convenience."
            propOverflow="hidden"
            propFlexShrink="0"
          />
          <BlogPost
            postTitle="/blog-image2@2x.png"
            postDate="02 Jun, 2023"
            postImage="Mastering Safety: How Our Ride-Hailing App Prioritizes Your..."
            postDescription="Discover the comprehensive safety measures we've implemented to ensure your peace of mind during every ride. Your safety is our top priority."
            propOverflow="unset"
            propFlexShrink="unset"
          />
        </div>
        <a
          className="[text-decoration:none] self-stretch relative text-base font-semibold text-crimson text-center"
          href="#"
        >
          See All Blog Posts
        </a>
      </section>
    </main>
  );
};

export default MainSection;
