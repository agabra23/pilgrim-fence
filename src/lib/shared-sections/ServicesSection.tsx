import Image from "next/image";
import { AnimatedPhoto } from "../components/AnimatedPhoto";
import { pathnames } from "../contants";
import CtaButton from "../components/CtaButton";

const ServicesSection = () => (
  <section className="bg-white text-body font-body text-foreground">
    <div className="container mx-auto p-6 lg:py-16">
      <h2 className="font-heading text-heading mb-8">Our Services</h2>
      <div className="mb-6">
        <h3 className="font-subheading text-subheading mb-2 uppercase">
          Professional Fence Installation and Repair
        </h3>
        <p>
          At Pilgrim Fence Co., we take pride in using only professional-grade
          materials that ensure strength and durability for every project. By
          sourcing all of our materials locally, we’re able to maintain strict
          quality control while supporting the community. This approach
          guarantees that your fence is made with top-tier materials designed to
          withstand the test of time.
        </p>
      </div>
      <div className="flex gap-4 justify-between items-start">
        <AnimatedPhoto text="Wood Fencing" pathname={pathnames.fencing.wood}>
          <Image
            src={"/photos/ourservices1.jpeg"}
            alt="Wood Fence"
            width={4032}
            height={3024}
            className="w-full h-full object-cover object-top rounded-2xl"
          />
        </AnimatedPhoto>
        <AnimatedPhoto text="Vinyl Fencing" pathname={pathnames.fencing.vinyl}>
          <Image
            src={"/photos/ourservices2.jpg"}
            alt="Wood Fence"
            width={6000}
            height={3376}
            className="w-full h-full object-cover object-top rounded-2xl"
          />
        </AnimatedPhoto>
        <AnimatedPhoto
          text="Aluminum Fencing"
          pathname={pathnames.fencing.aluminum}
        >
          <Image
            src={"/photos/ourservices3.jpg"}
            alt="Wood Fence"
            width={4032}
            height={3024}
            className="w-full h-full object-cover object-top rounded-2xl"
          />
        </AnimatedPhoto>
        <AnimatedPhoto
          text="Chain-link Fencing"
          pathname={pathnames.fencing.chainLink}
        >
          <Image
            src={"/photos/ourservices4.jpg"}
            alt="Wood Fence"
            width={6000}
            height={3376}
            className="w-full h-full object-cover object-top rounded-2xl"
          />
        </AnimatedPhoto>
      </div>
      <div className="w-full flex justify-end mt-8">
        <CtaButton text="Request a quote" />
      </div>
    </div>
  </section>
);

export default ServicesSection;
