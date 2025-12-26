import './Header.css';

const Header = ({ onNavClick }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">📋</span>
          <span className="logo-text">PortFoliyo</span>
        </div>
        <nav className="nav-menu">
          <a href="#home" className="nav-link active">HOME</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#services" className="nav-link">SERVICES</a>
          <a href="#projects" className="nav-link">PROJECTS</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
