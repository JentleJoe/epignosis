import Button from '../common/Button';

const Contact = () => {
  return (
    <section className="py-[120px] px-5 bg-[#0a0a0a] relative overflow-hidden max-lg:py-20 max-md:py-[60px]" id="contact">
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none blur-[60px] max-md:w-[400px] max-md:h-[300px] max-md:left-[20%]" style={{ background: 'radial-gradient(ellipse, rgba(80, 60, 0, 0.4) 0%, rgba(50, 40, 0, 0.2) 30%, rgba(30, 25, 0, 0.1) 50%, transparent 70%)' }}></div>
      
      <div className="max-w-[1200px] mx-auto flex justify-between items-end gap-[60px] relative z-[1] max-lg:flex-col max-lg:items-start max-lg:gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="text-[1.2rem] text-primary">✦</span>
            <span className="text-base text-white font-normal tracking-[0.02em]">Got a project?</span>
          </div>
          <h2 className="text-[3.8rem] font-medium leading-[1.15] m-0 text-white tracking-[0.02em] max-lg:text-[2.8rem] max-md:text-[2rem]">Surround yourself<br />with an expert</h2>
        </div>
        <div className="shrink-0 pb-[10px] max-lg:pb-0">
          <Button variant="primary" className="whitespace-nowrap py-3.5 px-6 text-[1.25rem] font-medium rounded-xl inline-flex items-center gap-[10px] group">
            Start a Project Now
            <svg className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
