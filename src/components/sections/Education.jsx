import { useState, useEffect } from 'react';
import AnimatedSection from '../common/AnimatedSection';
import budgetingAndForecasting from '../../assets/budgeting-and-forecasting.jpg';
import financialAnalysis from '../../assets/financial-analysis.jpg';
import excelFundamentals from '../../assets/excel-fundamentals.jpg';
import accountingFundamentals from '../../assets/accounting-fundamentals.jpg';
import professionalEthics from '../../assets/professional-ethics.jpg';
import hubspotInboundCertified from '../../assets/hubspot-inbound-certified.png';
import loubbyAiAutomation from '../../assets/loubby-ai-automation.png';
import clickupProjectManagement from '../../assets/clickup-project-management.png';

const Education = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const educationItems = [
    {
      id: 1,
      degree: 'BSc in Biochemistry',
      institution: 'University of Benin, Benin City, Edo State',
      period: 'Aug 2015 – Aug 2019'
    },
    {
      id: 2,
      degree: 'Project Management with ClickUp',
      institution: 'Coursera',
      period: 'Certificate'
    },
    {
      id: 3,
      degree: 'Virtual Assistance',
      institution: 'Remote Trybe',
      period: 'Certificate'
    }
  ];

  const certifications = [
    {
      name: 'Inbound Certified — HubSpot Academy',
      image: hubspotInboundCertified,
      href: 'https://app-eu1.hubspot.com/academy/achievements/pn5nmg4n/en/1/aminu-momodu/inbound'
    },
    {
      name: 'Budgeting and Forecasting — CFI',
      image: budgetingAndForecasting,
      href: 'https://credentials.corporatefinanceinstitute.com/1a0b3eeb-c0a3-434d-b7c0-140bd9e23618#acc.2DnyWP4v'
    },
    {
      name: 'Financial Analysis Fundamentals — CFI',
      image: financialAnalysis,
      href: 'https://credentials.corporatefinanceinstitute.com/5c8b1c36-8942-4c1f-92e6-47e97df2c5c0#acc.4oTyDJbs'
    },
    {
      name: 'Excel Fundamentals — Formulas for Finance — CFI',
      image: excelFundamentals,
      href: 'https://credentials.corporatefinanceinstitute.com/ffbf4276-0785-4515-b5da-c1fcf4e286d2#acc.KoOFka6Z'
    },
    {
      name: 'Accounting Fundamentals — CFI',
      image: accountingFundamentals,
      href: 'https://credentials.corporatefinanceinstitute.com/f7c8caf3-67dd-432c-be4f-e3bb341cb906#acc.q3huG8bB'
    },
    {
      name: 'Professional Ethics — CFI',
      image: professionalEthics,
      href: 'https://credentials.corporatefinanceinstitute.com/9bf9bce5-1c53-4d3a-9894-de8a5f785feb#acc.PMnXb8dz'
    },
    {
      name: 'AI Automation Certified — Loubby AI',
      image: loubbyAiAutomation,
      href: '#'
    },
    {
      name: 'Project Management Certified — ClickUp',
      image: clickupProjectManagement,
      href: '#'
    },
    {
      name: 'IBM Data Analyst Professional Certificate',
      image: null,
      href: '#'
    },
    {
      name: 'IBM Project Management Professional Certificate',
      image: null,
      href: '#'
    },
    {
      name: 'Microsoft Project Management Professional Certificate',
      image: null,
      href: '#'
    },
    {
      name: 'Google Project Management Professional Certificate',
      image: null,
      href: '#'
    }
  ];

  return (
    <section id="education" className="py-[100px] px-5 bg-gradient-to-br from-dark-surface to-dark-bg relative max-lg:py-20 max-md:py-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection animation="fadeRight" duration={600}>
          <div className="flex items-center gap-3 mb-[60px]">
            <span className="text-xl text-primary">✦</span>
            <h2 className="text-[1.3rem] text-white font-semibold tracking-[0.05em] m-0 max-md:text-[1.1rem]">Education</h2>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={100} duration={700}>
          <div className="max-w-[680px] flex flex-col border border-[#333333] rounded-lg overflow-hidden max-md:max-w-full transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(255,215,0,0.05)]">
            {educationItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`p-[35px] transition-all duration-300 bg-[rgba(10,10,10,0.5)] hover:bg-[rgba(255,215,0,0.05)] max-md:p-[25px] group cursor-default ${index !== educationItems.length - 1 ? 'border-b border-[#333333]' : ''}`}
              >
                <div className="flex justify-between items-start gap-5 max-md:flex-col max-md:gap-3">
                  <div className="flex-1">
                    <h3 className="text-[1.4rem] font-bold text-white m-0 mb-2 tracking-[0.01em] max-lg:text-[1.2rem] max-md:text-[1.1rem] group-hover:text-primary transition-colors duration-300">{item.degree}</h3>
                    <p className="text-[#a0a0a0] text-[0.95rem] m-0 font-medium max-md:text-[0.9rem]">{item.institution}</p>
                  </div>
                  <span className="bg-[rgba(255,215,0,0.15)] text-primary py-1.5 px-3.5 rounded font-bold text-[0.85rem] whitespace-nowrap tracking-[0.03em] shrink-0 max-md:self-start group-hover:bg-primary group-hover:text-black transition-all duration-300">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={200} duration={700}>
          <div className="mt-16 max-w-[1200px]">
            <h3 className="text-[1.3rem] text-white font-semibold tracking-[0.05em] mb-8">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {certifications
                .filter((_, index) => !isMobile || showAllCerts || index < 5)
                .map((cert) => (
                  <div
                    key={cert.name}
                    className="group block rounded-2xl border border-[#333333] bg-[rgba(10,10,10,0.5)] overflow-hidden transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(29,94,255,0.12)]"
                  >
                    <button
                      type="button"
                      onClick={() => cert.image && setSelectedCert(cert)}
                      className="block w-full text-left"
                      aria-label={`View image for ${cert.name}`}
                    >
                      {cert.image ? (
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="w-full h-[220px] object-cover border-b border-[#333333]"
                        />
                      ) : (
                        <div className="flex h-[220px] items-center justify-center border-b border-[#333333] bg-[linear-gradient(135deg,rgba(29,94,255,0.12),rgba(255,255,255,0.02))] px-5 text-center text-sm font-medium text-[#d9d9d9]">
                          Verification document pending
                        </div>
                      )}
                    </button>

                    <div className="flex items-center justify-between gap-4 px-4 py-4">
                      <span className="text-sm font-medium text-white leading-relaxed">{cert.name}</span>
                      <button
                        type="button"
                        onClick={() => cert.image && setSelectedCert(cert)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-black text-lg font-bold shrink-0 group-hover:translate-x-1 transition-transform duration-300"
                        aria-label={`View image for ${cert.name}`}
                      >
                        ↗
                      </button>
                    </div>

                    <div className="flex gap-2 border-t border-[#333333] p-3">
                      {cert.image && (
                        <button
                          type="button"
                          onClick={() => setSelectedCert(cert)}
                          className="flex-1 rounded-lg border border-primary bg-primary/10 px-3 py-2 text-xs font-semibold text-white transition hover:bg-primary hover:text-black"
                        >
                          View image
                        </button>
                      )}
                      {cert.href && cert.href !== '#' && (
                        <a
                          href={cert.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-lg border border-[#333333] bg-transparent px-3 py-2 text-center text-xs font-semibold text-[#d9d9d9] transition hover:border-primary hover:text-primary"
                        >
                          Verify
                        </a>
                      )}
                    </div>
                  </div>
                ))}
            </div>

            {certifications.length > 5 && (
              <div className="mt-6 flex justify-center md:hidden">
                <button
                  type="button"
                  onClick={() => setShowAllCerts(!showAllCerts)}
                  className="rounded-full border border-primary bg-primary/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary hover:text-black"
                >
                  {showAllCerts ? 'Show less certifications' : 'View more certifications'}
                </button>
              </div>
            )}
          </div>
        </AnimatedSection>

        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-[#333333] bg-[#0d0d0d] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-[#333333] px-4 py-3">
                <h4 className="text-base font-semibold text-white">{selectedCert.name}</h4>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="text-2xl text-[#d9d9d9] hover:text-primary"
                  aria-label="Close certificate preview"
                >
                  ×
                </button>
              </div>

              <div className="max-h-[70vh] overflow-auto bg-black p-4">
                {selectedCert.image ? (
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    className="mx-auto max-h-[70vh] w-auto rounded-xl object-contain"
                  />
                ) : (
                  <div className="flex min-h-[220px] items-center justify-center rounded-xl border border-dashed border-[#333333] text-center text-[#d9d9d9]">
                    Verification document pending
                  </div>
                )}
              </div>

              {selectedCert.href && selectedCert.href !== '#' && (
                <div className="flex justify-end border-t border-[#333333] p-4">
                  <a
                    href={selectedCert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#1247d8] hover:text-white"
                  >
                    Verify credential
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
