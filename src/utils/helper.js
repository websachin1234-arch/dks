export const testimonials = [
  {
    id: 1,
    quote:
      "My sofa looks brand new! Quick, professional, and high quality work. Couldn’t be happier.",
    clientType: "Residential Customer",
    name: "Aarav M.",
    role: "Operations Manager",
    avatar: "/assets/images/png/avatar-aarav.png",
  },
  {
    id: 2,
    quote:
      "They handled our office lounge seating perfectly. Stylish, durable, and on time!",
    clientType: "",
    name: "David K.",
    role: "Facility Director",
    avatar: "/assets/images/png/avatar-david.png",
  },
  {
    id: 3,
    quote:
      "Excellent service from start to finish. They helped me choose the perfect fabric, and the results are stunning!",
    clientType: "",
    name: "Rina S.",
    role: "Sustainability Lead",
    avatar: "/assets/images/png/avatar-rina.png",
  },
  {
    id: 4,
    quote:
      "Very happy with the result. Quick response, clear communication, and beautiful finishing on all our dining chairs.",
    clientType: "Residential Customer",
    name: "Grace T.",
    role: "Interior Stylist",
    avatar: "/assets/images/png/avatar-rina.png",
  },
  {
    id: 5,
    quote:
      "Our lounge chairs were restored beautifully and delivered exactly as promised. The craftsmanship is second to none.",
    clientType: "Commercial Customer",
    name: "Daniel L.",
    role: "Business Owner",
    avatar: "/assets/images/png/avatar-david.png",
  },
];

export const faqItems = [
  {
    question: "How much does reupholstery cost in Singapore?",
    answer:
      "A dining chair with a seat cushion typically starts from $75 per chair, while a fixed cushion 3 seater sofa starts from $1380. Prices vary depending on size, design, and material (fabric, leather, or foam). The best way to get an accurate quote is to send us a photo of your furniture.",
  },
  {
    question: "How long does the upholstery process take?",
    answer:
      "Most projects take around two to four weeks after materials are confirmed. Timing may vary based on the item, fabric availability, and the size of the project.",
  },
  {
    question: "Do you provide pickup and delivery?",
    answer:
      "Yes. Pickup and delivery can be arranged within Singapore. Contact us with your location and furniture details so we can confirm availability and pricing.",
  },
  {
    question: "What types of materials do you offer?",
    answer:
      "We work with a range of upholstery fabrics and leathers, along with replacement foam and other support materials. We can recommend an option based on use, comfort, and maintenance.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes. Warranty terms depend on the service and materials used. Your quotation and service details will explain the applicable coverage.",
  },
  {
    question: "Why is the warranty only 12 months?",
    answer:
      "A 12-month workmanship warranty reflects normal wear and the working life of upholstery components. Fabric, leather, misuse, and accidental damage are handled according to the specific terms provided.",
  },
  {
    question:
      "Why does reupholstery cost almost the same as buying a new sofa?",
    answer:
      "Quality reupholstery includes removal of old materials, frame repairs, new foam, handwork, fabric, and finishing. It preserves a well-made or sentimental frame that may be more durable than a low-cost replacement.",
  },
  {
    question: "Can I supply my own fabric?",
    answer:
      "We can discuss customer-supplied fabric on a project basis. The fabric must suit the furniture and be sufficient for the work, and some materials may not be suitable for reupholstery.",
  },
  {
    question: "How should I care for my newly upholstered furniture?",
    answer:
      "Vacuum regularly with a soft brush, clean spills promptly with a fabric-appropriate method, and avoid prolonged direct sunlight. Follow the care instructions supplied with your chosen material.",
  },
  {
    question: "Do you provide a quotation before work begins?",
    answer:
      "Yes. Send clear photos and measurements of your furniture through our contact channels for an initial estimate. A final quotation is confirmed after reviewing the item and requirements.",
  },
];

export const trustedClientLogos = [
  { src: "/assets/images/png/nightclub.png", width: 111, height: 37 },
  { src: "/assets/images/png/smu.png", width: 111, height: 37 },
  { src: "/assets/images/png/tsui wah.png", width: 85, height: 69 },
  { src: "/assets/images/png/education.png", width: 85, height: 69 },
  { src: "/assets/images/png/pancakes.png", width: 64, height: 62 },
  { src: "/assets/images/png/roznet.png", width: 124, height: 36 },
  { src: "/assets/images/png/parliament.png", width: 142, height: 77 },
  { src: "/assets/images/png/apsn.png", width: 152, height: 40 },
  { src: "/assets/images/png/dnata.png", width: 123, height: 55 },
  { src: "/assets/images/png/grand mercure.png", width: 114, height: 66 },
  { src: "/assets/images/png/chloe.png", width: 121, height: 40 },
  { src: "/assets/images/png/embassy.png", width: 85, height: 78 },
];

