import Image from "next/image";
import CtaButton from "../components/CtaButton";
import { randomUUID } from "crypto";

const AboutSection = ({ id = randomUUID() }: { id: string }) => (
  <section
    id={id}
    className="bg-background-green text-white text-body font-body"
  >
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

export default AboutSection;
