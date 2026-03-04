import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const menuItems = [
  "SOMNIS",
  "ANIVERSARI",
  "KING",
  "SLEEEP",
  "PODIUM PLUS",
];

export default function NavMenu({ inMobile }) {
  console.log(inMobile);

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [open]);

  return (
    <main className="lg:hidden fixed right-0 p-5 z-550  ">
      <header className="bg-[#df9898] w-10 flex items-center justify-between p-2  shadow-md z-50 rounded-sm">
        <button
          onClick={() => {
            (setOpen(!open), inMobile(open));
          }}
          className="flex flex-col gap-1 z-50"
        >
          <span
            className={`w-6 h-0.5 bg-black transition ${open && "rotate-45 translate-y-1.5"}`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition ${open && "opacity-0"}`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition ${open && "-rotate-45 -translate-y-1.5"}`}
          />
        </button>
      </header>

      {/* Menú */}
      <nav
        ref={menuRef}
        className=" bg-[#c2724d75] backdrop-blur-md fixed top-0 right-0 w-full md:w-1/3 h-screen  flex flex-col items-center justify-start gap-6 text-xl font-medium translate-x-full z-40"
      >
        <div className="mt-20 flex flex-col gap-5 text-center text-5xl mt-40 bebas">
          {menuItems.map((item) => (
            <p
              key={item}
              onClick={() => {
                (navigate(`/${item.toLowerCase()}`), setOpen(false));
              }}
              className="hover:text-blue-600 transition  "
            >
              {item}
            </p>
          ))}
        </div>
      </nav>
    </main>
  );
}
