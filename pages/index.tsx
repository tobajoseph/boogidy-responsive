import type { NextPage } from "next";
import NavigationBar from "../components/navigation-bar";
import RideBookingMainSection from "../components/ride-booking-main-section";
import SecondaryFooter from "../components/secondary-footer";

const BookRide: NextPage = () => {
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[785px] overflow-hidden flex flex-col py-0 px-[150px] box-border items-center justify-start">
      <NavigationBar />
      <RideBookingMainSection />
      <SecondaryFooter />
    </div>
  );
};

export default BookRide;
