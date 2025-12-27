const Header = ({ onNavClick }) => {
  return (
    <header className="bg-[rgba(15,15,15,0.95)] border-b border-[#2a2a2a] py-6 sticky top-0 z-[100] backdrop-blur-[10px]">
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center max-md:flex-col max-md:gap-5">
        <div className="text-[1.3rem] font-bold tracking-[0.05em] flex items-center gap-2 text-white max-md:text-[1.1rem]">
          <span className="text-2xl">📋</span>
          <span className="font-bold">PortFoliyo</span>
        </div>
        <nav className="flex gap-[45px] max-md:gap-5">
          <a href="#home" className="text-primary text-[0.85rem] font-semibold tracking-[0.05em] uppercase transition-colors duration-300 hover:text-primary">HOME</a>
          <a href="#about" className="text-[#999999] text-[0.85rem] font-semibold tracking-[0.05em] uppercase transition-colors duration-300 hover:text-primary">ABOUT</a>
          <a href="#services" className="text-[#999999] text-[0.85rem] font-semibold tracking-[0.05em] uppercase transition-colors duration-300 hover:text-primary">SERVICES</a>
          <a href="#projects" className="text-[#999999] text-[0.85rem] font-semibold tracking-[0.05em] uppercase transition-colors duration-300 hover:text-primary">PROJECTS</a>
          <a href="#contact" className="text-[#999999] text-[0.85rem] font-semibold tracking-[0.05em] uppercase transition-colors duration-300 hover:text-primary">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
