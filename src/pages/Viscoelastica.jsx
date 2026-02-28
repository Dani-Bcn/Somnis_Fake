import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion as m } from "framer-motion";
import ScrollToTop from "../ScrollTop";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Viscoelastica() {
  const imgRef = useRef(null);
  const pRef = useRef(null);
  const titleRef = useRef(null);
 const navigate = useNavigate();
  const borderTlRef = useRef(null);
  const borderTrRef = useRef(null);
  const borderBrRef = useRef(null);
  const borderBlRef = useRef(null);

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
  const handleBorders = () => {
    gsap.to(borderTlRef.current, {
      top: "16px",
      left: "28px",
      borderColor: "blue",
      duration: 0.2,
      ease: "power2.inOut",

    });

    gsap.to(borderTrRef.current, {
      top: "16px",
      right: "28px",
      borderColor: "blue",
      duration: 0.2,
      ease: "power2.inOut",
    });
    gsap.to(borderBlRef.current, {
      bottom: "16px",
      left: "28px",
      borderColor: "blue",
      duration: 0.2,
      ease: "power2.inOut",
    });

    gsap.to(borderBrRef.current, {
      bottom: "16px",
      right: "28px",
      borderColor: "blue",
      duration: 0.2,
      ease: "power2.inOut",
    });
  };

  const outBorders = () => {
    gsap.to(borderTlRef.current, {
      top: "0px",
      left: "0px",
      borderColor: "red",
      duration: 0.2,
      ease: "power2.inOut",
    });

    gsap.to(borderTrRef.current, {
      top: "0px",
      right: "0px",
      borderColor: "red",
      duration: 0.2,
      ease: "power2.inOut",
    });
    gsap.to(borderBlRef.current, {
      bottom: "0px",
      left: "0px",
      borderColor: "red",
      duration: 0.2,
      ease: "power2.inOut",
    });

    gsap.to(borderBrRef.current, {
      bottom: "0px",
      right: "0px",
      borderColor: "red",
      duration: 0.2,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline para controlar mejor la animación de ida y vuelta
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pRef.current,
          start: "center bottom",
          end: "bottom top", // Cambiado a "bottom top" para que termine cuando el párrafo sale completamente
          scrub: 2, // Reducido un poco para mejor control
        },
      });

      // Animación de ida: brightness disminuye
      tl.to(imgRef.current, {
        filter: "brightness(0.2)",
        duration: 1,
        ease: "power2.inOut",
      });

      // Animación de vuelta: brightness vuelve a 1
      // Esto sucede automáticamente cuando ScrollTrigger invierte la animación
      // Pero podemos asegurarnos con un to adicional
      tl.to(imgRef.current, {
        filter: "brightness(1)",
        duration: 1,
        ease: "power2.inOut",
        immediateRender: false,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      exit={{ opacity: 0, duration: 1 }}
      className="flex flex-col justify-center items-center relative"
    >
      <ScrollToTop />
      <m.img
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        ref={imgRef}
        className="fixed -mt-250 z-0 brightness-100"
        src="https://assets.zyrosite.com/cdn-cgi/image//YBgjMgabRgiQr27z/fondo-aNqrleXTBr1otkJs.webp"
        alt=""
      />
      <div
        ref={titleRef}
        className="z-50 flex mt-75 flex-col justify-center items-center text-center p-4"
      >
        <m.h2
          initial={{ opacity: 0, y: -250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bebas text-9xl text-[#be0000] mb-60"
        >
          ¿Qué es la viscoelástica?
        </m.h2>
        <m.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          ref={pRef}
          className="text-xl text-[#bed5f8] px-10 text-start"
        >
          La viscoelàstica és un material sintètic sensible a la calor i la
          pressió que s'adapta a la forma del cos i recupera la seva forma
          original quan cessa la pressió, creant una sensació d'abraçada.
          Aquesta propietat la fa molt útil en productes de descans com
          matalassos i coixins, ja que alleuja la pressió en punts clau com
          espatlles i malucs i millora la postura. El material, desenvolupat per
          la NASA a la dècada de 1960, es coneix també com a "escuma amb
          memòria" o "memory foam". <br />
          <br />
          Els matalassos viscoelàstics Pikolin s'adapten punt per punt al teu
          cos per a un descans complet i relaxant. Les seves propietats us
          ofereixen una adaptabilitat perfecta perquè cada nit gaudiu d'un somni
          reparador que us permeti començar cada dia ple d'energia.
        </m.p>

        <m.div
        onClick={()=> navigate("/somiador")}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="z-50 flex bebas mt-40 text-7xl text-[#ca1a1a] flex-col justify-center items-center text-center gap-4"
        >
          <div
            onMouseOver={() => handleBorders()}
            onMouseOut={() => outBorders()}
            className="relative w-96 h-72 items-center flex justify-center text-center  rounded-xl m-10 cursor-pointer"
          >
            <div className="w-80 h-62 flex justify-center items-center bg-[#b6b6b685] backdrop-grayscale-0 backdrop-brightness-75 backdrop-blur-[1px] rounded-[5px] p-1">
              <h3>Somiador plus</h3>
            </div>
            <div
              ref={borderTlRef}
              className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-[#be000088] rounded-tl-xl"
            ></div>
            <div
              ref={borderTrRef}
              className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-[#be000088] rounded-tr-xl"
            ></div>
            <div
              ref={borderBlRef}
              className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-[#be000088] rounded-bl-xl"
            ></div>
            <div
              ref={borderBrRef}
              className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-[#be000088] rounded-br-xl"
            ></div>
          </div>
        </m.div>
      </div>
    </m.main>
  );
}
