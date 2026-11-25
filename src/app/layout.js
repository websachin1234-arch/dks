import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DKS Upholstery",
  description:
    "DKS Upholstery specializes in high-quality upholstery solutions, combining expert craftsmanship, premium materials, and stylish designs to transform furniture and interiors with comfort, elegance, and durability.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
