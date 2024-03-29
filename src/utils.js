export const KNIGHT_ANIMATION = (knight,yDifference) => {
  let AnimationsData = [];

  const SECTION2_ANIMATION = [
    {
      objectToAnimate: knight.position,
      properties: {
        z: -0.7,
        y: -2.3 - yDifference,
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
        y: -2.6 - yDifference,
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
        y:-2.25 - yDifference,
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
        y:-1.44 - yDifference,
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
        y: -1.45 - yDifference,
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
        y:-2.4 - yDifference,
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

export const SWORD_ANIMATION = (sword) => {
  let AnimationsData = [];

  const SECTION4_ANIMATION = [
    {
      objectToAnimate: sword.scale,
      properties: {
        x: 0.4,
        y: 0.4,
        z: 0.4,
      },
      trigger: {
        trigger: ".section5",
        start: "top bottom",
        end: "top center",
      }
    },
    // {
    //   objectToAnimate: sword.position,
    //   properties: {
    //     x: -0.28,
    //     y: 0.025,
    //     z: 0.64
    //   },
    //   trigger: {
    //     trigger: ".section5",
    //     start: "top bottom",
    //     end: "top center",
    //   }
    // },
    {
      objectToAnimate: sword.position,
      properties: {
        x: -0.50,
        y: -0.01,
        z: 0.34
      },
      trigger: {
        trigger: ".section5",
        start: "top bottom",
        end: "top center",
      }
    },
    // {
    //   objectToAnimate: sword.rotation,
    //   properties: {
    //     x: -4.32,
    //     y: 0.35,
    //     z: 2.4
    //   },
    //   trigger: {
    //     trigger: ".section5",
    //     start: "top bottom",
    //     end: "top center",
    //   }
    // },
    {
      objectToAnimate: sword.rotation,
      properties: {
        x: 0.04,
        y: -5.72,
        z:-4.20
      },
      trigger: {
        trigger: ".section5",
        start: "top bottom",
        end: "top center",
      }
    },
  ]

  AnimationsData = [...AnimationsData, ...SECTION4_ANIMATION];

  return AnimationsData
}

export const BLOODSPLATTER_ANIMATION = (planeRef) => {
  let AnimationsData = [];

  const SECTION5_ANIMATION = [
    {
      objectToAnimate: planeRef,
      properties: {
        visible: true,
      },
      trigger: {
        trigger: ".section5",
        start: "top center",
        end: "top center",
      }
    },
    {
      objectToAnimate: planeRef.scale,
      properties: {
        x: 1.1,
        y: 1.1,
        z: 1.1,
      },
      trigger: {
        trigger: ".section5",
        start: "top center",
        end: "top top",
      }
    },
  ]

  AnimationsData = [...AnimationsData, ...SECTION5_ANIMATION];

  return AnimationsData
}

export const calculateYPosition = (width) => {
  // Define the known points
  const width1 = 1280; // width for scale 2.5
  const yPosition1 = -2.5; // corresponding Y position
  const width2 = 1000; // width for scale -1.95
  const yPosition2 = -1.95; // corresponding Y position
  
  // Calculate the slope (change in Y over change in width)
  const slope = (yPosition2 - yPosition1) / (width2 - width1);
  // Calculate the Y position using linear interpolation
  const yPosition = yPosition1 + slope * (width - width1);
  
  return yPosition;
};