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
          <a
            href="https://docs.google.com/document/d/1jOdrgnXrTY1hPRsXUSUIvsXGDSyJOW88U5ut6OK97b4/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View my Resume
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
