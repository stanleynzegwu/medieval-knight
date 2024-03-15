import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { KNIGHT_ANIMATION } from "../utils";

const Knight = () => {
  const knight = useRef();
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  /** GSAP */
  useLayoutEffect(() => {
    new ScrollTrigger({});

    KNIGHT_ANIMATION(knight.current).map(({ objectToAnimate, properties, trigger }) => {
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

  /** GSAP */

  // const { scene, ...others } = useGLTF("models/medievalKnight.glb");
  //   const { scene, ...others } = useGLTF("models/sci-fi.glb");
  //   const { scene, ...others } = useGLTF("models/streefighter.glb");
  const { scene, animations: idleAnimation } = useGLTF("models/medievalKnightOriginal.glb");

  idleAnimation[0].name = "Idle";
  const { actions } = useAnimations([idleAnimation[0]], knight);

  useEffect(() => {
    actions["Idle"].play();

    // Adjust playback speed (set time scale)
    // actions["Idle"].setEffectiveTimeScale(1.4);
  });
  return (
    <>
      <primitive ref={knight} object={scene} position={[0, -2.5, 0]} />
    </>
  );
};

export default Knight;
