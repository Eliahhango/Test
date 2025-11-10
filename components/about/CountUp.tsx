"use client";

import { useEffect, useState, useRef } from "react";

export default function CountUp({ 
  end, 
  suffix = "", 
  duration = 2, 
  isActive = false 
}: { 
  end: number; 
  suffix?: string; 
  duration?: number;
  isActive?: boolean;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isActive && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const increment = end / (duration * 60);
      
      const timer = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        if (elapsed >= duration) {
          setCount(end);
          clearInterval(timer);
        } else {
          countRef.current += increment;
          setCount(Math.min(Math.floor(countRef.current), end));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    } else if (!isActive && !hasAnimated.current) {
      setCount(0);
    }
  }, [end, duration, isActive]);

  return (
    <span>
      {Math.floor(count)}
      {suffix}
    </span>
  );
}

