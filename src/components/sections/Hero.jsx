import Button from '../common/Button';

const Hero = () => {
  const skills = ['BRANDING', 'UI/UX DESIGN', 'DEVELOPMENT', 'WEB DESIGN'];

  return (
    <section id="home" className="py-[100px] px-5 pb-[100px] bg-[#0a0a0a] relative overflow-hidden min-h-screen max-lg:py-20 max-lg:pb-[80px] max-lg:min-h-auto max-md:py-[60px] max-md:pb-[60px]">
      {/* Background glow */}
      <div className="absolute top-[30%] right-[-5%] w-[600px] h-[600px] pointer-events-none blur-[80px] bg-[radial-gradient(ellipse,rgba(80,100,60,0.3)_0%,rgba(60,80,40,0.15)_40%,transparent_70%)]"></div>
      
      <div className="max-w-[1200px] mx-auto relative z-[1]">
        {/* Large Name */}
        <h1 className="text-[10rem] font-extrabold leading-none mb-[30px] tracking-[0.02em] text-white uppercase text-center flex justify-center gap-[60px] max-xl:text-[7rem] max-xl:gap-10 max-lg:text-[5rem] max-lg:gap-[30px] max-md:text-[3rem] max-md:flex-col max-md:gap-2.5">
          DAVID <span>MICHEL</span>
        </h1>
        
        {/* Skills Row */}
        <div className="flex justify-center gap-20 mb-[60px] flex-wrap max-xl:gap-[50px] max-lg:gap-[30px] max-lg:mb-10 max-md:gap-5">
          {skills.map((skill, index) => (
            <span key={index} className="text-base font-semibold text-[#888888] tracking-[0.08em] uppercase transition-colors duration-300 hover:text-primary max-lg:text-[0.9rem] max-md:text-[0.8rem]">#{skill}</span>
          ))}
        </div>

        {/* Hero Content - Image and Text */}
        <div className="grid grid-cols-[1fr_1.2fr] gap-[60px] items-end max-lg:grid-cols-1 max-lg:gap-10">
          <div className="relative max-lg:flex max-lg:justify-center">
            <div className="relative inline-block">
              {/* Dotted background */}
              <div className="absolute bottom-0 left-0 w-[300px] h-[280px] opacity-80 z-0 max-md:w-[200px] max-md:h-[200px]" style={{ backgroundImage: 'radial-gradient(circle, #333333 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
              <div className="w-[380px] h-[450px] flex items-center justify-center text-[#666666] text-base font-semibold relative z-[1] max-md:w-[280px] max-md:h-[340px]" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.8) 100%)' }}>
                <span>Profile Photo</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end pb-10">
            <p className="text-[1.15rem] text-[#999999] mb-10 leading-[1.8] max-w-[600px] max-md:text-base max-md:max-w-full">
              Welcome to my portfolio! I'm David Michel, a web designer & developer from the US with 16+ years of experience. I craft visually stunning, functional websites that deliver exceptional user experiences.
            </p>
            <Button variant="primary" className="inline-flex items-center gap-2.5 w-fit py-4 px-7 text-xl font-medium rounded-xl max-md:text-base max-md:py-3.5 max-md:px-[22px]">
              Start a Project Now
              <svg className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
