import { useState } from 'react';
import Button from '../common/Button';
import './Services.css';

const Services = () => {
  const [expandedId, setExpandedId] = useState(1);

  const services = [
    {
      id: 1,
      subtitle: 'Designing Seamless Journeys',
      title: 'UI/UX Design',
      fullDescription: 'Crafting intuitive, user-centered experiences that delight and engage. I design digital solutions that solve real problems and exceed user expectations.',
      details: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Interactive Interface Design',
        'Usability Testing & Optimization'
      ]
    },
    {
      id: 2,
      subtitle: 'Building Functional Solutions',
      title: 'Web Development',
      fullDescription: 'Creating responsive, high-performance websites and applications. I build digital experiences that are fast, scalable, and user-friendly.',
      details: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Interactive Interface Design',
        'Usability Testing & Optimization'
      ]
    },
    {
      id: 3,
      subtitle: 'Shaping Memorable Identities',
      title: 'Branding',
      fullDescription: 'Developing and maintaining web applications, ensuring functionality, and collaborating with teams to deliver seamless.',
      details: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Interactive Interface Design',
        'Usability Testing & Optimization'
      ]
    }
  ];

  const toggleService = (id) => {
    // Always keep one item open - don't close if it's already open
    if (expandedId !== id) {
      setExpandedId(id);
    }
  };

  const expandedService = services.find(s => s.id === expandedId);

  return (
    <section className="services">
      <div className="services-header-section">
        <div className="services-header-left">
          <div className="services-header">
            <span className="section-icon">✦</span>
            <h2>My Services</h2>
          </div>
          <Button variant="primary" className="services-cta">
            Start a Project Now
          </Button>
        </div>

        <div className="services-header-right">
          <h2 className="services-main-title">Experience the Impact of User-Centered Design</h2>
          <p className="services-main-description">
            Experience the impact of user-centered design. I craft intuitive and engaging digital solutions that put users first and elevate brands.
          </p>
        </div>
      </div>

      <div className="services-container">
        <div className="services-left">
          <div className="services-list">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-card ${expandedId === service.id ? 'expanded' : ''}`}
                onClick={() => toggleService(service.id)}
              >
                <div className="service-card-header">
                  <div className="service-card-content">
                    <p className="service-subtitle">{service.subtitle}</p>
                    <h3 className="service-card-title">{service.title}</h3>
                  </div>
                  <div className="service-arrow">→</div>
                </div>

                {expandedId === service.id && (
                  <div className="service-expanded">
                    <p className="service-full-description">{service.fullDescription}</p>
                    <div className="service-details">
                      {service.details.map((detail, index) => (
                        <div key={index} className="detail-item">
                          <span className="detail-dot">•</span>
                          <span className="detail-text">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="services-right">
          {expandedService ? (
            <div className="service-showcase">
              <div className="showcase-image">
                <div className="image-placeholder">
                  <span>Service Image</span>
                </div>
              </div>
              <button className="showcase-arrow" onClick={() => toggleService(expandedId)}>
                →
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Services;
