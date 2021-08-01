import Project from "../components/Project";
import Footer from "../components/Footer";

const Portfolio = (props) => {
  return (
    <div>
      <main>
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
            <Project
              repoLink="https://github.com/ivnkris/geo-link"
              imgLink="./assets/images/geo-link.png"
              imgAlt="Geo Link - a platform to re-connect with your city"
              deployedLink="http://krisztianivan.com"
              title="Geo Link"
              description="A platform to re-connect with your city"
            />
            <Project
              repoLink="https://github.com/ivnkris/employee-management-cms-tool"
              imgLink="./assets/images/employee-management-cms.png"
              imgAlt="Employee Management CMS Tool"
              deployedLink="https://github.com/ivnkris/employee-management-cms-tool"
              title="Employee Management CMS"
              description="Command line workforce management application"
            />
            <Project
              repoLink="https://github.com/ivnkris/team-profile-generator"
              imgLink="./assets/images/team-profile-generator.png"
              imgAlt="Team Profile Generator"
              deployedLink="https://github.com/ivnkris/team-profile-generator"
              title="Team Profile Generator"
              description="Command line organisational chart generator"
            />
            <Project
              repoLink="https://github.com/ivnkris/weather-dashboard"
              imgLink="./assets/images/weather-dashboard.png"
              imgAlt="weather dashboard screenshot"
              deployedLink="https://ivnkris.github.io/weather-dashboard/"
              title="Weather Dashboard"
              description="Check the weather in your local area"
            />
            <Project
              repoLink="https://github.com/ivnkris/code-quiz"
              imgLink="./assets/images/code-quiz.png"
              imgAlt="code quiz screenshot"
              deployedLink="https://ivnkris.github.io/code-quiz/"
              title="Code Quiz"
              description="Test your JavaScript knowledge"
            />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
