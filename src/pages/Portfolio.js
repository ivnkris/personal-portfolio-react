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
              repoLink="https://github.com/ivnkris/bandmatch-client"
              imgLink="./assets/images/bandmatch.png"
              imgAlt="Bandmatch - A one-stop-shop for musicians, so that they can focus on creating amazing music"
              deployedLink="https://arcane-springs-60231.herokuapp.com"
              title="Bandmatch"
              description="A one-stop-shop for musicians"
            />
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
              repoLink="https://github.com/ivnkris/full-stack-tech-blog"
              imgLink="./assets/images/full-stack-tech-blog.png"
              imgAlt="Full-stack tech blog"
              deployedLink="https://warm-brushlands-16207.herokuapp.com"
              title="Full-stack Tech Blog"
              description="A full-stack blogging app for developers"
            />
            <Project
              repoLink="https://github.com/ivnkris/PWA-budget-tracker"
              imgLink="./assets/images/pwa-budget-tracker.png"
              imgAlt="PWA Budget Tracker"
              deployedLink="https://still-thicket-78174.herokuapp.com"
              title="PWA Budget Tracker"
              description="A progressive web application to track your spending"
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
