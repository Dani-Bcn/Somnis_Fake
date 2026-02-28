import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const Stars3D = () => {
  return (
    <div className="z-250 fixed lg:w-full h-20 top-0 left-0  bg-linear-to-b from-[#2c0000] via-[#3f00004b] to-[#00000000] backdrop-blur-xs">
     <Canvas>
      <Stars
        radius={500} // tamaño del espacio
        depth={20} // profundidad
        count={10000} // número de estrellas
        factor={5} // tamaño        
        /* saturation={5} // blanco */
        fade
        speed={2}
      />
    </Canvas  > 
    </div>
  );
};

export default Stars3D;
