import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  const skills = ['BRANDING', 'UI/UX DESIGN', 'DEVELOPMENT', 'WEB DESIGN'];

  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-name">DAVID <span>MICHEL</span></h1>
        
        <div className="hero-skills">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">#{skill}</span>
          ))}
        </div>

        <div className="hero-content">
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="dotted-bg"></div>
              <div className="image-placeholder">
                <span>Profile Photo</span>
              </div>
            </div>
          </div>
          <div className="hero-text">
            <p className="hero-bio">
              Welcome to my portfolio! I'm David Michel, a web designer & developer from the US with 16+ years of experience. I craft visually stunning, functional websites that deliver exceptional user experiences.
            </p>
            <Button variant="primary" className="hero-cta">
              Start a Project Now
              <svg className="cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
