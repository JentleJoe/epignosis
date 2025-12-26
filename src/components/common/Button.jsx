import './Button.css';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <button className={`button button-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
