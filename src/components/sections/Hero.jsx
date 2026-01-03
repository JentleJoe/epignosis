import { useState, useEffect } from 'react';
import Button from '../common/Button';
import TypeWriter from '../common/TypeWriter';
import AnimatedSection from '../common/AnimatedSection';

const Hero = () => {
  const skills = ['EXECUTIVE VIRTUAL ASSISTANT', 'AUTOMATION SPECIALIST', 'CLIENT OPERATIONS'];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="py-[100px] px-5 pb-[100px] bg-[#0a0a0a] relative overflow-hidden min-h-screen max-lg:py-20 max-lg:pb-[80px] max-lg:min-h-auto max-md:py-[60px] max-md:pb-[60px]">
      {/* Background glow with parallax effect */}
      <div 
        className="absolute top-[30%] right-[-5%] w-[600px] h-[600px] pointer-events-none blur-[80px] bg-[radial-gradient(ellipse,rgba(80,100,60,0.3)_0%,rgba(60,80,40,0.15)_40%,transparent_70%)] transition-transform duration-300"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      ></div>
      
      {/* Animated decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary/50 rounded-full animate-bounce-subtle"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 border border-primary/30 rounded-full animate-spin-slow"></div>
      
      <div className="max-w-[1200px] mx-auto relative z-[1]">
        {/* Large Name */}
        <AnimatedSection animation="fadeDown" duration={800}>
          <h1 className="text-[9.5rem] font-extrabold leading-none mb-[30px] tracking-[0.02em] text-white uppercase text-center flex justify-center gap-[60px] max-2xl:text-[8rem] max-xl:text-[7rem] max-xl:gap-10 max-lg:text-[5rem] max-lg:gap-[30px] max-md:text-[3rem] max-md:flex-col max-md:gap-2.5">
            <span className="hover:text-primary transition-colors duration-300 cursor-default">AMINU</span>
            <span className="hover:text-primary transition-colors duration-300 cursor-default">MOMODU</span>
          </h1>
        </AnimatedSection>
        
        {/* Skills Row with staggered animation */}
        <div className="flex justify-center gap-20 mb-[60px] flex-wrap max-xl:gap-[50px] max-lg:gap-[30px] max-lg:mb-10 max-md:gap-5">
          {skills.map((skill, index) => (
            <AnimatedSection key={index} animation="fadeUp" delay={index * 100} duration={600}>
              <span className="text-base font-semibold text-[#888888] tracking-[0.08em] uppercase transition-all duration-300 hover:text-primary hover:scale-110 cursor-default max-lg:text-[0.9rem] max-md:text-[0.8rem]">#{skill}</span>
            </AnimatedSection>
          ))}
        </div>

        {/* Hero Content - Image and Text */}
        <div className="grid grid-cols-[1fr_1.2fr] gap-[60px] items-end max-lg:grid-cols-1 max-lg:gap-10">
          <AnimatedSection animation="fadeRight" delay={200} duration={800}>
            <div className="relative max-lg:flex max-lg:justify-center">
              <div className="relative inline-block group">
                {/* Dotted background */}
                <div className="absolute bottom-0 left-0 w-[300px] h-[280px] opacity-80 z-0 max-md:w-[200px] max-md:h-[200px] transition-opacity duration-300 group-hover:opacity-100" style={{ backgroundImage: 'radial-gradient(circle, #333333 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
                <div className="w-[380px] h-[450px] flex items-center justify-center text-[#666666] text-base font-semibold relative z-[1] max-md:w-[280px] max-md:h-[340px] transition-transform duration-500 group-hover:scale-[1.02]" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.8) 100%)' }}>
                  {/* Image removed */}
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeLeft" delay={400} duration={800}>
            <div className="flex flex-col justify-end pb-10">
              <p className="text-[1.15rem] text-[#999999] mb-4 leading-[1.8] max-w-[600px] max-md:text-base max-md:max-w-full">
                Welcome to my portfolio! I'm Aminu Momodu, an operations-first partner who keeps founders organized and moving.
              </p>
              <p className="text-[1.15rem] text-primary mb-10 leading-[1.8] max-w-[600px] max-md:text-base max-md:max-w-full h-8">
                <TypeWriter 
                  words={['Executive Virtual Assistant', 'Automation Specialist']}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseTime={1500}
                />
              </p>
              <p className="text-[1.15rem] text-[#999999] mb-10 leading-[1.8] max-w-[600px] max-md:text-base max-md:max-w-full">
                Based in Nigeria, I streamline calendars and inboxes, coordinate stakeholders, and build automations that remove manual work.
              </p>
              <Button variant="primary" className="inline-flex items-center gap-2.5 w-fit py-4 px-7 text-xl font-medium rounded-xl max-md:text-base max-md:py-3.5 max-md:px-[22px] group hover:scale-105 transition-transform duration-300">
                Start a Project Now
                <svg className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Scroll indicator */}
        <AnimatedSection animation="fadeUp" delay={1000} duration={600}>
          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center gap-2 animate-bounce-subtle cursor-pointer group" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="text-[#666666] text-sm tracking-wider group-hover:text-primary transition-colors">SCROLL DOWN</span>
              <svg className="w-6 h-6 text-[#666666] group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
