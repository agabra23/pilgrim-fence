import { AnimatedPhoto } from "@/lib/components/AnimatedPhoto";
import CtaButton from "@/lib/components/CtaButton";
import { pathnames } from "@/lib/contants";
import Image from "next/image";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PromiseSection />
      <QuoteSection />
      <TestimonialSection />
      <AffiliateSection />
    </>
  );
}

const HeroSection = () => (
  <section className="relative text-white text-body font-body">
    {/* <Image
          className="absolute -z-10 left-0 top-0 w-full h-full object-cover"
          src="/photos/hero_image.jpg"
          alt="Wooden Fence"
          layout="fill"
        /> */}
    <div
      className="absolute -z-10 left-0 top-0 w-full h-full"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 100%), url('/photos/hero_image.jpg')",
        backgroundColor: "lightgray",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
      aria-hidden="true"
    />
    <div className="container mx-auto p-6 lg:py-16 relative">
      <div className="max-w-2xl my-28">
        <h1 className="font-heading text-title leading-normal">
          America’s Hometown Fence Company
        </h1>
        <p className="mt-4 mb-10">
          A trusted family owned and operated fence company, serving Plymouth
          and the South Shore with professional fence installation and repair
          for over 40 years.
        </p>
        <div className="flex justify-start">
          <CtaButton text="Request a Quote" />
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="bg-background-green text-white text-body font-body">
    <div className="container mx-auto p-6 lg:py-16">
      <div className="flex flex-col gap-8">
        <h2 className="m-0 p-0 font-heading text-heading">About Us</h2>
        <div className="flex-1 flex gap-8">
          <div className="flex-1 flex flex-col gap-8">
            <p>
              Founded in 1975, Pilgrim Fence has been a household name in the
              fencing industry on the South Shore of Massachusetts. Since the
              beginning, we have been a family operated small business with a
              strong focus on being a reliable, fair priced, fence installer.
            </p>
            <p>
              We are deeply involved in our community with a large part of our
              client base being repeat customers. Our commitment to our values
              will ensure that you won’t be left feeling like a transaction. To
              us, every job is just as important as the next. From first contact
              to project completion, we will communicate what the next steps
              are.
            </p>
            <Image
              src={"/photos/logo_closeup.jpeg"}
              alt="Close-up on Pilgrim Fence logo attached to a wooden fence."
              width={4284}
              height={5712}
              className="w-full h-auto object-cover aspect-[176/100]"
            />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={"/illustration/south_shore_illustration.svg"}
              alt="Illustration of South Shore, Massachusetts"
              width={422}
              height={510}
            />
          </div>
        </div>
      </div>
      <p className="my-6">
        We rely heavily on “word of mouth” in the community. Whether you were
        told about us, or just stumbled upon us from a Google search, we welcome
        you to the Pilgrim Fence family!
      </p>
      <div className="flex flex-col lg:flex-row gap-8 max-w-full mb-6">
        <div className="flex-1">
          <Image
            src={"/photos/team1.jpeg"}
            alt="Fence Installation"
            width={1512}
            height={1512}
            className="aspect-[372/418] max-w-full rounded-2xl"
          />
        </div>
        <div className="flex-1">
          <Image
            src={"/photos/jameson.png"}
            alt="Fence Installation"
            width={2204}
            height={2204}
            className="aspect-[372/418] max-w-full rounded-2xl"
          />
        </div>
        <div className="flex-1">
          <Image
            src={"/photos/team2.jpeg"}
            alt="Fence Installation"
            width={3024}
            height={4032}
            className="aspect-[372/418] max-w-full rounded-2xl"
          />
        </div>
      </div>
      <div className="flex justify-start">
        <CtaButton text="Request a Quote" />
      </div>
    </div>
  </section>
);

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

