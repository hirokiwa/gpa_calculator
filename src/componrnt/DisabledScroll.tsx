import { useEffect } from 'react';

const DisableScroll: React.FC = () => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const originalPaddingRight = window.getComputedStyle(document.body).paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.ontouchmove = (e: Event) => {
      e.preventDefault();
    };

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = originalPaddingRight;
      document.ontouchmove = null;
    };
  }, []);

  return null;
};

export default DisableScroll;
