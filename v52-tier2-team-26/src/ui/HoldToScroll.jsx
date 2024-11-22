import React, { useState, useRef } from "react";

const HoldToScroll = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaY = e.clientY - startY;
    scrollRef.current.scrollTop -= deltaY;
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ overflow: "auto" }}
    ></div>
  );
};

export default HoldToScroll;
