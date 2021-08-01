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

          <div class="right-border"></div>

          <section class="contact-me--container">
            <div class="contact-me--item animation-7">
              <i class="fab fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/krisztian-ivan-10880478/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>

            <div class="contact-me--item animation-8">
              <i class="fab fa-github"></i>
              <a
                href="https://github.com/ivnkris"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div class="contact-me--item">
              <a
                href="mailto:krisztian.ivan@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                E-mail
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
