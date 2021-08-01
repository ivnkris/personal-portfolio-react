import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mleapnpd");
  if (state.succeeded) {
    return (
      <p class="form-email portfolio--description">
        Thanks for sending a message!
      </p>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-email portfolio--description">
          <label htmlFor="email">Email Address</label>
        </div>
        <div class="form-email">
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div class="form-item">
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here..."
          />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div class="form-item">
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
