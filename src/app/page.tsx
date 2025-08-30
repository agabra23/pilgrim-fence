import AboutSection from "@/lib/shared-sections/AboutSection";
import AffiliateSection from "@/lib/shared-sections/AffiliateSection";
import HeroSection from "@/lib/shared-sections/HeroSection";
import PromiseSection from "@/lib/shared-sections/PromiseSection";
import QuoteSection from "@/lib/shared-sections/QuoteSection";
import ServicesSection from "@/lib/shared-sections/ServicesSection";
import TestimonialSection from "@/lib/shared-sections/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection
        title="America’s Hometown Fence Company"
        text="A trusted family owned and operated fence company, serving Plymouth and the South Shore with professional fence installation and repair for over 40 years."
        buttonText="Request a Quote"
      />
      <AboutSection />
      <ServicesSection />
      <PromiseSection />
      <QuoteSection />
      <TestimonialSection />
      <AffiliateSection />
    </>
  );
}

// const HeroSection = () => (
//   <section className="relative text-white text-body font-body">
//     {/* <Image
//           className="absolute -z-10 left-0 top-0 w-full h-full object-cover"
//           src="/photos/hero_image.jpg"
//           alt="Wooden Fence"
//           layout="fill"
//         /> */}
//     <div
//       className="absolute -z-10 left-0 top-0 w-full h-full"
//       style={{
//         backgroundImage:
//           "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 100%), url('/photos/hero_image.jpg')",
//         backgroundColor: "lightgray",
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         width: "100%",
//         height: "100%",
//       }}
//       aria-hidden="true"
//     />
//     <div className="container mx-auto p-6 lg:py-16 relative">
//       <div className="max-w-2xl my-28">
//         <h1 className="font-heading text-title leading-normal">
//           America’s Hometown Fence Company
//         </h1>
//         <p className="mt-4 mb-10">
//           A trusted family owned and operated fence company, serving Plymouth
//           and the South Shore with professional fence installation and repair
//           for over 40 years.
//         </p>
//         <div className="flex justify-start">
//           <CtaButton text="Request a Quote" />
//         </div>
//       </div>
//     </div>
//   </section>
// );
