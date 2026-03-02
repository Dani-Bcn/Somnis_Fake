import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion as m, AnimatePresence } from "framer-motion";
import ScrollToTop from "../ScrollTop";

gsap.registerPlugin(ScrollTrigger);

export default function Aniversari() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const [scale, setScale] = useState(1);

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
    gsap.set(imgRef.current, { filter: "brightness(0.6)" });

    gsap.to(imgRef.current, {
      filter: "brightness(0.1)",
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "botom bottom",
        end: "center start",
        scrub: true,
      },
    });
  }, []);

  const handleCloseImage = () => {
    setHoveredImage(null);
  };

  const images = [
    {
      id: 1,
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/YBgjMgabRgiQr27z/75-aniversari-b5RId3YhdP1Ib6bN.png",
      alt: "aniversari1",
    },
    {
      id: 2,
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=664,fit=crop/YBgjMgabRgiQr27z/esquema-removebg-preview-VX7wLtpTAXsN5BO0.png",
      alt: "aniversari2",
    },
  ];

  useEffect(() => {
    if (!hoveredImage) return;
    if (hoveredImage.alt === "aniversari1") {
      setScale(1.8);
    } else {
      setScale(1.1);
    }
  }, [hoveredImage]);

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      exit={{ opacity: 0, duration: 1 }}
      className="h-screenflex flex-col justify-center items-center relative "
    >
      <ScrollToTop />

      <AnimatePresence>
        {hoveredImage && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#ffffff] bg-opacity-90 brightness-95  z-50 flex items-center justify-center"
            onClick={handleCloseImage}
          >
            <m.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: scale, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <m.img
                src={hoveredImage.src}
                alt={hoveredImage.alt}
                className="max-w-[90vw] max-h-[70vh] brightness-99 object-cover rounded-3xl shadow-2xl cursor-pointer"
                onClick={handleCloseImage}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.98 }}
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      <m.img
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        ref={imgRef}
        className="fixed -mt-225 z-0 brightness-75"
        src="https://assets.zyrosite.com/cdn-cgi/image//YBgjMgabRgiQr27z/fondo-aNqrleXTBr1otkJs.webp"
        alt=""
      />

      <div
        ref={titleRef}
        className="z-50 flex mt-100 flex-col justify-center items-center text-center px-10"
      >
        <m.div
          initial={{ opacity: 0, y: -250 }}
          animate={{ opacity: 1, y: -75 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bebas text-7xl -mt-10 mb-20 text-amber-50"
        >
          <h3>Núm. 2 / Mod.</h3>
          <span className="text-[200px]">ANIVERSARI</span>
        </m.div>

        <div className="flex justify-around items-start w-full gap-20">
          <m.div
            className="w-10/12 h-86 overflow-hidden bg-[#ffffff] rounded-3xl flex justify-center items-center cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setHoveredImage(images[0])}
          >
            <img
              className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
              src={images[0].src}
              alt={images[0].alt}
            />
          </m.div>

          <p className="w-10/12 text-xl mt-4 text-[#d3d3d3] text-start">
            <span className=" h-10 text-3xl">MATALÀS D'HOTEL ED.LIMITADA</span>
            <br /> <span>✓</span> Matalàs adaptable, fermesa interior
            mitjana/alta.
            <br />
            <span>✓</span> Matalàs de qualitat superior edició limitada.
            <br /> <span>✓</span> Com els nostres matalassos de les grans
            cadenes hoteleres.
            <br />
            <span>✓</span> Nucli de fil continu Normablock i Visco Air
            <br />
            <span>✓</span> Acolliment progressiu i adaptabilitat total al cos.
            <br />
            <span>✓</span> Confort durant tota la nit.
            <br />
            <span>✓</span> Alçada: 29 cm
          </p>
        </div>

        <div className="flex justify-around items-center w-full gap-20 mt-20">
          <div className="text-[#ffffff] text-xl text-start gap-4 flex flex-col">
            <h3 className="text-8xl mt-10 bebas text-[#be0000] underline ">
              COMPOSICIÓ
            </h3>
            <p>
              1. <span>Nucli.</span> <br /> Springbox System. Carcassa de molls
              ensecats per a un millor descans. Aquest sistema ofereix una gran
              adaptabilitat i confort al conjunt.
            </p>
            <p>
              2. <span>Interiors.</span> <br /> L'interior d'aquest matalàs
              combina en una de les cares materials com l'Oxicore i el
              Fibersoft, per millorar el confort i la transpiració.
            </p>
            <p>
              3. <span>Teixits i encoixinats.</span> <br /> Teixit Strecth d'alt
              gramatge amb tractament airfresh i antiàcars. Encoixinat tapa a
              tapa.
            </p>
          </div>

          <m.div
            className="w-10/12 rounded-3xl h-96 bg-[#ffffff]  overflow-hidden flex justify-center items-center mt-20 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setHoveredImage(images[1])}
          >
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="rounded-3xl w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </m.div>
        </div>
      </div>
    </m.main>
  );
}
