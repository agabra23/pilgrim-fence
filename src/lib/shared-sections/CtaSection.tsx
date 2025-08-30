import CtaButton from "../components/CtaButton";

const CtaSection = ({
  text,
  buttonText,
}: {
  text: string;
  buttonText: string;
}) => (
  <section className="bg-background text-foreground text-body font-body">
    <div className="container mx-auto px-6 py-16 flex flex-col gap-4 justify-center items-center">
      <p className="font-body text-body text-center">{text}</p>
      <CtaButton text={buttonText} />
    </div>
  </section>
);

export default CtaSection;
