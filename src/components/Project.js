const Project = ({
  repoLink,
  imgLink,
  imgAlt,
  deployedLink,
  title,
  description,
}) => {
  return (
    <div class="portfolio--item">
      <div class="portfolio--image">
        <a href={repoLink} target="_blank" rel="noreferrer">
          <img src={imgLink} alt={imgAlt} width="300px" height="200px" />
        </a>
      </div>
      <div class="portfolio--title">
        <a href={deployedLink} target="_blank" rel="noreferrer">
          {title}
        </a>
      </div>
      <div class="portfolio--description">{description}</div>
    </div>
  );
};

export default Project;
