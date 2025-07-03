import React, { useEffect, useRef } from 'react';

const InteractiveCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${posX}px`;
        cursorDotRef.current.style.top = `${posY}px`;
      }

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };

    const handleMouseDown = () => {
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = 'translate(-50%, -50%) scale(0.8)';
      }
    };

    const handleMouseUp = () => {
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    const createRipple = (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      document.body.appendChild(ripple);

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      ripple.style.left = `${clientX}px`;
      ripple.style.top = `${clientY}px`;

      ripple.onanimationend = () => {
        if (ripple.parentNode) {
            document.body.removeChild(ripple);
        }
      };
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('click', createRipple);
    window.addEventListener('touchstart', createRipple);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('click', createRipple);
      window.removeEventListener('touchstart', createRipple);
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorOutlineRef} className="cursor-outline"></div>
    </>
  );
};

export default InteractiveCursor;
