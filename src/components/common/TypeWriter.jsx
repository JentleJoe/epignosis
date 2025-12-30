import { useState, useEffect } from 'react';

const TypeWriter = ({ 
  words = [], 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000,
  className = '' 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (isPaused) {
        setTimeout(() => setIsPaused(false), pauseTime);
        return;
      }

      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex(prev => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
        if (currentText === currentWord) {
          setIsPaused(true);
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isPaused ? pauseTime : isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink text-primary">|</span>
    </span>
  );
};

export default TypeWriter;
