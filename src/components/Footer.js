const Footer = (props) => {
  return (
    <footer class="footer--content">
      <div class="contact-me--item">
        <i class="fab fa-linkedin"></i>
        <a
          href="https://www.linkedin.com/in/krisztian-ivan-10880478/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </div>

      <div class="contact-me--item">
        <i class="fab fa-github"></i>
        <a href="https://github.com/ivnkris" target="_blank" rel="noreferrer">
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
    </footer>
  );
};

export default Footer;
