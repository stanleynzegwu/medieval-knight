import { Plane, useGLTF, useTexture } from "@react-three/drei";
import { BLOODSPLATTER_ANIMATION, SWORD_ANIMATION } from "../utils";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useControls } from "leva";

const Sword = () => {
  const sword = useGLTF("/models/sword.glb");
  const bloodSplatter = useTexture("/textures/blood-splash-noBg.png");
  const swordRef = useRef();
  const planeRef = useRef();

  /** GSAP */
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    new ScrollTrigger({});
    SWORD_ANIMATION(swordRef.current).map(({ objectToAnimate, properties, trigger }) => {
      tl.to(objectToAnimate, {
        ...properties,
        scrollTrigger: {
          ...trigger,
          scrub: true,
          immediateRender: false,
        },
      });
    });

    BLOODSPLATTER_ANIMATION(planeRef.current).map(({ objectToAnimate, properties, trigger }) => {
      tl.to(objectToAnimate, {
        ...properties,
        scrollTrigger: {
          ...trigger,
          scrub: true,
          immediateRender: false,
        },
      });
    });
  }, []);

  // const { position, rotation } = useControls({
  //   position: {
  //     value: { x: -0.28, y: 0.02, z: 0.64 },
  //     step: 0.02,
  //   },
  //   rotation: {
  //     min: -Math.PI * 2,
  //     max: Math.PI * 2,
  //     value: { x: -2.44, y: 0.79, z: 2.2 },
  //     step: 0.04,
  //   },
  // });

  return (
    <>
      <primitive
        ref={swordRef}
        object={sword.scene}
        scale={0}
        position={[-2.38, -0.06, -1.78]}
        rotation={[-4.04, 0.39, 2.2]}
        // position={[position.x, position.y, position.z]}
        // rotation={[rotation.x, rotation.y, rotation.z]}
      />
      <Plane ref={planeRef} args={[0.45, 0.45]} position={[-0.85, 0, 0]} visible={false}>
        <meshBasicMaterial map={bloodSplatter} transparent depthTest={false} />
      </Plane>
    </>
  );
};

export default Sword;
