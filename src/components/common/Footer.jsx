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
    { name: 'Home', href: '#home', active: true },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const secondaryLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aminuassists/' },
    { name: 'Email', href: 'mailto:aminuassists@gmail.com' },
    { name: 'WhatsApp', href: 'https://wa.me/2349057809092' },
    { name: 'Lagos, Nigeria', href: 'https://maps.google.com/?q=Lagos, Nigeria' }
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
          <a href="https://www.linkedin.com/in/aminuassists/" target="_blank" rel="noreferrer" className="w-[45px] h-[45px] rounded-full bg-[#1a1a1a] flex items-center justify-center text-white transition-all duration-300 hover:bg-primary hover:text-black" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:aminuassists@gmail.com" className="w-[45px] h-[45px] rounded-full bg-[#1a1a1a] flex items-center justify-center text-white transition-all duration-300 hover:bg-primary hover:text-black" aria-label="Email">
            <span className="text-[1.1rem] font-semibold">@</span>
          </a>
          <a href="https://wa.me/2349057809092" target="_blank" rel="noreferrer" className="w-[45px] h-[45px] rounded-full bg-[#1a1a1a] flex items-center justify-center text-white transition-all duration-300 hover:bg-primary hover:text-black" aria-label="WhatsApp">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16.02 3.2C9.12 3.2 3.52 8.8 3.52 15.7c0 2.4.7 4.7 1.9 6.7L3.4 28.8l6.7-1.9c1.9 1 4.1 1.6 6.4 1.6h.1c6.9 0 12.5-5.6 12.5-12.5S23 3.2 16.02 3.2zm0 22.5h-.1c-1.8 0-3.5-.5-5.1-1.4l-.4-.2-4 .9 1.1-3.9-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.4-9.8 9.8-9.8 5.3 0 9.7 4.4 9.7 9.8s-4.4 9.8-9.7 9.8zm5.5-7.3c-.3-.2-1.7-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.2-.7.9-.8 1.1-.1.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.3-.9-.8-1.4-1.7-1.6-2.1-.2-.4 0-.5.2-.6.2-.2.3-.4.5-.6.2-.1.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 3.8 3.5.5.2.9.3 1.3.4.5.1 1 .1 1.3.1.5 0 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.4z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="border-t border-[#1a1a1a] relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[rgba(100,80,0,0.4)] before:to-transparent">
        <div className="max-w-[1400px] mx-auto px-5 py-[30px] flex justify-between items-center max-md:flex-col max-md:gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden">
              <span className="text-black text-sm font-bold">AM</span>
            </div>
            <span className="text-xl font-semibold text-white">Aminu Assists</span>
          </div>
          <div className="text-center">
            <div className="text-[#666666] text-[0.85rem] leading-relaxed">
              ©2025 Aminu Momodu. All rights reserved.
            </div>
            <div className="mt-2 text-[0.9rem] text-[#a0a0a0]">
              Built by{' '}
              <a 
                href="https://joshuaoseghale.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline transition-all duration-300 hover:text-[#f0c000]"
              >
                Joshua Oseghale
              </a>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 max-md:items-center">
            <span className="text-white text-[0.9rem] font-medium">{formatTime(currentTime)}</span>
            <span className="text-[#666666] text-[0.85rem]">Lagos, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
