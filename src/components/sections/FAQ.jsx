import { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-[100px] px-5 bg-gradient-to-br from-dark-surface to-dark-bg relative max-lg:py-20 max-md:py-[60px]" id="faq">
      <div className="max-w-[1400px] mx-auto grid grid-cols-[1fr_1.5fr] gap-[100px] items-start max-lg:grid-cols-1 max-lg:gap-[60px] max-md:gap-10">
        {/* Left - Header */}
        <div className="flex flex-col gap-[30px]">
          <div className="flex items-center gap-3">
            <span className="text-xl text-primary">✦</span>
            <span className="text-base text-[#a0a0a0] font-medium tracking-[0.05em] uppercase">Support</span>
          </div>
          <h2 className="text-5xl font-bold text-white m-0 leading-[1.2] tracking-[0.01em] max-lg:text-[2.5rem] max-md:text-[2rem]">FAQS</h2>
          <p className="text-base text-[#999999] leading-[1.8] m-0 max-w-[350px]">Not sure yet? Have some questions? We listed the ones most frequently asked.</p>
        </div>

        {/* Right - FAQ Items */}
        <div className="flex flex-col">
          <div className="flex flex-col w-full">
            {portfolioData.faqs.map((faq, index) => (
              <div key={faq.id}>
                <div 
                  className={`border-b border-[#333333] transition-all duration-300 py-[30px] cursor-pointer hover:bg-[rgba(255,255,255,0.02)] ${
                    openId === faq.id ? 'bg-[rgba(100,100,0,0.2)] rounded-xl py-[30px] px-[30px] -mx-[30px] max-md:py-[25px] max-md:px-5 max-md:-mx-5' : ''
                  }`}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className={`w-full p-0 flex justify-between items-center gap-5 bg-transparent border-none text-[1.2rem] font-medium text-left transition-all duration-300 tracking-[0.01em] leading-[1.5] max-md:text-base ${
                    openId === faq.id ? 'text-primary' : 'text-white hover:text-primary'
                  }`}>
                    <span className="flex-1">{faq.question}</span>
                    <span className={`flex items-center justify-center w-7 h-7 text-[1.6rem] leading-none transition-all duration-300 shrink-0 ${
                      openId === faq.id ? 'text-primary' : 'text-white'
                    }`}>{openId === faq.id ? '−' : '+'}</span>
                  </div>
                  {openId === faq.id && (
                    <div className="max-h-[500px] overflow-hidden animate-slideDown mt-5">
                      <p className="p-0 text-[#a0a0a0] leading-[1.8] text-[0.95rem] m-0 max-md:text-[0.9rem]">{faq.answer}</p>
                    </div>
                  )}
                </div>
                {index === 2 && <div className="h-px bg-[#333333] m-0 w-full"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
