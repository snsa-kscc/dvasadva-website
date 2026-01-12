import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import colors from "nice-color-palettes";
import vertex from "../../shaders/vertex.glsl";
import fragment from "../../shaders/fragment.glsl";

let palette = colors[Math.floor(Math.random() * colors.length)];
const paletteColors = palette.map((color: string) => new THREE.Color(color));

function Plane() {
  const meshRef = useRef<THREE.Mesh>(null!);

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      uColor: { value: paletteColors },
      resolution: { value: new THREE.Vector4() },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    const material = meshRef.current.material as THREE.ShaderMaterial;
    material.uniforms.time.value = clock.getElapsedTime() / 100;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2.5, 2.5, 400, 400]} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function Hero() {
  return (
    <Canvas camera={{ position: [0.0, 0.0, 0.5] }}>
      <ambientLight />
      <Plane />
    </Canvas>
  );
}
