import Image from "next/image";
import Swipper from "../components/swipper"
import Testimonials from "@/components/home/Testimonials";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import Process from "@/components/home/Process";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
