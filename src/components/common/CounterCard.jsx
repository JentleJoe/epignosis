import { useCountUp } from '../../hooks/useScrollAnimation';

const CounterCard = ({ 
  end, 
  suffix = '', 
  prefix = '', 
  label, 
  duration = 2000,
  className = '' 
}) => {
  const [ref, count] = useCountUp(end, duration);

  return (
    <div 
      ref={ref} 
      className={`text-center p-6 rounded-xl bg-[rgba(20,20,20,0.8)] border border-[#333333] 
                  hover:border-primary transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <div className="text-4xl font-bold text-primary mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-[#a0a0a0] text-sm font-medium">{label}</div>
    </div>
  );
};

export default CounterCard;
