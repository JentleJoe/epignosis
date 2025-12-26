import { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './FAQ.css';

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-main">
        <div className="faq-header-left">
          <div className="faq-header">
            <span className="section-icon">✦</span>
            <span className="header-text">Support</span>
          </div>
          <h2 className="faq-title">FAQS</h2>
          <p className="faq-description">Not sure yet? Have some questions? We listed the ones most frequently asked.</p>
        </div>

        <div className="faq-items-right">
          <div className="faq-list">
            {portfolioData.faqs.map((faq, index) => (
              <div key={faq.id}>
                <div 
                  className={`faq-item ${openId === faq.id ? 'active' : ''}`}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="faq-question">
                    <span className="question-text">{faq.question}</span>
                    <span className="faq-icon">{openId === faq.id ? '−' : '+'}</span>
                  </div>
                  {openId === faq.id && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
                {index === 2 && <div className="faq-divider"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
