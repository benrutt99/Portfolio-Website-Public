import { useSpring, useTransition } from "@react-spring/web";

export function useFadeInAnimation(inView) {
  const fadeIn = useSpring({
    transform: inView ? "scale(1)" : "scale(0.4)",
    opacity: inView ? `1` : "0.0",
    config: {
      mass: 1.4,
      tension: 60,
      friction: 25,
      precision: 0.001,
      velocity: 0.008,
    },
  });

  return fadeIn;
}

export function useWipeUpAnimation(inView) {
  const wipeUp = useSpring({
    transform: inView ? "translateY(0px)" : "translateY(100px)",
    opacity: inView ? `1` : "0.0",
    config: {
      mass: 1.4,
      tension: 60,
      friction: 25,
      precision: 0.001,
      velocity: 0.008,
    },
  });

  return wipeUp;
}

export function useAnimatedItems(mapData) {
  return useTransition(mapData, {
    from: {
      opacity: 0,
      transform: "translateY(50px)",
      config: {
        mass: 0.4,
        tension: 120,
        friction: 25,
        precision: 0.001,
        velocity: 0.008,
      },
    },
    enter: {
      opacity: 1,
      transform: "translateY(0px)",
      config: {
        mass: 0.4,
        tension: 120,
        friction: 25,
        precision: 0.001,
        velocity: 0.008,
      },
    },
    leave: { opacity: 0, scale: 0, config: { duration: 200 } },
    trail: 800,
  });
}

export function slideRightAnimation(loaded) {
  const slideRight = useSpring({
    transform: loaded ? "translateX(0px)" : "translateX(-500px)",
    opacity: loaded ? `1` : "0.0",
    config: {
      mass: 2,
      tension: 85,
      friction: 30,
      precision: 0.001,
      velocity: 0.008,
    },
  });

  return slideRight;
}

export function slideLeftAnimation(loaded) {
  const slideLeft = useSpring({
    transform: loaded ? "translateX(0px)" : "translateX(500px)",
    opacity: loaded ? `1` : "0.0",
    config: {
      mass: 2,
      tension: 85,
      friction: 30,
      precision: 0.001,
      velocity: 0.008,
    },
  });

  return slideLeft;
}
