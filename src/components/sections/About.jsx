import Button from '../common/Button';
import './About.css';

const About = () => {
  const socialLinks = [
    { id: 1, icon: '𝑓', name: 'Facebook', url: '#' },
    { id: 2, icon: '📷', name: 'Instagram', url: '#' },
    { id: 3, icon: 'in', name: 'LinkedIn', url: '#' },
    { id: 4, icon: '𝕏', name: 'X', url: '#' }
  ];

  return (
    <section className="about">
      <div className="about-header">
        <span className="section-icon">✦</span>
        <h2>About Me</h2>
        <div className="header-line"></div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3 className="about-title">
            Passionate & lead<br />
            Product Designer
          </h3>
          <p className="about-bio">
            I'm David Michel, a UI/UX designer passionate about crafting intuitive, user-centered experiences. I've completed 100+ projects turning complex ideas into seamless interfaces.
          </p>
          <Button variant="primary" className="download-btn">
            Download Resume
          </Button>
        </div>

        <div className="about-profile">
          <div className="profile-card">
            <div className="profile-image-container">
              <div className="profile-image">
                <span>Profile Image</span>
              </div>
            </div>
            <h4 className="profile-name">David Michel</h4>
            <p className="profile-title">Visualizer & Design Director</p>
            <div className="social-links">
              {socialLinks.map(link => (
                <a 
                  key={link.id} 
                  href={link.url} 
                  className="social-icon"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
