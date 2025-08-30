import Image from "next/image";

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

export default PromiseSection;