export const footerNavigation = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Blog", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Contact", href: "#" },
];

export const footerGallery = [
  "/assets/images/png/footer_img.png",
  "/assets/images/png/footer_img_1.png",
  "/assets/images/png/footer_img_2.png",
  "/assets/images/png/footer_img_3.png",
  "/assets/images/png/footer_img_4.png",
  "/assets/images/png/footer_img_5.png",
];

export const footerServiceGroups = [
  ["Reupholstery", "Covers & Cushions", "Foam & Filling"],
  ["Beds & Headboards", "Built Ins", "Custom Furniture"],
  ["Repairs & On Site", "Outdoor & Commercial", "Cleaning", "Revarnishing"],
];

export const services = footerServiceGroups.flat().map((name) => ({
  name,
  slug: name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, ""),
}));

export const footerAddress = {
  icon: "/assets/images/svg/location_icon.svg",
  alt: "location",
  text: "Defu Industrial Estate Address: 37 Defu Lane 10, #01/41, Singapore 539214",
};

export const footerSocials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: "/assets/images/svg/instagram_icon.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: "/assets/images/svg/facebook_icon.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: "/assets/images/svg/linkdin_icon.svg",
  },
];

export const footerContacts = [
  {
    type: "phone",
    icon: "/assets/images/svg/whatsapp_icon.svg",
    iconWidth: 16,
    iconHeight: 16,
    links: [
      { text: "98385685,", href: "tel:98385685" },
      { text: "93832006", href: "tel:93832006" },
    ],
  },
  {
    type: "phone",
    icon: "/assets/images/svg/coll_icon.svg",
    iconWidth: 15,
    iconHeight: 15,
    links: [{ text: "62844186", href: "tel:62844186" }],
  },
  {
    type: "email",
    icon: "/assets/images/svg/dm_icon.svg",
    iconWidth: 13,
    iconHeight: 13,
    links: [
      {
        text: "info@dksinternational.com",
        href: "mailto:info@dksinternational.com",
      },
      {
        text: "dks.int@live.com",
        href: "mailto:dks.int@live.com",
      },
    ],
  },
];

export const footerCopy = {
  logoAlt: "DKS International",
  introduction:
    "At DKS, we specialize in expert upholstery, custom furniture, and repairs combining craftsmanship with care to bring new life to your furniture.",
  followUs: "Follow Us",
  followIconAlt: "follow",
  galleryAltPrefix: "Gallery",
  dividerAlt: "line",
  termsOfService: "Terms of Service",
  copyrightPrefix: "Copyright ©",
  copyright:
    "DKS Upholstery Pte Ltd | DKS International Supplier & Services. All Rights Reserved.",
};

export const footerAssets = {
  logo: "/assets/images/svg/logo.svg",
  followIcon: "/assets/images/svg/follow_icon.svg",
  divider: "/assets/images/svg/footer_line.svg",
};

export const homepageAssets = {
  heroBackground: "/assets/images/png/Hero-section.png",
  googleRating: "/assets/images/svg/google.svg",
  whatsapp: "/assets/images/svg/whatsapp.svg",
  beforeAfter: "/assets/images/png/before-after.png",
  faqArrow: "/assets/images/svg/arrow-up.svg",
  quoteForm: {
    name: "/assets/images/svg/name.svg",
    contact: "/assets/images/svg/contact.svg",
    upload: "/assets/images/svg/upload.svg",
    photo: "/assets/images/svg/photo.svg",
  },
  testimonials: {
    googleReview: "/assets/images/png/google-icon.png",
    star: "/assets/images/svg/star.svg",
  },
};

