import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const secondaryLinks = [
    { name: 'Resume Download', href: '#' },
    { name: 'Instructions', href: '#' },
    { name: 'Style Guide', href: '#' },
    { name: 'Licenses', href: '#' }
  ];

  return (
    <footer className="bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-5 py-[60px] flex justify-between items-start gap-10 max-lg:flex-col">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-10 max-md:gap-5">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className={`text-[0.95rem] font-medium transition-colors duration-300 hover:text-primary ${link.active ? 'text-primary' : 'text-[#a0a0a0]'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-10 max-md:gap-5">
            {secondaryLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-[#a0a0a0] text-[0.95rem] font-medium transition-colors duration-300 hover:text-primary">
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-[15px]">
          <a href="#" className="w-[45px] h-[45px] rounded-full bg-[#1a1a1a] flex items-center justify-center text-white transition-all duration-300 hover:bg-primary hover:text-black" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="w-[45px] h-[45px] rounded-full bg-[#1a1a1a] flex items-center justify-center text-white transition-all duration-300 hover:bg-primary hover:text-black" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" className="w-[45px] h-[45px] rounded-full bg-[#1a1a1a] flex items-center justify-center text-white transition-all duration-300 hover:bg-primary hover:text-black" aria-label="X">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="border-t border-[#1a1a1a] relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[rgba(100,80,0,0.4)] before:to-transparent">
        <div className="max-w-[1400px] mx-auto px-5 py-[30px] flex justify-between items-center max-md:flex-col max-md:gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-[#f0c000]"></div>
            <span className="text-xl font-semibold text-white">PortFoliyo</span>
          </div>
          <div className="text-[#666666] text-[0.85rem] text-center leading-relaxed">
            ©2025 Usergency All<br />rights reserved.
          </div>
          <div className="flex flex-col items-end gap-1 max-md:items-center">
            <span className="text-white text-[0.9rem] font-medium">{formatTime(currentTime)}</span>
            <span className="text-[#666666] text-[0.85rem]">Dubai: Sunny, 42.3°C</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
