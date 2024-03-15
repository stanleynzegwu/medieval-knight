import { OrbitControls } from "@react-three/drei";
import Knight from "./Knight";
import Scene from "./Scene";

const Experience = () => {
  return (
    <Scene>
      <directionalLight color={"#FF0000"} intensity={1.5} position={[6, 8, 0]} />
      <directionalLight color={"#0000FF"} intensity={1.5} position={[-6, 8, 0]} />
      {/* <OrbitControls /> */}
      <Knight />
    </Scene>
  );
};

export default Experience;
