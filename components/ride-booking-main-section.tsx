import type { NextPage } from "next";
import BookingForm from "./booking-form";
import MapArea from "./map-area";

const RideBookingMainSection: NextPage = () => {
  return (
    <div className="self-stretch bg-white flex flex-row items-center justify-between text-left text-13xl text-crimson font-inter md:flex-col md:pl-4 md:pr-4 md:box-border">
      <BookingForm />
      <MapArea />
    </div>
  );
};

export default RideBookingMainSection;
