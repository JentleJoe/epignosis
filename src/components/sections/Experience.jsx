import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'UI/UX Designer',
      company: 'Wegems',
      period: '2023 - Present',
      description: 'Designing intuitive interfaces, improving user flows, conducting usability tests, and collaborating with teams to create engaging digital experiences.'
    },
    {
      id: 2,
      title: 'Product Designer',
      company: 'LuminUI',
      period: '2022 - 2023',
      description: 'Crafting interactive designs, prototyping innovative features, analyzing user behavior, and ensuring products meet user needs and business goals.'
    },
    {
      id: 3,
      title: 'Senior UX Designer',
      company: 'Ugergency',
      period: '2020 - 2022',
      description: 'Leading UX projects, conducting user research and testing, and optimizing products for usability, engagement, and overall satisfaction.'
    }
  ];

  return (
    <section className="experience">
      <div className="experience-header-top">
        <span className="section-icon">✦</span>
        <h2>Experience</h2>
        <div className="header-line"></div>
      </div>

      <div className="experience-container">
        <div className="experience-left">
          <div className="experience-list">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-header-row">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-company">At {exp.company}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-right">
          <div className="contact-section">
            <div className="contact-header">
              <span className="section-icon">✦</span>
              <h2>Contact</h2>
            </div>

            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <a href="tel:+00399484948944" className="contact-value">+0039 9484 94894</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:luminUI@gmail.com" className="contact-value">luminUI@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Website</span>
                <a href="https://www.luminui.com" className="contact-value" target="_blank" rel="noopener noreferrer">www.luminui.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Address</span>
                <span className="contact-value">19 Southern Way, UK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
