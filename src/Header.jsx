import LogoSVG from "./components_SVG/LogoSVG";
import Stars3D from "./components3d/Stars3D";


export default function Header() {
  return (
    <main>
      <Stars3D />
      <div className=" flex items-start justify-center lg:-mt-20">
        <LogoSVG />
      </div>
    </main>
  );
}
