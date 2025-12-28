import { useState } from 'react';

const Header = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: '01', href: '#home', label: 'HOME', isActive: true },
    { id: '02', href: '#about', label: 'ABOUT', isActive: false },
    { id: '03', href: '#services', label: 'SERVICES', isActive: false },
    { id: '04', href: '#projects', label: 'PROJECTS', isActive: false },
    { id: '05', href: '#contact', label: 'CONTACT', isActive: false },
  ];

  return (
    <>
      <header className="bg-[#0f0f0f] border-b border-[#2a2a2a] py-6 sticky top-0 z-[100]">
        <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">
          <div className="text-[1.3rem] font-bold tracking-[0.05em] flex items-center gap-2 text-white max-md:text-[1.1rem]">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden">
              <span className="text-black text-sm font-bold">👤</span>
            </div>
            <span className="font-bold">PortFoliyo</span>
          </div>

          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMenu}
            className="hidden max-lg:flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Desktop Navigation */}
          <nav className="flex gap-[45px] max-lg:hidden">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href} 
                className={`text-[0.85rem] font-semibold tracking-[0.05em] uppercase transition-colors duration-300 hover:text-primary ${link.isActive ? 'text-primary' : 'text-[#999999]'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay - Click to close */}
      <div 
        className={`fixed inset-0 z-[150] lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        onClick={closeMenu}
      />

      {/* Mobile Menu - Slide-in Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[300px] z-[200] lg:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ backgroundColor: '#000000' }}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between px-5 py-6 border-b border-[#2a2a2a]" style={{ backgroundColor: '#0a0a0a' }}>
          <span className="font-bold text-white text-lg">Menu</span>
          <button 
            onClick={closeMenu}
            className="w-10 h-10 flex items-center justify-center text-white text-2xl hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        
        {/* Menu Links */}
        <nav className="px-5 py-6" style={{ backgroundColor: '#000000' }}>
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              onClick={closeMenu} 
              className={`block text-base font-semibold tracking-[0.05em] uppercase transition-all duration-300 hover:text-primary hover:pl-2 py-4 border-b border-[#1a1a1a] ${link.isActive ? 'text-primary' : 'text-white'}`}
            >
              <span className="text-primary/50 mr-3">{link.id}</span>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-[#1a1a1a]" style={{ backgroundColor: '#000000' }}>
          <p className="text-[#666] text-sm text-center">© 2025 PortFoliyo</p>
        </div>
      </div>
    </>
  );
};

export default Header;
