import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function ScrollSmoth() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add("(min-width:900px)", () => {
      gsap.to(".box", {
        scrollTrigger: {
          trigger: ".box",
          start: "top top",
          end: "5000",
          scrub: 2,
        },
        y: -600,
      });
    });
  });
  return null;
}
