const Navigation = (props) => {
  return (
    <nav>
      <a href="%PUBLIC_URL%/">About Me</a>
      <a href="%PUBLIC_URL%/portfolio">Portfolio</a>
      <a href="%PUBLIC_URL%/contact">Contact</a>
      <a href="./assets/pdf/CV_Krisztian_Ivan.pdf" download>
        Resume
      </a>
    </nav>
  );
};

export default Navigation;
