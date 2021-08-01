import Project from "../components/Project";

const Portfolio = (props) => {
  return (
    <div class="element-container">
      <div class="heading--container">
        <h2 id="personal-portfolio" class="animation-1">
          Personal Portfolio
        </h2>
      </div>
      <section class="portfolio--container">
        <Project
          repoLink="https://github.com/ivnkris/p1xel"
          imgLink="./assets/images/p1xel.png"
          imgAlt="P1xel - A digital gaming library with a social element"
          deployedLink="https://fast-shelf-77951.herokuapp.com"
          title="P1xel"
          description="A digital gaming library with a social element"
        />
      </section>
    </div>
  );
};

export default Portfolio;
