import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Navigation from "@/components/common/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://www.dksupholstery.sg";
const SITE_NAME = "DKS Upholstery";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1FA637",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "DKS Upholstery Singapore | Sofa & Chair Reupholstery",
    template: "%s | DKS Upholstery Singapore",
  },

  description:
    "Sofa, chair & cushion reupholstery in Singapore. 18+ years, 4.9/5 from 116+ Google reviews, 12-month warranty. Send a photo for a free quote on WhatsApp.",

  applicationName: SITE_NAME,
  category: "Home Services",

  keywords: [
    "upholstery Singapore",
    "sofa reupholstery Singapore",
    "reupholstery cost Singapore",
    "sofa repair Singapore",
    "dining chair upholstery",
    "leather sofa repair",
    "cushion replacement",
    "sofa foam replacement",
    "custom slipcovers",
    "headboard upholstery",
    "commercial upholstery Singapore",
    "DKS Upholstery",
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: "DKS Upholstery Pte Ltd",

  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    locale: "en_SG",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "DKS Upholstery - Loved by Singapore Homes & Businesses",
    description:
      "Over 100 five star reviews from customers who transformed their sofas, chairs, and spaces with DKS Upholstery.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DKS Upholstery: before and after sofa reupholstery in Singapore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DKS Upholstery - Loved by Singapore Homes & Businesses",
    description:
      "18+ years, 4.9/5 on Google, 12-month warranty. Send a photo, get a free quote.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  formatDetection: { telephone: true, email: true, address: false },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${SITE_URL}/#business`,
        name: "DKS Upholstery Pte Ltd",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/og-image.png`,
        description:
          "Upholstery and reupholstery for sofas, dining chairs, cushions, beds, built-ins and commercial projects in Singapore.",
        foundingDate: "2007",
        priceRange: "$$",
        telephone: "+65-XXXX-XXXX",
        address: {
          "@type": "PostalAddress",
          streetAddress: "YOUR STREET ADDRESS",
          addressLocality: "Singapore",
          postalCode: "XXXXXX",
          addressCountry: "SG",
        },
        areaServed: { "@type": "Country", name: "Singapore" },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "116",
          bestRating: "5",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does reupholstery cost in Singapore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A dining chair with a seat cushion typically starts from $75 per chair, while a fixed cushion 3 seater sofa starts from $1380. Prices vary depending on size, design, and material (fabric, leather, or foam). The best way to get an accurate quote is to send us a photo of your furniture.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-SG"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
