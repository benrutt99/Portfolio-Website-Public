import React from "react";
import { useSpring, useTransition, animated } from "@react-spring/web";

export default function SpringAnimation({
  className,
  children,
  style,
  inView,
}) {
  const DefaultStyle = useSpring({
    transform: inView ? "translateX(0px)" : "translateX(-500px)",
    opacity: inView ? `1` : "0.0",
    config: {
      mass: 1.4,
      tension: 120,
      friction: 25,
      precision: 0.001,
      velocity: 0.008,
    },
  });
  return (
    <animated.div style={style ?? DefaultStyle} className={className}>
      {children}
    </animated.div>
  );
}
