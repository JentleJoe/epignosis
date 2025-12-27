const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-[30px] py-3 text-[0.95rem] font-semibold rounded transition-all duration-300 tracking-[0.5px] max-md:px-6 max-md:py-2.5 max-md:text-[0.9rem]";
  
  const variants = {
    primary: "bg-primary text-black border-2 border-primary hover:bg-secondary hover:border-secondary hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(255,215,0,0.2)]",
    secondary: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-black hover:-translate-y-0.5"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
