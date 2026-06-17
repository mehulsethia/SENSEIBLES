'use client';

import { OrthographicCamera } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

import Lab from "./components/Lab/scene";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { CustomEfComponent } from "./CustomEf";

export default function Scene() {
  const cameraRef = useRef(null);

  useEffect(() => {
    const resize = () => {
      if (!cameraRef.current) return;

      const width = window.innerWidth;

      if (width < 640) {
        cameraRef.current.zoom = 95;
      } else if (width < 1024) {
        cameraRef.current.zoom = 110;
      } else if (width < 1440) {
        cameraRef.current.zoom = 135;
      } else if (width < 1920) {
        cameraRef.current.zoom = 160;
      } else {
        cameraRef.current.zoom = 190;
      }

      cameraRef.current.position.set(0, 6, 12);
      cameraRef.current.lookAt(0, 0, 0);

      cameraRef.current.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* <mesh ref={fullScreenQuadRef}>
        <planeGeometry args={[2, 2]} />
        <FullScreenQuadMaterial />
      </mesh> */}

      <OrthographicCamera
        ref={cameraRef}
        makeDefault
        near={0.1}
        far={50}
        zoom={200}
      />

      <EffectComposer multisampling={3} autoClear={false}>
        <CustomEfComponent />
        <Bloom
          luminanceThreshold={5}
          luminanceSmoothing={40}
          intensity={0.325}
          levels={10}
          mipmapBlur
        />
      </EffectComposer>

      <Lab />

      {/* <PerspectiveCamera makeDefault ref={cameraRef} fov={90} zoom={10.375} /> */}
    </>
  );
}
