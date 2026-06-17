'use client';

import React, { Suspense } from "react";
import Model from "./model";
import Screen from "./screen";

const Lab = () => {
  return (
    <Suspense fallback={null}>
      <Model></Model>
      <Screen></Screen>
      {/* <mesh>
        <planeGeometry args={[2, 2]} />
        <BgMaterial />
      </mesh> */}
    </Suspense>
  );
};

export default Lab;
