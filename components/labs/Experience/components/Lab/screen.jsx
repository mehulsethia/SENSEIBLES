'use client';

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

import { useScreenCursor } from "@/lib/labs-utils/useScreenCursor";
import useStats from "@/lib/lab-stores/useStats";
import labsAssets from "@/lib/labs-data/assets";

import screenVertexShader from "../../shaders/screen/vertex.glsl";
import screenFragmentShader from "../../shaders/screen/fragment.glsl";

const modelUrl = "/screen.glb";

const Screen = () => {
  const group = useRef(null);
  const { scene } = useGLTF(modelUrl);
  const { scene: scene2, camera } = useThree();

  const pages = useMemo(() => {
    const group = labsAssets.find((asset) => asset.name === "experiments");
    return group?.items ?? [];
  }, []);

  const index = useStats((state) => state.index);

  const urls = useMemo(() => {
    if (!pages.length) {
      return ["/placeholder.jpg"];
    }
    return pages.map((page) => page.textureUrl);
  }, [pages]);

  const imageTextures = useTexture(urls);

  imageTextures.forEach((tex) => {
    if (!tex) return;
    tex.flipY = false;
    tex.encoding = THREE.sRGBEncoding;
  });

  const screenMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: screenVertexShader,
      fragmentShader: screenFragmentShader,
      uniforms: {
        uTime: new THREE.Uniform(0),
        uProgress: new THREE.Uniform(0),
        uHoverProgress: new THREE.Uniform(0),
        uScreenTexture1: new THREE.Uniform(imageTextures[0] ?? null),
        uScreenTexture2: new THREE.Uniform(imageTextures[1] ?? imageTextures[0] ?? null),
      },
      transparent: true,
    });
  }, [imageTextures]);

  const mouse = useScreenCursor();
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const isHovering = useRef(false);
  const pivot = useRef(null);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.name === "Screen") {
        child.material = screenMaterial;
        const box = new THREE.Box3().setFromObject(child);
        const center = box.getCenter(new THREE.Vector3());

        center.y -= 0.5;

        pivot.current = new THREE.Object3D();
        pivot.current.position.copy(center);

        child.position.sub(center);

        pivot.current.add(child);
        scene2.add(pivot.current);
      }
    });
  }, [scene, scene2, screenMaterial]);

  useEffect(() => {
    if (!pivot.current) {
      return;
    }

    const handleClick = () => {
      // reserved for future interactions
    };

    const resize = () => {
      if (!pivot.current) return;
      pivot.current.scale.setScalar(window.innerWidth < 768 ? 0.675 : 1);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", handleClick);
    };
  }, [index]);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    const unsubscribe = useStats.subscribe(
      (state) => state.index,
      (value, prevValue) => {
        const prevTexture = imageTextures[prevValue] ?? imageTextures[0] ?? null;
        const nextTexture = imageTextures[value] ?? prevTexture;

        screenMaterial.uniforms.uScreenTexture1.value = prevTexture;
        screenMaterial.uniforms.uScreenTexture2.value = nextTexture;

        tl.fromTo(
          screenMaterial.uniforms.uProgress,
          { value: 0 },
          {
            value: 1,
            delay: 0.425,
            duration: 1,
            ease: "power3.out",
          }
        );

        tl.play();
      }
    );

    return () => {
      unsubscribe();
      tl.kill();
    };
  }, [imageTextures, screenMaterial]);

  useFrame((_, delta) => {
    screenMaterial.uniforms.uTime.value += delta;

    if (!pivot.current) {
      return;
    }

    raycaster.setFromCamera(mouse.current, camera);
    raycaster.intersectObjects(pivot.current.children, true);
  });

  return <primitive ref={group} object={scene} />;
};

export default Screen;

useGLTF.preload(modelUrl);