const PromiseSection = () => (
  <section className="bg-white text-body font-body text-foreground">
    <div className="container max-w-4xl mx-auto p-6 lg:py-16 flex flex-col items-center">
      <div className="flex flex-col items-center mb-14">
        <h2 className="font-heading text-heading mb-4">Our Promise</h2>
        <h3 className="font-subheading text-subheading mb-4 uppercase">
          We C.A.R.E.
        </h3>
        <p className="text-center max-w-xl">
          At Pilgrim Fence, we stand by our core values of Communication,
          Accountability, Reputation, and Experience.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <PromiseRow
          svgSrc={"/icons/handshake.svg"}
          alt={"Handshake icon"}
          title={"Communication"}
        >
          <p>
            From your first point of contact to job completion, our team will
            let you know what to expect next. You wouldn’t believe how many
            times we hear, “you actually called me back!” We pride ourselves on
            customer service and communication.
          </p>
        </PromiseRow>
        <PromiseRow
          svgSrc={"/icons/medal.svg"}
          alt={"Megaphone icon"}
          title={"Accountability"}
        >
          <p>
            The buck stops here! We work with local vendors that we’ve built
            relationships with for years to bring you the best quality fence
            products in the industry. Our installation team delivers a finished
            product in a timely manner, paying close attention to every detail
            in your fence design.
          </p>
        </PromiseRow>
        <PromiseRow
          svgSrc={"/icons/tools.svg"}
          alt={"Medal icon"}
          title={"Reputation"}
        >
          <p>
            With over 40 years of being in the community, our reputation is
            everything. Referrals from clients both past and present make up
            much of our business. Word of mouth travels fast on the South Shore.
            Ask around about us!
          </p>
        </PromiseRow>
        <PromiseRow
          svgSrc={"/icons/megaphone.svg"}
          alt={"Wrench and Hammer icon"}
          title={"Experience"}
        >
          <p>
            We understand that you have options for your fencing needs. So why
            choose us? Because we CARE. As a family operated, local business, we
            are dedicated to give you a comfortable experience from start to
            finish. No pushy sales tactics and no empty promises. We show up
            when we say we will, and stand behind our work, leaving you with a
            professional experience and decision you’ll be happy to have made.
          </p>
        </PromiseRow>
      </div>
    </div>
  </section>
);

const PromiseRow = ({
  svgSrc,
  alt,
  title,
  children,
}: {
  svgSrc: string;
  alt: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex gap-8 items-center">
      <div className="p-6 bg-background-light-green rounded-2xl">
        <div className="flex justify-center items-center bg-foreground-green rounded-lg w-40 h-40">
          <Image src={svgSrc} alt={alt} width={105} height={95} />
        </div>
      </div>
      <div>
        <h6 className="font-subheading uppercase text-subheading mb-2">
          {title}
        </h6>
        {children}
      </div>
    </div>
  );
};

const QuoteSection = () => (
  <section className="bg-background-light-green text-body font-body text-foreground">
    <div className="container mx-auto p-6 lg:py-32 max-w-6xl text-center">
      <h4 className="font-heading text-heading mb-8">
        “We had a great experience with Pilgrim Fence! They were prompt,
        professional, neat and clean. They stand behind their work!”
      </h4>
      <p className="font-subheading text-subheading">-Sare A., 2025</p>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="bg-background-green text-white text-body font-body">
    <div className="container mx-auto p-6 lg:py-16">
      <h4 className="font-heading text-heading mb-8">
        What our clients have to say...
      </h4>
      <div className="flex gap-8">
        <TestimonialCard name="Louis F." month="Jun" year="2025">
          If you need a fence installed, this is hands down the place to go for
          the work! James (owner) is personally involved in all aspects of the
          project from design and quotation through installation and follow up.
          Everything was professionally handled. The completed project looks
          outstanding. I would strongly recommend Pilgrim Fence to anyone
          needing fence work completed in the greater Plymouth area.
        </TestimonialCard>
        <TestimonialCard name="Cathy B." month="Jun" year="2025">
          So happy with my new fence from Pilgrim Fence! I’m new to the area and
          after several quotes it was clear that Pilgrim was the best choice.
          James and his crew were great to work with , responsive to what I
          needed and offered suggestions to make it safer for my space . I
          couldn’t be happier!
        </TestimonialCard>
        <TestimonialCard name="Dianne K." month="Jun" year="2025">
          James from Pilgrim fence came and gave us a fair quote. The work was
          completed quickly. The men installing the fence were very courteous,
          conscientious and extremely neat. When they left, you would never know
          anybody was there. I would highly recommend pilgrim fence in Plymouth,
          Massachusetts
        </TestimonialCard>
      </div>
    </div>
  </section>
);

const TestimonialCard = ({
  name,
  month,
  year,
  children,
}: {
  name: string;
  month: string;
  year: string;
  children: React.ReactNode;
}) => {
  const getInitials = (name: string) => {
    const names = name.split(" ");
    if (names.length > 1) {
      return names[0][0] + names[1][0];
    }
    return names[0][0];
  };

  return (
    <div className="flex-1 bg-background-light text-foreground p-8 rounded-2xl">
      <div className="mb-8 flex gap-6">
        <div className="bg-background-brown rounded-full w-[90px] h-[90px] flex justify-center items-center">
          <h6 className="font-heading text-[40px] uppercase text-white">
            {getInitials(name)}
          </h6>
        </div>
        <div className="flex self-center flex-col gap-2 justify-center items-center">
          <p>{name}</p>
          <p>
            {month} {year}
          </p>
        </div>
        <div className="flex-1 flex justify-end items-start">
          <Image
            src={"/icons/quotations.svg"}
            alt="Quotations icon"
            width={50}
            height={42}
          />
        </div>
      </div>
      <p>{children}</p>
    </div>
  );
};

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
