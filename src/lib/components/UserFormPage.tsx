import { UserFormProps } from "../types";
import { Label } from "./Label";
import { Input } from "./Input";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

const values = {
  residential: "residential",
  commercial: "commercial",
};

const UserForm = ({
  propertyType,
  businessName,
  firstName,
  lastName,
  phoneNumber,
  email,
  address,
}: UserFormProps) => {
  return (
    <div className="flex flex-col gap-6">
      <RadioGroup defaultValue={values.residential} required className="gap-0">
        <p className="mb-4 text-body font-body flex items-center gap-1">
          Are you inquiring for a residential or commercial property?
          <span className="text-error">*</span>
        </p>
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value={values.residential}
            id={values.residential}
            className="m-2"
          />
          <Label htmlFor={values.residential} className="text-body font-body">
            Residential
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value={values.commercial}
            id={values.commercial}
            className="m-2"
          />
          <Label htmlFor={values.commercial} className="text-body font-body">
            Commercial
          </Label>
        </div>
      </RadioGroup>

      <div className="flex flex-col gap-4">
        <p className="text-body font-body flex items-center gap-1">
          If commercial, please specify the name of your business
          <span className="text-error">*</span>
        </p>
        <Input
          id="businessName"
          type="text"
          placeholder="Business Name"
          required
        />
      </div>

      <div className="flex flex-col gap-4">
        <Label htmlFor="firstName" className="text-body font-body">
          Name
          <span className="text-error">*</span>
        </Label>
        <div className="flex gap-4">
          <Input id="firstName" type="text" placeholder="First Name" required />
          <Input id="lastName" type="text" placeholder="Last Name" required />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Label htmlFor="phoneNumber" className="text-body font-body">
          Phone Number
          <span className="text-error">*</span>
        </Label>
        <Input
          id="phoneNumber"
          type="tel"
          placeholder="(123) 456-7890"
          required
        />
      </div>

      <div className="flex flex-col gap-4">
        <Label htmlFor="email" className="text-body font-body">
          Email
          <span className="text-error">*</span>
        </Label>
        <Input id="email" type="email" placeholder="email@email.com" required />
      </div>

      <div className="flex flex-col gap-4">
        <Label htmlFor="email" className="text-body font-body">
          Enter the address where the work is to be completed (optional):
        </Label>
        <Input id="address" type="text" placeholder="Address" />
      </div>
    </div>
  );
};

export default UserForm;
