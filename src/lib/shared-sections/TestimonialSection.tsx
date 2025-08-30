import Image from "next/image";

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

export default TestimonialSection;
