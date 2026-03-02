import { motion as m } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import AnimatedPath from "./components_SVG/AnimatedPath";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollTop";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const titleRef = useRef(null);
  const titleRef2 = useRef(null);
  const cntMatalassosRef = useRef();
  const cntCoixinsRef = useRef();
  const textMatalassosRef = useRef();
  const textCoixinsRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const el = titleRef.current;
    gsap.to(el, {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top center",
        end: "bottom top",
        scrub: 2,
      },
    });

    const el2 = titleRef2.current;
    gsap.to(el2, {
      y: -150,
      ease: "none",
      start: "top top",
      scrollTrigger: {
        trigger: el2,
        scrub: 2,
      },
    });
  }, []);

  const handleMatalassos = () => {
    gsap.to(cntMatalassosRef.current, {
      height: "300px",
      ease: "out",
      overwrite: "auto",
    });

    gsap.to(cntCoixinsRef.current, {
      height: "100px",
      ease: "out",
      overwrite: "auto",
    });

    gsap.to(textMatalassosRef.current, {
      fontSize: "200px",
      ease: "out",
      overwrite: "auto",
      opacity: 0,
    });

    gsap.to(textCoixinsRef.current, {
      fontSize: "50px",
      ease: "out",
      overwrite: "auto",
    });
  };

  const handleCoixins = () => {
    gsap.to(cntCoixinsRef.current, {
      height: "300px",
      ease: "out",
      overwrite: "auto",
    });

    gsap.to(cntMatalassosRef.current, {
      height: "100px",
      ease: "out",
      overwrite: "auto",
    });

    gsap.to(textCoixinsRef.current, {
      fontSize: "200px",
      ease: "out",
      overwrite: "auto",
      opacity: 0,
    });

    gsap.to(textMatalassosRef.current, {
      fontSize: "50px",
      ease: "out",
      overwrite: "auto",
    });
  };

  const handleState = () => {
    gsap.to(cntCoixinsRef.current, {
      height: "200px",
      ease: "out",
      overwrite: "auto",
    });

    gsap.to(cntMatalassosRef.current, {
      height: "200px",
      ease: "out",
      overwrite: "auto",
    });

    gsap.to(textMatalassosRef.current, {
      fontSize: "100px",
      ease: "out",
      overwrite: "auto",
      opacity: 1,
    });

    gsap.to(textCoixinsRef.current, {
      fontSize: "100px",
      ease: "out",
      overwrite: "auto",
      opacity: 1,
    });
  };

  const matalassosImages = [
    {
      nombre: "SOMNIS",
      pagina: "SOMNIS",
      direccion:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/YBgjMgabRgiQr27z/01_somnis-nbf0mk2wzWvSA2Wi.jpg",
    },
    {
      nombre: "75 ANIVERSARI",
      pagina: "ANIVERSARI",
      direccion:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/YBgjMgabRgiQr27z/75-aniversari-b5RId3YhdP1Ib6bN.png",
    },
    {
      nombre: "KING",
      pagina: "KING",

      direccion:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/YBgjMgabRgiQr27z/king-jCQYEixdlv77BlHF.webp",
    },
    {
      nombre: "SLEEP",
      pagina: "SLEEP",
      direccion:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/YBgjMgabRgiQr27z/sleep-5UA0g7FjBaB5NDil.webp",
    },
    {
      nombre: "PODIUM PLUS",
      pagina: "PODIUMPLUS",
      direccion:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/YBgjMgabRgiQr27z/podium_plus-wk4t8Hi9Dg3Icrhv.webp",
    }
  ];
  const coixinsImages = [
    {
      nombre: "viscotop",
      direccion:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/YBgjMgabRgiQr27z/viscosoft-5S258BTHSMqapneU.webp",
    },
    {
      nombre: "viscomedium",
      direccion:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/YBgjMgabRgiQr27z/viscosoft-5S258BTHSMqapneU.webp",
    },
    {
      nombre: "viscosoft",
      direccion:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/YBgjMgabRgiQr27z/viscosoft-5S258BTHSMqapneU.webp",
    },
    {
      nombre: "cooper",
      direccion:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/YBgjMgabRgiQr27z/cooper-7z0AEfJQUJxxcSSt.webp",
    },
    {
      nombre: "koren",
      direccion:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/YBgjMgabRgiQr27z/ergonomica-PznGIDwPd9LAFCfK.webp",
    },
    {
      nombre: "ergonimica cames",
      direccion:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/YBgjMgabRgiQr27z/ergo_cames-iqK6883wf5ZQKBan.webp",
    },
    {
      nombre: "yasai / de viatge",
      direccion:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=968,h=768,fit=crop/YBgjMgabRgiQr27z/yasai-VNhF3mHArSxVH8Ox.webp",
    },
  ];
  const itemRefs = useRef([]);
  const itemcoixinsRefs = useRef([]);
  const itemImagesRefs = useRef([]);
  const itemImagesCoixinsRefs = useRef([]);

  const handleTextCoixins = (index) => {
    const element = itemcoixinsRefs.current[index];
    const elemtImg = itemImagesCoixinsRefs.current[index];
    if (!element) return;

    gsap.to(element, {
      marginTop: "80px",
      ease: "power2.out",
      overwrite: "auto",
    });
    gsap.to(elemtImg, {
      scale: 1.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };
  const handleTextCoixinsOut = (index) => {
    const element = itemcoixinsRefs.current[index];
    const elemtImg = itemImagesCoixinsRefs.current[index];
    if (!element) return;

    gsap.to(element, {
      marginTop: "-30px",
      ease: "power2.out",
      overwrite: "auto",
    });
    gsap.to(elemtImg, {
      scale: 1,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleText = (index) => {
    const element = itemRefs.current[index];
    const elemtImg = itemImagesRefs.current[index];
    if (!element) return;

    gsap.to(element, {
      marginTop: "80px",
      ease: "power2.out",
      overwrite: "auto",
    });
    gsap.to(elemtImg, {
      scale: 1.1,
      ease: "power2.out",
      overwrite: "auto",
    });
  };
  const handleTextOut = (index) => {
    const element = itemRefs.current[index];
    const elemtImg = itemImagesRefs.current[index];
    if (!element) return;

    gsap.to(element, {
      marginTop: "-30px",
      ease: "power2.out",
      overwrite: "auto",
    });
    gsap.to(elemtImg, {
      scale: 1,
      ease: "power2.out",
      overwrite: "auto",
    });
  };
  return (
    <m.main 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, ease: "easeInOut" }}
    exit={{opacity:0, duration: 1}}
    className="flex flex-col items-center justify-center text-slate-200 mb-20">
      <ScrollToTop />
      <div
        ref={titleRef}
        className="lg:w-full w-full  flex flex-col items-center justify-center"
      >
        <video
          src="https://videos.pexels.com/video-files/4057148/4057148-uhd_2732_1440_25fps.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="fixed   lg:top-10 top-50  "
        />
        <div className="absolute w-full    lg:h-[40.5%] top-0 bg-linear-to-b from-[#220000] via-[#11000017] to-[#111111] z-50"></div>
        <m.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: -20 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="lg:w-7/12 mt-80 lg:mt-85 mb-35 lg:mb-50 text-center z-50 "
        >
          <h2 ref={titleRef} className="lg:text-8xl text-5xl bebas z-50">
            DORM A <span>CASA</span> TEVA
          </h2>
          <m.div />
          <m.div
            initial={{ opacity: 0, y: -120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center"
          >
            <h2
              ref={titleRef}
              className="index-1 flex-wrap  justify-center items-center flex text-6xl lg:text-[140px] bebas z-50"
            >
              COM EN UN <span>HOTEL</span>
            </h2>
          </m.div>
        </m.div>
        <div
          ref={titleRef2}
          className="w-10/12 z-150 text-3xl lg:text-7xl bebas -mb-150 text-center"
        >
          <h3 className="animado1">
            Volem que <span>dormis</span>
          </h3>
          <h3 className="animado2">
            <span>millor</span> cada dia amb
          </h3>
          <h3 className="animado1">
            marques de <span> confiança</span> com
          </h3>
        </div>
        <AnimatedPath />
        <section className="w-10/12 px-5 h-screen  bebas z-50">
          <div
            ref={cntMatalassosRef}
            onMouseEnter={handleMatalassos}
            onMouseLeave={handleState}
            className="relative mt-80 w-full h-50 overflow-visible rounded-xl flex justify-center items-center  shadow-[0_0_10px_0px_rgba(184,28,28,0.5)] bg-[#50010185] p-4 my-4"
          >
            <div className="absolute inset-0 gap-1  flex justify-center overflow-hidden items-center  rounded-2xl">
              {matalassosImages.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-start relative overflow-hidden "
                >
                  <img
                    ref={(el) => (itemImagesRefs.current[index] = el)}
                    src={item.direccion}
                    alt={item.nombre}
                    className="object-cover  w-96 flex  h-96 bg-[#ffffff]  hover:grayscale-0 grayscale rounded-lg py-12"
                    onClick={() => navigate(`/${item.pagina.toLowerCase()}`)}
                    onMouseOver={() => handleText(index)}
                    onMouseOut={() => handleTextOut(index)}
                  />

                  <h3
                    ref={(el) => (itemRefs.current[index] = el)}
                    className="-mt-20  absolute text-4xl pointer-events-none text-[#b81c1c] "
                  >
                    {item.nombre}
                  </h3>
                </div>
              ))}
            </div>
            <h2
              ref={textMatalassosRef}
              className="absolute pointer-events-none text-8xl z-10 text-red-600 drop-shadow-lg opacity-100"
            >
              Matalassos
            </h2>
          </div>
          <div
            ref={cntCoixinsRef}
            onMouseEnter={handleCoixins}
            onMouseLeave={handleState}
            className="relative mt-2 w-full h-50 overflow-visible rounded-xl flex justify-center items-center  shadow-[0_0_10px_0px_rgba(184,28,28,0.5)] bg-[#3800005e] p-4 my-4">
            <div className="absolute inset-0 gap-1  flex justify-center overflow-hidden items-center  rounded-2xl">
              {coixinsImages.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-start relative overflow-hidden"
                >
                  <img
                    ref={(el) => (itemImagesCoixinsRefs.current[index] = el)}
                    src={item.direccion}
                    alt={item.nombre}
                    className="object-cover  w-96 flex  h-96 bg-[#ffffff]   hover:grayscale-0 grayscale rounded-lg py-12"
                    onClick={() => navigate(`/${item.nombre}`)}
                    onMouseOver={() => handleTextCoixins(index)}
                    onMouseOut={() => handleTextCoixinsOut(index)}
                  />

                  <h3
                    ref={(el) => (itemcoixinsRefs.current[index] = el)}
                    className="-mt-40 absolute text-4xl pointer-events-none text-[#b81c1c] "
                  >
                    {item.nombre}
                  </h3>
                </div>
              ))}
            </div>
            <h2
              ref={textCoixinsRef}
              className="absolute pointer-events-none text-8xl z-10 text-red-600 drop-shadow-lg opacity-100"
            >
              Coixins
            </h2>
          </div>
        </section>
      </div>
    </m.main>
  );
}
