import Image from "next/image";

const AffiliateSection = () => (
  <section className="bg-white text-foreground text-body font-body">
    <div className="container mx-auto p-6 lg:py-16 max-w-3xl flex justify-between">
      <div className="flex flex-col gap-2 items-center">
        <p>Member of</p>
        <Image
          src={"/affiliateLogos/FWALogo.png"}
          alt="Logo of the Fence Workers Association"
          width={150}
          height={120}
          className="filter grayscale contrast-[500%]"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p>Member of</p>
        <Image
          src={"/affiliateLogos/AFALogo.jpg"}
          alt="Logo of the American Fence Association"
          width={150}
          height={120}
          className="filter grayscale contrast-[500%]"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p>Member of</p>
        <Image
          src={"/affiliateLogos/PCCLogo.webp"}
          alt="Logo of the Plymouth Area Chamber of Commerce"
          width={150}
          height={120}
          className="filter grayscale contrast-[500%]"
        />
      </div>
    </div>
  </section>
);

export default AffiliateSection;
