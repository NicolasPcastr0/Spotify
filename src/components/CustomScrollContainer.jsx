// CustomScrollContainer.jsx
import React, { useRef, useState, useEffect } from 'react';

function CustomScrollContainer({ children }) { 
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0); 

  
  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (scrollElement) {
      const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();

        
        const walk = (e.clientX - startY); 
        
        scrollElement.scrollLeft = startScrollLeft - walk; 
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        scrollElement.style.cursor = 'grab';
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, startY, startScrollLeft]); 


  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientX); 
    setStartScrollLeft(scrollRef.current.scrollLeft); 
    scrollRef.current.style.cursor = 'grabbing';
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      style={{
        overflowX: 'hidden', 
        overflowY: 'hidden', 
        cursor: 'grab',
        userSelect: 'none',
      }}
    >
      {children} 
    </div>
  );
}

export default CustomScrollContainer;