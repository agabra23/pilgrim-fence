const UserForm = () => {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />

      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
    </div>
  );
};

const ProductForm = () => {
  return (
    <div>
      <label htmlFor="product-name">Product Name</label>
      <input type="text" id="product-name" />

      <label htmlFor="product-description">Product Description</label>
      <input type="text" id="product-description" />
    </div>
  );
};

const MessageForm = () => {
  return (
    <div>
      <label htmlFor="contact-name">Name</label>
      <input type="text" id="contact-name" />

      <label htmlFor="contact-email">Email</label>
      <input type="text" id="contact-email" />

      <label htmlFor="contact-message">Message</label>
      <textarea id="contact-message"></textarea>
    </div>
  );
};

export { UserForm, ProductForm, MessageForm };
