import ScrollToTop from "../ScrollTop";
import { motion as m } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Somiador() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    gsap.to(el, {
      y: -50,

      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4, ease: "easeInOut" }}
      exit={{ opacity: 0, duration: 1 }}
      ref={titleRef}
      className="w-full h-screen flex flex-col items-center justify-start  opacity-0"
    >
      <ScrollToTop />
      <div className="mt-100 bebas text-9xl text-amber-100">
        <h2>Somiador plus</h2>
      </div>
    </m.main>
  );
}
