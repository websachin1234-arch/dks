import TestimonialsSection from "@/components/home/TestimonialsSection";
import Upholstery from "@/components/HomePage/Upholstery";
import TrustedService from "@/components/HomePage/TrustedService";
import Questions from "@/components/HomePage/Questions";

export default function Home() {
  return (
    <main>
      <Upholstery />
      <TrustedService />
      <TestimonialsSection />
      <Questions />
    </main>
  );
}
