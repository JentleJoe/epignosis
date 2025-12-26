import { portfolioData } from '../../data/portfolioData';
import Button from '../common/Button';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <h2>Portfolio</h2>
        <p>Showcasing My Work for Your Inspiration</p>
      </div>
      <div className="portfolio-grid">
        {portfolioData.portfolio.map(item => (
          <div key={item.id} className="portfolio-item">
            <div className="portfolio-image">
              <div className="image-placeholder">{item.title}</div>
            </div>
            <div className="portfolio-overlay">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              <Button variant="primary">View</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio-cta">
        <Button variant="primary">View All Projects</Button>
      </div>
    </section>
  );
};

export default Portfolio;
