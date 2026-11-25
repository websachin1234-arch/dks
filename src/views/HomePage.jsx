import Navbar from "@/components/common/Navbar";
import Questions from "@/components/HomePage/Questions";
import TrustedService from "@/components/HomePage/TrustedService";
import Upholstery from "@/components/HomePage/Upholstery";

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Upholstery/>
      <TrustedService />
      <Questions />
    </>
  );
};

export default HomePage;
