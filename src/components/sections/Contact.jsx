import Button from '../common/Button';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-header">
            <span className="section-icon">✦</span>
            <span className="header-text">Got a project?</span>
          </div>
          <h2 className="contact-title">Surround yourself<br />with an expert</h2>
        </div>
        <div className="contact-right">
          <Button variant="primary" className="contact-cta">
            Start a Project Now
            <svg className="cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
