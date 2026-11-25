import Questions from "@/components/HomePage/Questions";
import TrustedService from "@/components/HomePage/TrustedService";
import Upholstery from "@/components/HomePage/Upholstery";

export default function Home() {
  return (
    <main>
      <Upholstery />
      <TrustedService />
      <Questions />
    </main>
  );
}
