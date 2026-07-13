import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function ParticlesField() {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollRef = useRef(0);
  const pointerRef = useRef({ x: 0, y: 0 });
  const currentRot = useRef({ x: 0, y: 0 });
  const { invalidate } = useThree();
  const reducedMotion = useReducedMotion();

  const geometry = useMemo(() => {
    const n = 900;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 1.4 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let throttled = false;
    const onScroll = () => {
      if (throttled) return;
      throttled = true;
      setTimeout(() => { throttled = false; }, 50);
      scrollRef.current = window.scrollY;
      invalidate();
    };

    const onPointer = (e: PointerEvent) => {
      pointerRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 0.02,
        y: (e.clientY / window.innerHeight - 0.5) * 0.02,
      };
      invalidate();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [reducedMotion, invalidate]);

  useFrame(() => {
    if (!pointsRef.current || reducedMotion) return;

    const targetY = scrollRef.current * 0.0002 + pointerRef.current.x;
    const targetX = pointerRef.current.y;

    currentRot.current.y += (targetY - currentRot.current.y) * 0.05;
    currentRot.current.x += (targetX - currentRot.current.x) * 0.05;

    pointsRef.current.rotation.y = currentRot.current.y;
    pointsRef.current.rotation.x = currentRot.current.x;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        color="#9FC7D4"
        size={0.006}
        transparent
        opacity={0.2}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroParticles() {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 2.5], fov: 60 }}
      style={{ background: "transparent" }}
    >
      <ParticlesField />
      <Preload all />
    </Canvas>
  );
}
