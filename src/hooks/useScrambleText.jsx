import { useEffect, useState } from 'react';

export const useScrambleText = (originalText, duration = 1500, steps = 16) => {
  const [text, setText] = useState(originalText);
  const chars = '!<>-_[]{}—=+*^?#';
  let step = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (step >= steps) {
        setText(originalText);
        clearInterval(interval);
      } else {
        const mixedText = originalText
          .split('')
          .map((char) => {
            return Math.random() > 0.5
              ? chars[Math.floor(Math.random() * chars.length)]
              : char;
          })
          .join('');
        setText(mixedText);
        step++;
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [originalText, duration, steps, step]);

  return text;
};
