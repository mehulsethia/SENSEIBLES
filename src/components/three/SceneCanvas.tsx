"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, Html, useProgress } from "@react-three/drei";
import { Experience } from "./Experience";

function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html center className="select-none">
      <div className="flex min-w-[160px] flex-col items-center gap-2 rounded-full bg-white/10 px-6 py-4 text-white backdrop-blur-md">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/60">
          Loading
        </span>
        <span className="text-sm font-semibold">{progress.toFixed(0)}%</span>
      </div>
    </Html>
  );
}

export function SceneCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0.4, 6], fov: 42 }}
      gl={{ antialias: true, preserveDrawingBuffer: true }}
      className="size-full"
    >
      <color attach="background" args={["#050608"]} />

      <Suspense fallback={<CanvasLoader />}>
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Experience />
      </Suspense>
    </Canvas>
  );
}

export default SceneCanvas;
