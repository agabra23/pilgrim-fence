export interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export type UserFormProps = {
  propertyType: "residential" | "commercial";
  businessName?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address?: string;
};

export type ProductFormProps = {
  productTypes: ProductType[];
  referenceTypes?: ReferenceType[];
};

export type MessageFormProps = {
  contactPreferences: ContactPreference[];
  contactMessage?: string;
};

export type ProductType =
  | "wood"
  | "vinyl"
  | "aluminum"
  | "chain-link"
  | "unknown";
export type ReferenceType =
  | "facebook"
  | "instagram"
  | "google"
  | "referral"
  | "other";
export type ContactPreference = "call" | "text" | "email" | "no-preference";

export type FormData = {
  propertyType: "residential" | "commercial";
  businessName?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address?: string;
  productTypes: ProductType[];
  referenceTypes?: ReferenceType[];
  contactPreferences: ContactPreference[];
  contactMessage?: string;
};
