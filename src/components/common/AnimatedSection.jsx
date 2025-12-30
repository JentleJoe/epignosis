import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeUp', 
  delay = 0,
  duration = 700 
}) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const animations = {
    fadeUp: {
      initial: 'opacity-0 translate-y-10',
      animate: 'opacity-100 translate-y-0'
    },
    fadeDown: {
      initial: 'opacity-0 -translate-y-10',
      animate: 'opacity-100 translate-y-0'
    },
    fadeLeft: {
      initial: 'opacity-0 translate-x-10',
      animate: 'opacity-100 translate-x-0'
    },
    fadeRight: {
      initial: 'opacity-0 -translate-x-10',
      animate: 'opacity-100 translate-x-0'
    },
    fadeIn: {
      initial: 'opacity-0',
      animate: 'opacity-100'
    },
    scaleUp: {
      initial: 'opacity-0 scale-95',
      animate: 'opacity-100 scale-100'
    },
    slideUp: {
      initial: 'opacity-0 translate-y-20',
      animate: 'opacity-100 translate-y-0'
    }
  };

  const currentAnimation = animations[animation] || animations.fadeUp;

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className} ${
        isVisible ? currentAnimation.animate : currentAnimation.initial
      }`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
