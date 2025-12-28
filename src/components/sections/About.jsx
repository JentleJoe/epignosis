import Button from '../common/Button';

const About = () => {
  const socialLinks = [
    { id: 1, icon: '𝑓', name: 'Facebook', url: '#' },
    { id: 2, icon: '📷', name: 'Instagram', url: '#' },
    { id: 3, icon: 'in', name: 'LinkedIn', url: '#' },
    { id: 4, icon: '𝕏', name: 'X', url: '#' }
  ];

  return (
    <section id="about" className="py-[100px] px-5 bg-gradient-to-br from-dark-surface to-dark-bg relative max-lg:py-20 max-md:py-[60px]">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto mb-[60px] flex items-center gap-3">
        <span className="text-xl text-primary">✦</span>
        <h2 className="text-[1.3rem] text-white font-semibold tracking-[0.05em]">About Me</h2>
        <div className="flex-1 h-px ml-5 bg-gradient-to-r from-[#00d9ff] to-transparent"></div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-20 items-center mb-20 max-lg:grid-cols-1 max-lg:gap-[60px]">
        <div className="flex flex-col gap-[30px]">
          <h3 className="text-[2.8rem] font-bold leading-[1.2] text-white capitalize max-lg:text-[2.2rem] max-md:text-[1.8rem]">
            Passionate & lead<br />
            Product Designer
          </h3>
          <p className="text-[1.05rem] text-[#a0a0a0] leading-[1.85] max-w-[520px]">
            I'm David Michel, a UI/UX designer passionate about crafting intuitive, user-centered experiences. I've completed 100+ projects turning complex ideas into seamless interfaces.
          </p>
          <Button variant="primary" className="w-fit after:content-['↓'] after:ml-2 after:transition-transform after:duration-300 hover:after:translate-y-[3px]">
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center">
          <div className="bg-[rgba(20,20,20,0.8)] border border-[#333333] rounded-2xl p-0 w-full max-w-[380px] overflow-hidden backdrop-blur-[10px]">
            <div className="relative w-full aspect-square flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
              <div className="w-full h-full bg-gradient-to-br from-[rgba(255,215,0,0.08)] to-[rgba(0,217,255,0.08)] flex items-center justify-center border-b border-[#333333] text-[#666666] font-semibold relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:pointer-events-none" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 215, 0, 0.05) 25%, rgba(255, 215, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 215, 0, 0.05) 75%, rgba(255, 215, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 215, 0, 0.05) 25%, rgba(255, 215, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 215, 0, 0.05) 75%, rgba(255, 215, 0, 0.05) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}>
                <span>Profile Image</span>
              </div>
            </div>
            <h4 className="text-[1.4rem] font-bold text-white text-center pt-[25px] px-5 pb-2 m-0">David Michel</h4>
            <p className="text-[0.95rem] text-[#808080] text-center px-5 pb-[25px] m-0 font-medium">Visualizer & Design Director</p>
            <div className="flex justify-center gap-5 py-5 border-t border-[#333333] bg-[rgba(10,10,10,0.5)]">
              {socialLinks.map(link => (
                <a 
                  key={link.id} 
                  href={link.url} 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent text-white text-[1.1rem] font-semibold transition-all duration-300 border border-[#333333] hover:bg-primary hover:text-black hover:border-primary hover:-translate-y-[3px]"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
