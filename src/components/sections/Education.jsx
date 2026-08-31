import AnimatedSection from '../common/AnimatedSection';

const Education = () => {
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
    'AI Automation Certified — Loubby AI',
    'Project Management Certified — ClickUp',
    'IBM Data Analyst Professional Certificate',
    'IBM Project Management Professional Certificate',
    'Microsoft Project Management Professional Certificate',
    'Google Project Management Professional Certificate',
    'Inbound Certified — HubSpot Academy',
    'Budgeting and Forecasting — CFI',
    'Financial Analysis Fundamentals — CFI',
    'Excel Fundamentals — Formulas for Finance — CFI',
    'Accounting Fundamentals — CFI',
    'Professional Ethics — CFI'
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
          <div className="mt-16 max-w-[680px]">
            <h3 className="text-[1.3rem] text-white font-semibold tracking-[0.05em] mb-5">Certifications</h3>
            <div className="grid gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3 rounded-lg border border-[#333333] bg-[rgba(10,10,10,0.5)] px-4 py-3 text-[#d9d9d9]">
                  <span className="text-primary text-lg">✦</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Education;
