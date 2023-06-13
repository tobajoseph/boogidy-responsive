import type { NextPage } from "next";

const MapArea: NextPage = () => {
  return (
    <iframe
      className="[border:none] w-[570px]"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23467134.56783457!2d-95.71289123!3d37.09024056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f562b34d9b%3A0x8b74c23d1330b466!2sUnited%20States!5e0!3m2!1sen!2sus!4v1234567890"
    />
  );
};

export default MapArea;
