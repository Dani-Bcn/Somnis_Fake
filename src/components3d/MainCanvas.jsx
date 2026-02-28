import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Colchon3d } from "./Colchon3d.jsx";
export default function MainCanvas() {
  return (
    <Canvas className="fixed top-0 left-0 w-full h-full z-500 ">
      <PerspectiveCamera makeDefault position={[0, 0, 75]} fov={5} />
      <OrbitControls
        maxPolarAngle={25}
        minPolarAngle={0}
        maxZoom={5}
        minZoom={5}
        maxDistance={65}
        minDistance={35}
      />
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, 10, -5]} intensity={1} />
      <Colchon3d />
    </Canvas>
  );
}
