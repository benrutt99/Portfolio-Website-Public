import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function ScrollAnimation({
  visible,
  notVisible,
  className,
  children,
}) {
  //if in view, changes inView to true
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  const baseVisible = {
    x: 0,
    transition: {
      type: "spring",
      duration: 1.5,
      bounce: 0.2,
    },
  };

  const baseNotVisible = {
    x: "-50vw",
  };

  useEffect(() => {
    if (inView) {
      animation.start(visible ?? baseVisible);
    }
    if (!inView) {
      animation.start(notVisible ?? baseNotVisible);
    }
    console.log("inView = ", inView);
  }, [inView]);

  return (
    <motion.div className={className} ref={ref} animate={animation}>
      {children}
    </motion.div>
  );
}
