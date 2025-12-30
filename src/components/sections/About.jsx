import Button from '../common/Button';
import AnimatedSection from '../common/AnimatedSection';
import CounterCard from '../common/CounterCard';

const About = () => {
  const socialLinks = [
    { id: 1, icon: '𝑓', name: 'Facebook', url: '#' },
    { id: 2, icon: '📷', name: 'Instagram', url: '#' },
    { id: 3, icon: 'in', name: 'LinkedIn', url: '#' },
    { id: 4, icon: '𝕏', name: 'X', url: '#' }
  ];

  const stats = [
    { end: 16, suffix: '+', label: 'Years Experience' },
    { end: 100, suffix: '+', label: 'Projects Completed' },
    { end: 50, suffix: '+', label: 'Happy Clients' },
    { end: 15, suffix: '+', label: 'Awards Won' }
  ];

  return (
    <section id="about" className="py-[100px] px-5 bg-gradient-to-br from-dark-surface to-dark-bg relative max-lg:py-20 max-md:py-[60px]">
      {/* Header */}
      <AnimatedSection animation="fadeRight" duration={600}>
        <div className="max-w-[1200px] mx-auto mb-[60px] flex items-center gap-3">
          <span className="text-xl text-primary">✦</span>
          <h2 className="text-[1.3rem] text-white font-semibold tracking-[0.05em]">About Me</h2>
          <div className="flex-1 h-px ml-5 bg-gradient-to-r from-[#00d9ff] to-transparent"></div>
        </div>
      </AnimatedSection>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-20 items-center mb-20 max-lg:grid-cols-1 max-lg:gap-[60px]">
        <AnimatedSection animation="fadeRight" delay={100} duration={700}>
          <div className="flex flex-col gap-[30px]">
            <h3 className="text-[2.8rem] font-bold leading-[1.2] text-white capitalize max-lg:text-[2.2rem] max-md:text-[1.8rem]">
              Passionate & lead<br />
              Product Designer
            </h3>
            <p className="text-[1.05rem] text-[#a0a0a0] leading-[1.85] max-w-[520px]">
              I'm David Michel, a UI/UX designer passionate about crafting intuitive, user-centered experiences. I've completed 100+ projects turning complex ideas into seamless interfaces.
            </p>
            <Button variant="primary" className="w-fit after:content-['↓'] after:ml-2 after:transition-transform after:duration-300 hover:after:translate-y-[3px] hover:scale-105 transition-transform duration-300">
              Download Resume
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeLeft" delay={200} duration={700}>
          <div className="flex justify-center">
            <div className="bg-[rgba(20,20,20,0.8)] border border-[#333333] rounded-2xl p-0 w-full max-w-[380px] overflow-hidden backdrop-blur-[10px] transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.1)] group">
              <div className="relative w-full aspect-square flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
                <div className="w-full h-full bg-gradient-to-br from-[rgba(255,215,0,0.08)] to-[rgba(0,217,255,0.08)] flex items-center justify-center border-b border-[#333333] text-[#666666] font-semibold relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:pointer-events-none transition-all duration-500 group-hover:from-[rgba(255,215,0,0.12)] group-hover:to-[rgba(0,217,255,0.12)]" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 215, 0, 0.05) 25%, rgba(255, 215, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 215, 0, 0.05) 75%, rgba(255, 215, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 215, 0, 0.05) 25%, rgba(255, 215, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 215, 0, 0.05) 75%, rgba(255, 215, 0, 0.05) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}>
                  <span className="group-hover:scale-110 transition-transform duration-300">Profile Image</span>
                </div>
              </div>
              <h4 className="text-[1.4rem] font-bold text-white text-center pt-[25px] px-5 pb-2 m-0 group-hover:text-primary transition-colors duration-300">David Michel</h4>
              <p className="text-[0.95rem] text-[#808080] text-center px-5 pb-[25px] m-0 font-medium">Visualizer & Design Director</p>
              <div className="flex justify-center gap-5 py-5 border-t border-[#333333] bg-[rgba(10,10,10,0.5)]">
                {socialLinks.map(link => (
                  <a 
                    key={link.id} 
                    href={link.url} 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent text-white text-[1.1rem] font-semibold transition-all duration-300 border border-[#333333] hover:bg-primary hover:text-black hover:border-primary hover:-translate-y-[3px] hover:scale-110"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Stats Counter Section */}
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection animation="fadeUp" delay={300} duration={700}>
          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {stats.map((stat, index) => (
              <CounterCard
                key={index}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                duration={2000 + index * 200}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
