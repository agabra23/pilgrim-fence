import { ProductFormProps } from "../types";

const ProductForm = ({ productTypes, referenceTypes }: ProductFormProps) => {
  return (
    <div>
      <label htmlFor="product-name">Product Name</label>
      <input type="text" id="product-name" />

      <label htmlFor="product-description">Product Description</label>
      <input type="text" id="product-description" />
    </div>
  );
};

export default ProductForm;
