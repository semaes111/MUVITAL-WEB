import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function MethodRing() {
  const ringRef = useRef<THREE.Points>(null);
  const scrollRef = useRef(0);
  const { invalidate } = useThree();
  const reducedMotion = useReducedMotion();

  const geometry = useMemo(() => {
    const torusGeo = new THREE.TorusGeometry(1, 0.35, 16, 90);
    const posAttr = torusGeo.attributes.position;
    const n = posAttr.count;

    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(n * 3);
    const colors = new Float32Array(n * 3);

    const mineralColor = new THREE.Color("#F4F1EA");
    const vitalColor = new THREE.Color("#4FA3A5");
    const clusterSize = Math.floor(n / 4);

    for (let i = 0; i < n; i++) {
      positions[i * 3] = posAttr.getX(i);
      positions[i * 3 + 1] = posAttr.getY(i);
      positions[i * 3 + 2] = posAttr.getZ(i);

      const clusterIdx = Math.floor(i / clusterSize);
      const inCluster = clusterIdx < 4 && (i % clusterSize) < 20;

      if (inCluster) {
        colors[i * 3] = vitalColor.r;
        colors[i * 3 + 1] = vitalColor.g;
        colors[i * 3 + 2] = vitalColor.b;
      } else {
        colors[i * 3] = mineralColor.r * 0.15;
        colors[i * 3 + 1] = mineralColor.g * 0.15;
        colors[i * 3 + 2] = mineralColor.b * 0.15;
      }
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const section = document.getElementById("metodo");
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      scrollRef.current = Math.max(0, Math.min(1, -rect.top / (rect.height - viewH)));
      invalidate();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion, invalidate]);

  useFrame(() => {
    if (!ringRef.current || reducedMotion) return;
    ringRef.current.rotation.z = scrollRef.current * Math.PI * 2;
  });

  return (
    <points ref={ringRef} geometry={geometry} rotation={[0.4, 0, 0]}>
      <pointsMaterial
        size={0.012}
        transparent
        vertexColors
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

export default function AnilloMetodo() {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 2.8], fov: 55 }}
      style={{ background: "transparent" }}
    >
      <MethodRing />
      <Preload all />
    </Canvas>
  );
}
