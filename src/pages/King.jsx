import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion as m, AnimatePresence } from "framer-motion";
import ScrollToTop from "../ScrollTop";

gsap.registerPlugin(ScrollTrigger);

export default function King() {
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
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/YBgjMgabRgiQr27z/king_sin-DThSGV244dETqGDH.webp",
      alt: "aniversari1",
    },
    {
      id: 2,
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=774,fit=crop/YBgjMgabRgiQr27z/esquema_king-baja-m2WqN7wLQ5i92ZvA.jpg",
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
          className="bebas text-4xl -mt-10 mb-20 text-amber-50"
        >
          <h3>3 / Mod.</h3>
          <span className="lg:text-[200px] text-9xl">King</span>
        </m.div>

        <section className="flex justify-around items-start w-full gap-20">
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

          <section className="w-10/12  text-xl  text-[#d3d3d3] text-start flex flex-col gap-4">
            <span className=" h-10 text-3xl">MATALÀS D'HOTEL ED.LIMITADA</span>
            <p>
              <span>✓</span> Matalàs de molls Normazone i encoixinat Viscofoam
            </p>
            <p>
              <span>✓</span> Ofereix fermesa sense renunciar a la màxima
              adaptació.
            </p>
            <p>
              <span>✓</span> Gaudeix d'un confort extra suau.
            </p>
            <p>
              <span>✓</span> Alleugereix els punts de pressió i les tensions.
            </p>
            <p>
              <span>✓</span> Alçada: 28 cm.
            </p>
          </section>
        </section>

        <div className="flex justify-around items-center w-full gap-20 mt-20">
          <div className="text-[#ffffff]  text-start gap-4 flex flex-col">
            <h3 className="lg:text-8xl text-6xl mt-10 bebas text-[#be0000] underline ">
              COMPOSICIÓ
            </h3>
            <p>
              1. <span>Teixit Stretch</span> <br /> De gran tacte i pes que li
              proporciona elasticitat i transpirabilitat.
            </p>
            <p>
              2. <span>Viscofoam®</span> <br /> Combinació de fibra atèrmica i
              una capa de polièter HR. Aconsegueix crear un confort extra suau i
              deixa passar de forma continuada l'aire durant el descans per a
              una millor transpiració.
            </p>
            <p>
              3. <span>Fibercel®</span> <br /> Combinació de fibra atèrmica i
              una capa de polièter HR. Aconsegueix crear un confort extra suau i
              deixa passar de forma continuada l'aire durant el descans per a
              una millor transpiració.
            </p>
            <p>
              4. <span>Polièter reforçat d'alta densitat</span> <br /> Amortidor
              que proporciona una estabilitat confortable durant el descans.
            </p>
            <p>
              5. <span>Nucli Normazone®</span> <br />
              És el sistema de molls de fil continu més avançat del mercat.
              Ofereix fermesa sense renunciar a la màxima adaptació, gràcies a
              les 5 zones de descans.
            </p>
            <p>
              6. <span>Quatre nanses brodades</span>
              <br />
              Que faciliten la mobilitat i transport del matalàs.
            </p>
            <p>
              T. <span>Triple Barrera®</span> <br />
              Protecció higiènica total i permanent. Barrera que actua contra
              les principals causes d'al·lèrgies: àcars, bacteris i fongs durant
              la vida útil del matalàs.
            </p>
          </div>

          <m.div
            className="w-10/12 rounded-3xl h-96 bg-[#ffffff]  lg:mb-80 overflow-hidden flex justify-center items-center mt-20 cursor-pointer group"
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
