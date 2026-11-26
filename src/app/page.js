import Questions from "@/components/HomePage/FAQ";
import TrustedService from "@/components/HomePage/TrustedService";
import Upholstery from "@/components/HomePage/Hero";

export default function Home() {
  return (
    <main>
      <Upholstery />
      <TrustedService />
      <Questions />
    </main>
  );
}
