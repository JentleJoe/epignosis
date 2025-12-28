const Education = () => {
  const educationItems = [
    {
      id: 1,
      degree: 'BSC in CSE',
      institution: 'London University',
      period: '2023 - Present'
    },
    {
      id: 2,
      degree: 'Diploma in Web Design',
      institution: 'Oxford College',
      period: '2022 - 2023'
    },
    {
      id: 3,
      degree: 'UI/UX Certificate',
      institution: 'Google Design',
      period: '2020 - 2021'
    },
    {
      id: 4,
      degree: 'Branding Course',
      institution: 'Cambridge Institute',
      period: '2018 - 2019'
    }
  ];

  return (
    <section id="education" className="py-[100px] px-5 bg-gradient-to-br from-dark-surface to-dark-bg relative max-lg:py-20 max-md:py-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-[60px]">
          <span className="text-xl text-primary">✦</span>
          <h2 className="text-[1.3rem] text-white font-semibold tracking-[0.05em] m-0 max-md:text-[1.1rem]">Education</h2>
        </div>

        <div className="max-w-[680px] flex flex-col border border-[#333333] rounded-lg overflow-hidden max-md:max-w-full">
          {educationItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`p-[35px] transition-all duration-300 bg-[rgba(10,10,10,0.5)] hover:bg-[rgba(255,215,0,0.05)] max-md:p-[25px] ${index !== educationItems.length - 1 ? 'border-b border-[#333333]' : ''}`}
            >
              <div className="flex justify-between items-start gap-5 max-md:flex-col max-md:gap-3">
                <div className="flex-1">
                  <h3 className="text-[1.4rem] font-bold text-white m-0 mb-2 tracking-[0.01em] max-lg:text-[1.2rem] max-md:text-[1.1rem]">{item.degree}</h3>
                  <p className="text-[#a0a0a0] text-[0.95rem] m-0 font-medium max-md:text-[0.9rem]">{item.institution}</p>
                </div>
                <span className="bg-[rgba(255,215,0,0.15)] text-primary py-1.5 px-3.5 rounded font-bold text-[0.85rem] whitespace-nowrap tracking-[0.03em] shrink-0 max-md:self-start">{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
