import { MessageFormProps } from "../types";

const MessageForm = ({
  contactPreferences,
  contactMessage,
}: MessageFormProps) => {
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

export default MessageForm;
