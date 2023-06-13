import type { NextPage } from "next";

const ImageSlider: NextPage = () => {
  return (
    <div className="flex-1 overflow-hidden flex flex-row items-center justify-end md:flex-[unset] md:self-stretch">
      <div className="flex-1 relative h-[1036px]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/driver@2x.png"
        />
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/food@2x.png"
        />
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/ride@2x.png"
        />
        <div className="absolute h-[1.54%] w-[1.67%] top-[95.37%] right-[52.5%] bottom-[3.09%] left-[45.83%] bg-crimson" />
        <div className="absolute h-[1.54%] w-[1.67%] top-[95.37%] right-[49.17%] bottom-[3.09%] left-[49.17%] bg-silver" />
        <div className="absolute h-[1.54%] w-[1.67%] top-[95.37%] right-[45.83%] bottom-[3.09%] left-[52.5%] bg-silver" />
      </div>
    </div>
  );
};

export default ImageSlider;
