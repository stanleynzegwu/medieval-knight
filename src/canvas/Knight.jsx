import { useAnimations, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { KNIGHT_ANIMATION, calculateYPosition } from "../utils";

const Knight = () => {
  const { scene, animations: idleAnimation } = useGLTF("models/medievalKnightOriginal.glb");
  const knight = useRef();
  const { size } = useThree();
  const ratioScale = useMemo(() => {
    return Math.min(1.2, Math.max(0.5, size.width / 1280));
  }, [size.width]);
  const knight_YPosition = calculateYPosition(size.width);
  const yDifference = -2.5 - knight_YPosition; //difference in Y , gotten by subtrating default Y of the knight with the current Y

  /** GSAP */
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    new ScrollTrigger({});

    KNIGHT_ANIMATION(knight.current, yDifference).map(
      ({ objectToAnimate, properties, trigger }) => {
        tl.to(objectToAnimate, {
          ...properties,
          scrollTrigger: {
            ...trigger,
            scrub: true,
            immediateRender: false,
          },
        });
      }
    );
  }, []);

  /** KNIGHT ANIMATION */
  idleAnimation[0].name = "Idle";
  const { actions } = useAnimations([idleAnimation[0]], knight);

  useEffect(() => {
    actions["Idle"].play();

    // Adjust playback speed (set time scale)
    // actions["Idle"].setEffectiveTimeScale(1.4);
  });
  return (
    <>
      <primitive
        ref={knight}
        scale={ratioScale}
        object={scene}
        position={[0, knight_YPosition, 0]}
      />
    </>
  );
};

export default Knight;
