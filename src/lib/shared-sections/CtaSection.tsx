import CtaButton from "../components/CtaButton";

const CtaSection = ({
  children,
  buttonText,
  greenVariant = false,
}: {
  children: React.ReactNode;
  buttonText: string;
  greenVariant?: boolean;
}) => (
  <section
    className={`${
      greenVariant
        ? "bg-background-green text-white"
        : "bg-background text-foreground"
    } text-foreground text-body font-body`}
  >
    <div className="container mx-auto px-6 py-16 flex flex-col gap-4 justify-center items-center">
      <p className="font-body text-body text-center">{children}</p>
      <CtaButton text={buttonText} />
    </div>
  </section>
);

export default CtaSection;
