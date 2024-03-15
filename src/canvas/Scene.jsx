import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

const Scene = ({ children }) => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 50,
        near: 0.1,
        far: 200,
        position: [0, 0, 1],
      }}
    >
      <spotLight color={"#ffffff"} intensity={2} position={[0, 0, 0.5]} angle={3} penumbra={3} />
      <Environment files="/textures/city.hdr" />
      {children}
    </Canvas>
  );
};

export default Scene;
