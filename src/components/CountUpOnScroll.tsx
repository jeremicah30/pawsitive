import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";

interface CountUpOnScrollProps {
  start: number;
  end: number;
  duration: number;
}

const CountUpOnScroll: React.FC<CountUpOnScrollProps> = ({
  start,
  end,
  duration,
}) => {
  const [animate, setAnimate] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(true);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      <Waypoint onEnter={() => setAnimate(true)} bottomOffset="50%">
        <div>
          <CountUp
            start={animate ? start : 0}
            end={animate ? end : 0}
            duration={duration}
          />
        </div>
      </Waypoint>
    </div>
  );
};

export default CountUpOnScroll;
