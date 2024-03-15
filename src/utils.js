export const KNIGHT_ANIMATION = (knight) => {
  let AnimationsData = [];

  const SECTION2_ANIMATION = [
    {
      objectToAnimate: knight.position,
      properties: {
        z: -0.7,
        y: -2.3,
      },
      trigger: {
        trigger: ".section2",
        start: "top bottom",
        end: "top center",
      }
    },
    {
      objectToAnimate: knight.rotation,
      properties: {
        y: -Math.PI / 3,
      },
      trigger: {
        trigger: ".section2",
        start: "center bottom",
        end: "top top",
      }
    }
  ]

  AnimationsData = [...AnimationsData, ...SECTION2_ANIMATION];

  const SECTION3_ANIMATION = [
    {
      objectToAnimate: knight.position,
      properties: {
        x: -0.4,
        y: -2.6,
        z: 0.42,
      },
      trigger: {
        trigger: ".section3",
        start: "top bottom",
        end: "top top",
      }
    },
    {
      objectToAnimate: knight.rotation,
      properties: {
        y: -Math.PI / 1.7,
      },
      trigger: {
        trigger: ".section3",
        start: "top bottom",
        end: "top top",
      }
    }
  ]

  AnimationsData = [...AnimationsData, ...SECTION3_ANIMATION];

  // const SECTION4_ANIMATION = [
  //   {
  //     objectToAnimate: knight.position,
  //     properties: {
  //       x: 1,
  //       y: -1.45,
  //       z: -2.1,
  //     },
  //     trigger: {
  //       trigger: ".section4",
  //       start: "top bottom",
  //       end: "top top",
  //     }
  //   },
  //   {
  //     objectToAnimate: knight.rotation,
  //     properties: {
  //       y: -((9 * Math.PI) / 4),
  //     },
  //     trigger: {
  //       trigger: ".section4",
  //       start: "top bottom",
  //       end: "top top",
  //     }
  //   }
  // ]

  const SECTION4_ANIMATION = [
    {
      objectToAnimate: knight.position,
      properties: {
        x: 0.55,
        y:-2.25,
        z: -0.5,
      },
      trigger: {
        trigger: ".section4",
        start: "top bottom",
        end: "top top",
      }
    },
    {
      objectToAnimate: knight.rotation,
      properties: {
        y:-( 1.6 * Math.PI) / 1.3,
      },
      trigger: {
        trigger: ".section4",
        start: "top bottom",
        end: "top top",
      }
    }
  ]

  AnimationsData = [...AnimationsData, ...SECTION4_ANIMATION];

  const SECTION5_ANIMATION = [
    {
      objectToAnimate: knight.position,
      properties: {
        x: 0,
        y:-1.44,
        z: -0.34,
      },
      trigger: {
        trigger: ".section5",
        start: "top bottom",
        end: "top top",
      }
    },
    {
      objectToAnimate: knight.rotation,
      properties: {
        y:-( 2 * Math.PI) ,
      },
      trigger: {
        trigger: ".section5",
        start: "top bottom",
        end: "top top",
      }
    }
  ]

  AnimationsData = [...AnimationsData, ...SECTION5_ANIMATION];

    const SECTION6_ANIMATION = [
    {
      objectToAnimate: knight.position,
      properties: {
        x: 1,
        y: -1.45,
        z: -2.1,
      },
      trigger: {
        trigger: ".section6",
        start: "top bottom",
        end: "top top",
      }
    },
    {
      objectToAnimate: knight.rotation,
      properties: {
        y: -((9 * Math.PI) / 4),
      },
      trigger: {
        trigger: ".section6",
        start: "top bottom",
        end: "top top",
      }
    }
  ]

  AnimationsData = [...AnimationsData, ...SECTION6_ANIMATION];

  const LASTSECTION_ANIMATION = [
    {
      objectToAnimate: knight.position,
      properties: {
        x: 0,
        y:-2.4,
        z: -0.2,
      },
      trigger: {
        trigger: ".lastSection",
        start: "top bottom",
        end: "top top",
      }
    },
    {
      objectToAnimate: knight.rotation,
      properties: {
        y:-( 2 * Math.PI) ,
      },
      trigger: {
        trigger: ".lastSection",
        start: "top bottom",
        end: "top top",
      }
    }
  ]

  AnimationsData = [...AnimationsData, ...LASTSECTION_ANIMATION];

  return AnimationsData
}