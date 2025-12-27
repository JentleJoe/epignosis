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
    <section className="py-[100px] px-5 bg-black relative max-lg:py-20 max-md:py-[60px]">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto mb-20 flex items-center gap-3">
        <span className="text-xl text-primary">✦</span>
        <h2 className="text-[1.3rem] text-white font-semibold tracking-[0.05em] m-0 max-md:text-[1.1rem]">Experience</h2>
        <div className="flex-1 h-px ml-5 bg-gradient-to-r from-[#00d9ff] to-transparent"></div>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[60px] items-start max-lg:grid-cols-1">
        {/* Left - Experience List */}
        <div>
          <div className="flex flex-col">
            {experiences.map((exp) => (
              <div 
                key={exp.id} 
                className="border-b border-[#333333] py-10 transition-all duration-300 hover:bg-[rgba(255,215,0,0.03)] hover:pl-5 hover:pr-5 hover:-ml-5 hover:-mr-5 max-md:py-[30px]"
              >
                <div className="flex justify-between items-start gap-5 mb-2 max-md:flex-col max-md:gap-[10px]">
                  <h3 className="text-2xl font-bold text-white m-0 max-lg:text-[1.3rem] max-md:text-[1.2rem]">{exp.title}</h3>
                  <span className="bg-[rgba(255,215,0,0.15)] text-primary py-1.5 px-3.5 rounded font-bold text-[0.85rem] whitespace-nowrap tracking-[0.03em]">{exp.period}</span>
                </div>
                <p className="text-[#a0a0a0] text-[0.95rem] m-0 mb-[15px] font-medium">At {exp.company}</p>
                <p className="text-[#808080] text-[0.95rem] leading-[1.7] m-0">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Contact Section */}
        <div>
          <div className="bg-[rgba(20,20,20,0.5)] border border-[#333333] rounded-xl py-10 px-[30px]">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-xl text-primary">✦</span>
              <h2 className="text-[1.3rem] text-white font-semibold tracking-[0.05em] m-0 max-md:text-[1.1rem]">Contact</h2>
            </div>

            <div className="flex flex-col gap-[30px]">
              <div className="grid grid-cols-[120px_1fr] gap-5 items-center pb-[30px] border-b border-[#333333] max-md:grid-cols-1 max-md:gap-2">
                <span className="text-[#808080] text-[0.9rem] font-medium capitalize max-md:text-[0.85rem]">Phone</span>
                <a href="tel:+00399484948944" className="text-white text-base font-semibold tracking-[0.02em] no-underline transition-colors duration-300 hover:text-primary max-md:text-[0.95rem]">+0039 9484 94894</a>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-5 items-center pb-[30px] border-b border-[#333333] max-md:grid-cols-1 max-md:gap-2">
                <span className="text-[#808080] text-[0.9rem] font-medium capitalize max-md:text-[0.85rem]">Email</span>
                <a href="mailto:luminUI@gmail.com" className="text-white text-base font-semibold tracking-[0.02em] no-underline transition-colors duration-300 hover:text-primary max-md:text-[0.95rem]">luminUI@gmail.com</a>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-5 items-center pb-[30px] border-b border-[#333333] max-md:grid-cols-1 max-md:gap-2">
                <span className="text-[#808080] text-[0.9rem] font-medium capitalize max-md:text-[0.85rem]">Website</span>
                <a href="https://www.luminui.com" className="text-white text-base font-semibold tracking-[0.02em] no-underline transition-colors duration-300 hover:text-primary max-md:text-[0.95rem]" target="_blank" rel="noopener noreferrer">www.luminui.com</a>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-5 items-center max-md:grid-cols-1 max-md:gap-2">
                <span className="text-[#808080] text-[0.9rem] font-medium capitalize max-md:text-[0.85rem]">Address</span>
                <span className="text-white text-base font-semibold tracking-[0.02em] max-md:text-[0.95rem]">19 Southern Way, UK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
