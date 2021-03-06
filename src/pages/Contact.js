import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = (props) => {
  return (
    <div>
      <main>
        <div class="element-container">
          <div class="heading--container contact-me">
            <h2 id="contact-me" class="animation-1">
              Contact Me
            </h2>
          </div>
          <section class="portfolio--container">
            <ContactForm />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
