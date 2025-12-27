import { useState } from 'react';
import Button from '../common/Button';

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
    if (expandedId !== id) {
      setExpandedId(id);
    }
  };

  const expandedService = services.find(s => s.id === expandedId);

  return (
    <section className="py-[100px] px-5 bg-black relative max-lg:py-20 max-md:py-[60px]">
      {/* Header Section */}
      <div className="max-w-[1200px] mx-auto mb-20 grid grid-cols-2 gap-[100px] items-start max-lg:grid-cols-1 max-lg:gap-[50px] max-lg:mb-[60px] max-md:gap-10 max-md:mb-[50px]">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <span className="text-xl text-primary">✦</span>
            <h2 className="text-[1.3rem] text-white font-semibold tracking-[0.05em] m-0 max-md:text-[1.1rem]">My Services</h2>
          </div>
          <Button variant="primary" className="w-fit after:content-['→'] after:ml-2 after:transition-transform after:duration-300 hover:after:translate-x-[3px]">
            Start a Project Now
          </Button>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-[2.6rem] font-bold leading-[1.25] text-white m-0 tracking-[0.01em] max-lg:text-[2rem] max-md:text-2xl">Experience the Impact of User-Centered Design</h2>
          <p className="text-base text-[#999999] leading-[1.8] m-0 max-md:text-[0.95rem]">
            Experience the impact of user-centered design. I craft intuitive and engaging digital solutions that put users first and elevate brands.
          </p>
        </div>
      </div>

      {/* Services Container */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[100px] items-start max-lg:grid-cols-1 max-lg:gap-[50px] max-md:gap-10">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`w-full rounded-xl p-[35px] cursor-pointer transition-all duration-300 relative overflow-hidden border max-md:p-[25px] ${
                  expandedId === service.id 
                    ? 'bg-gradient-to-br from-[rgba(255,215,0,0.1)] to-[rgba(100,100,0,0.1)] border-primary' 
                    : 'bg-[rgba(20,20,20,0.8)] border-[#333333] hover:border-primary hover:bg-[rgba(255,215,0,0.05)]'
                }`}
                onClick={() => toggleService(service.id)}
              >
                <div className="flex justify-between items-start gap-5">
                  <div className="flex-1">
                    <p className="text-[#a0a0a0] text-[0.9rem] m-0 mb-[10px] font-medium tracking-[0.02em]">{service.subtitle}</p>
                    <h3 className="text-[1.8rem] font-bold text-white m-0 tracking-[0.01em] max-md:text-[1.4rem]">{service.title}</h3>
                  </div>
                  <div className={`text-2xl shrink-0 transition-all duration-300 ${
                    expandedId === service.id ? 'text-primary rotate-90' : 'text-[#666666]'
                  }`}>→</div>
                </div>

                {expandedId === service.id && (
                  <div className="mt-[25px] pt-[25px] border-t border-[rgba(255,215,0,0.2)] animate-slideDown">
                    <p className="text-[#a0a0a0] text-[0.95rem] leading-[1.7] m-0 mb-5">{service.fullDescription}</p>
                    <div className="grid grid-cols-2 gap-[15px] max-md:grid-cols-1">
                      {service.details.map((detail, index) => (
                        <div key={index} className="flex items-center gap-[10px] text-primary text-[0.9rem]">
                          <span className="font-bold text-[1.2rem] shrink-0">•</span>
                          <span className="text-primary font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col min-h-full">
          {expandedService ? (
            <div className="relative flex flex-col h-full">
              <div className="relative flex-1 flex items-center justify-center">
                <div className="w-full h-[350px] bg-gradient-to-br from-[rgba(255,215,0,0.1)] to-[rgba(100,100,0,0.1)] border border-[#333333] rounded-2xl flex items-center justify-center text-[#808080] font-semibold text-[1.1rem] relative max-md:h-[280px]">
                  <span>Service Image</span>
                </div>
              </div>
              <button 
                className="absolute bottom-[30px] right-[30px] w-[50px] h-[50px] rounded-full bg-primary border-none text-black text-2xl font-bold cursor-pointer flex items-center justify-center transition-all duration-300 shadow-[0_10px_30px_rgba(255,215,0,0.2)] hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(255,215,0,0.3)] max-md:w-[45px] max-md:h-[45px] max-md:bottom-5 max-md:right-5 max-md:text-xl"
                onClick={() => toggleService(expandedId)}
              >
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
