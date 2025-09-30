"use client";

import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import {
  ContactShadows,
  Environment,
  Float,
  MeshDistortMaterial,
  PresentationControls,
  Sparkles,
} from "@react-three/drei";
import { JSX } from "react";

type GroupProps = JSX.IntrinsicElements["group"];

function HeroArtifact(props: GroupProps) {
  return (
    <group {...props}>
      <Float floatIntensity={1.2} rotationIntensity={1.1} speed={1.6}>
        <mesh castShadow>
          <icosahedronGeometry args={[1.6, 1]} />
          <MeshDistortMaterial
            speed={1.4}
            distort={0.35}
            color="#38bdf8"
            emissive={"#0ea5e9"}
            emissiveIntensity={0.4}
            metalness={0.2}
            roughness={0.12}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          <torusGeometry args={[2.4, 0.08, 16, 128]} />
          <MeshDistortMaterial
            speed={2.1}
            distort={0.2}
            color="#0f172a"
            opacity={0.3}
            transparent
          />
        </mesh>
      </Float>
    </group>
  );
}

export function Experience() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[6, 9, 6]}
        intensity={1.3}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-4, 4, -2]} intensity={0.6} color="#60a5fa" />

      <Sparkles
        count={90}
        speed={0.3}
        opacity={0.3}
        scale={[14, 6, 14]}
        color="#38bdf8"
      />

      <PresentationControls
        global
        zoom={0.8}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 6, Math.PI / 6]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <HeroArtifact position={[0, -0.4, 0]} />
      </PresentationControls>

      <ContactShadows
        opacity={0.42}
        scale={8}
        blur={3.2}
        far={8}
        position={[0, -1.6, 0]}
      />

      <Environment preset="studio" />

      {/* Lightweight post-processing to hint at the future art direction */}
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={0.1} intensity={0.65} radius={0.9} />
        <ChromaticAberration offset={[0.0008, 0.0008]} radialModulation={false} />
      </EffectComposer>
    </>
  );
}

export default Experience;
