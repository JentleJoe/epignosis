import { portfolioData } from '../../data/portfolioData';
import Button from '../common/Button';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-content">
        {portfolioData.projects.map((project, index) => (
          <div key={project.id} className={`project-item project-${index + 1}`}>
            <div className="project-image">
              <div className="image-placeholder">{project.title}</div>
            </div>
            <div className="project-info">
              <div className="project-tag">{project.id} Recent Project</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <Button variant="secondary">View Project</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
