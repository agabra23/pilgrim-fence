import CtaButton from "../components/CtaButton";
import { pathnames } from "../constants";

const HeroSection = ({
  title,
  children,
  buttonText = "",
  href = pathnames.contact,
}: {
  title: string;
  children: React.ReactNode;
  buttonText?: string;
  href?: string;
}) => (
  <section className="relative text-white text-body font-body">
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
        <h1 className="font-heading text-title leading-tight">{title}</h1>
        <p className="mt-4 mb-10">{children}</p>
        <div className={"flex justify-start" + (buttonText ? "" : " hidden")}>
          <CtaButton text={buttonText} href={href} />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
