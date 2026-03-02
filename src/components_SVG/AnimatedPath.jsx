import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ScrollAnimatedPath = ({ scale = 1, scale2 = 1 }) => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const fillProgress = useTransform(scrollYProgress, [0, 5], [0, 5]);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 968);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);


  return (
    <div ref={containerRef} className="h-[150vh]">
      <div
        className="sticky top-60 lg:top-80 h-[30vh] w-[98vw] left-0 z-1 flex flex-col justify-center items-center"
      >
        <div
          className="w-full max-w-300 h-[150vh] flex justify-center items-center relative z-2 top-40"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="11000 17000 7500 15000"
            preserveAspectRatio="xMidYMid meet"
            className="max-w-[60%] max-h-[35%] [filter:drop-shadow(0_0_30px_rgba(255,0,0,0.3))]"
          >
            <defs>
              <linearGradient
                id="liquidGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ff6b6b" stopOpacity="2">
                  <animate
                    attributeName="stop-color"
                    values="#ff6b6b;#ff8787;#ff6b6b"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="20%" stopColor="#ff4444" stopOpacity="2">
                  <animate
                    attributeName="stop-color"
                    values="#ff4444;#ff6b6b;#ff4444"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="90%" stopColor="#c92a2a" stopOpacity="2">
                  <animate
                    attributeName="stop-color"
                    values="#c92a2a;#ff4444;#c92a2a"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>

            <motion.path
              ref={pathRef}
              d="M9732.04 22672.79l0 -3334.75 -1429.22 0 0 2866.98c0,255.46 205.74,467.77 458.81,467.77l970.41 0zm6257.44 -2869.28l-425.06 0 0 2401.51 425.06 0 0 -2401.51zm1428.7 0l0 2401.51c0,237.43 -191.3,467.77 -425.57,467.77l-2412.1 0c-235.13,0 -424.97,-230.34 -424.97,-467.77l0 -2441.07c0,-235.73 189.84,-428.22 424.97,-428.22l2431.5 0c235.46,0 406.17,231.11 406.17,467.78zm-9731.45 -17.18c0,-236.66 -190.45,-448.29 -424.81,-448.29l-2857.83 0 0 4642.39 1428.7 0 0 -4194.1 424.97 0 0 2418.69c0,237.43 209.07,467.77 443.94,467.77l985.03 0 0 -2886.46zm10293.64 2476.96c0,237.6 189.58,409.5 425.05,409.5l984.26 0 0 -4641.62 -1409.31 0 0 4232.12zm2026.26 -19.06c0,236.84 209.58,428.56 443.94,428.56l984.85 0 0 -3334.75 -1428.79 0 0 2906.19zm-10959.81 -3082.19c453.25,0 820.13,-253.07 820.13,-564.92 0,-312.8 -366.88,-565.95 -820.13,-565.95 -453.25,0 -820.29,253.15 -820.29,565.95 0,311.85 367.04,564.92 820.29,564.92zm11664.51 0c453.25,0 820.63,-253.07 820.63,-564.92 0,-312.8 -367.38,-565.95 -820.63,-565.95 -453.26,0 -820.64,253.15 -820.64,565.95 0,311.85 367.38,564.92 820.64,564.92zm4158.46 176l-2856.89 0 0 3334.75 1428.19 0 0 -2886.46 443.85 0 0 2418.69c0,237.43 190.7,467.77 425.06,467.77l984.85 0 0 -2886.46c0,-243.07 -187.2,-440.86 -425.06,-448.29zm-13085.43 2477.21l0 857.54 -1428.79 0 0 -4641.62 1428.79 0 0 2418.94 1215.62 -1112.07 715.12 0 -1235.61 1112.07 1370.69 2222.68 -1486.72 0 -579.1 -857.54z"
              fill="url(#liquidGradient)"
              fillOpacity={useTransform(
                fillProgress,
                (value) => value * 2 + 0,
              )}
              strokeWidth="20"
              style={{
                filter: useTransform(fillProgress, (value) =>
                  value > 0.3 ? "url(#bubbles)" : "none",
                ),
                transition: "filter 0.3s ease-out",
              }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimatedPath;
