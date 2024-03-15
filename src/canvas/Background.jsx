import { Plane } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Scene from "./Scene";
import { useRef } from "react";

const Background = () => {
  const light = useRef();

  window.addEventListener("mousemove", (event) => {
    if (light.current) {
      light.current.position.x = (event.clientX / window.innerWidth) * 2 - 1;
      light.current.position.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
  });
  return (
    <Scene>
      <spotLight
        ref={light}
        color={"#4684bd"}
        intensity={2}
        position={[0, 0, 0.5]}
        angle={4}
        penumbra={0.5}
      />

      {/* <pointLight intensity={2} color={"#ffffff"} position={[0, 0, 0.5]} ref={light} /> */}
      <PlaneBackground />
    </Scene>
  );
};

export default Background;

const PlaneBackground = () => {
  const { viewport } = useThree();

  return (
    <Plane args={[viewport.width, viewport.height]}>
      <meshStandardMaterial color={"#020024"} />
    </Plane>
  );
};
