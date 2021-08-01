import { Link } from "react-router-dom";

import Footer from "../components/Footer";

const Resume = (props) => {
  return (
    <div>
      <main>
        <div>
          <h2>Known Technologies:</h2>
          <section>
            <ul>
              <li>
                <strong>Languages:</strong> HTML, CSS, JavaScript, React,
                jQuery, Node.js, JSON, Express, Web-APIs, Third-party APIs,
                RESTful APIs, Moment.js, Bootstrap, Handlebars.js, Git, mySQL,
                Sequelize, MongoDB, Mongoose and GraphQL
              </li>
              <li>
                <strong>Applications:</strong> MS Visual Studio Code, NPM,
                Postman, GitHub, Heroku, mySQL Workbench and Robo 3T
              </li>
            </ul>
          </section>
        </div>

        <div class="element-container">
          <Link to="/assets/pdf/CV_Krisztian_Ivan.pdf" target="_blank" download>
            Download my Resume
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
