import { OrbitControls } from "@react-three/drei";
import Knight from "./Knight";
import Scene from "./Scene";
import Sword from "./Sword";

const Experience = () => {
  return (
    <Scene>
      <directionalLight color={"#FF0000"} intensity={1.5} position={[6, 8, 0]} />
      <directionalLight color={"#0000FF"} intensity={1.5} position={[-6, 8, 0]} />
      {/* <OrbitControls /> */}
      <Knight />
      <Sword />
    </Scene>
  );
};

export default Experience;
