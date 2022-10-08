import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import colors from "nice-color-palettes";
import vertex from '../shaders/vertex.glsl'
import fragment from '../shaders/fragment.glsl'

let pallete = colors[Math.floor(Math.random() * colors.length)];
pallete = pallete.map((color) => new THREE.Color(color));

const Plane = () => {
  const meshRef = useRef();

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      uColor: { value: pallete },
      resolution: { value: new THREE.Vector4() },
    }), []
  );

  useFrame((state) => {
    const { clock } = state;
    meshRef.current.material.uniforms.time.value = clock.getElapsedTime() / 100;
  });

  return (
    <mesh
      ref={meshRef}
    >
      <planeGeometry args={[2.5, 2.5, 400, 400]} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms}
      />
    </mesh>
  );
}

const Hero = () => {
  return (
    <Canvas camera={{ position: [0.0, 0.0, 0.5] }}>
      <ambientLight />
      <Plane />
    </Canvas>
  );
};

export default Hero;
