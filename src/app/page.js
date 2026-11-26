import Questions from "@/components/home/FAQ";
import TrustedService from "@/components/home/TrustedService";
import Upholstery from "@/components/home/Hero";
import TestimonialsSection from "@/components/home/TestimonialsSection";

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