export const homepageCopy = {
  hero: {
    ratingLabel: "Highly Rated on Google",
    headingAccent: "Upholstery Services",
    headingRemainder: "Trusted Across Singapore",
    description:
      "Complete upholstery solutions for homes and businesses sofas, cushions, built ins, headboards, and more.",
    contactLabel: "WhatsApp Us Now",
  },
  trustedServices: {
    heading: "Trusted Our Service",
    logoAlt: "Client logo",
  },
  faq: {
    heading: "Frequently Asked",
    headingAccent: "Questions",
    moreAnswersLabel: "Find More Answers",
  },
  quoteForm: {
    nameLabel: "Name*",
    namePlaceholder: "Enter First and Last Name",
    contactLabel: "Contact*",
    contactPlaceholder: "Enter Mobile",
    uploadLabel: "Upload Photos",
    uploadPrompt: "Drop your image",
    submitLabel: "Get Free Quote",
    sendingLabel: "Sending...",
    successMessage: "Thank you!",
    errorMessage: "Something Went Wrong",
    errors: {
      nameRequired: "Name is required",
      invalidName: "Enter a valid name (letters only)",
      contactRequired: "Contact is required",
      invalidContact: "Enter valid 10 digit mobile number",
    },
  },
  testimonials: {
    heading: "Loved by Singapore",
    headingAccent: "Homes & Businesses",
    description:
      "Over 100 five star reviews from customers who transformed their sofas, chairs, and spaces with DKS Upholstery.",
    sliderLabel: "Customer testimonials",
    googleReviewAlt: "Google Review",
    previousLabel: "Previous testimonial",
    nextLabel: "Next testimonial",
    paginationLabel: "Testimonial pagination",
    ratingLabel: "5 out of 5 stars",
    starCount: 5,
  },
  simpleHero: {
    heading: "DKS Upholstery",
    description: "Expert upholstery restoration for homes and businesses.",
  },
};

export const blogPosts = [
  {
    slug: "best-upholstery-fabrics-2025",
    title: "Best Upholstery Fabrics 2025",
    highlight: "Fabrics 2025",
    description:
      "Explore the top trending and durable fabrics for sofas and chairs in 2025.",
    image: "/assets/images/webp/blog-banner.webp",

    sections: [
      {
        id: "performance-fabrics",
        title: "Performance Fabrics",
        highlight: "Fabrics",
        description:
          "Performance fabrics are still leading the charts in 2025. They are engineered to resist stains, spills, and wear perfect for families, homes with pets, or high traffic areas.",
        image: "/assets/images/webp/blog-performance.webp",
        points: [],
      },
      {
        id: "eco-friendly-sustainable-fabrics",
        title: "Eco Friendly & Sustainable Fabrics",
        highlight: "Fabrics",
        description:
          "Sustainability is no longer just a trend it’s a lifestyle choice. Fabrics made from organic cotton, recycled polyester, hemp, and bamboo blends are gaining popularity.",
        image: "/assets/images/webp/blog-eco.webp",
        points: [
          {
            label: "Pros",
            text: "Environmentally friendly, breathable, soft texture.",
          },
          {
            label: "Trends",
            text: "Earthy tones, natural textures, and raw finishes.",
          },
          {
            label: "Best For",
            text: "Eco conscious buyers who want style with responsibility.",
          },
        ],
      },
      {
        id: "boucle-textured-fabrics",
        title: "Bouclé & Textured Fabrics",
        highlight: "Fabrics",
        description:
          "Bouclé continues to dominate 2025, adding texture and warmth to modern interiors. Its cozy looped yarns bring a luxurious and tactile feel.",
        image: "/assets/images/webp/blog-boucle.webp",
        points: [
          { label: "Pros", text: "Soft, adds character to simple furniture." },
          {
            label: "Trends",
            text: "Cream, ivory, and pastel hues are widely used.",
          },
          {
            label: "Best For",
            text: "Accent chairs, statement sofas, and chic spaces.",
          },
        ],
      },
      {
        id: "leather-faux-leather",
        title: "Leather & Faux Leather",
        highlight: "Leather",
        description:
          "Leather never goes out of style. In 2025, sustainable leather alternatives and vegan leather are gaining more traction.",
        image: "",
        points: [],
      },
    ],

    conclusion: {
      title: "Conclusion:",
      text: "In 2025, the best upholstery fabrics combine style, durability, and sustainability. Whether you want the plush luxury of velvet, the eco friendly charm of linen, or the practicality of performance fabrics, the choices are more versatile than ever. The right fabric not only elevates your sofa but also enhances your lifestyle.",
    },
  },
];

export const getAllPosts = () => blogPosts;

export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);
