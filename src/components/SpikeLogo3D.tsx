"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

function SpikeMesh() {
  const ref = useRef<THREE.Mesh>(null);
  const data = useLoader(SVGLoader, "/spike.svg");

  const geometry = useMemo(() => {
    const shapes = data.paths.flatMap((p) => SVGLoader.createShapes(p));
    const geos = shapes.map(
      (shape) =>
        new THREE.ExtrudeGeometry(shape, {
          depth: 70,
          bevelEnabled: true,
          bevelThickness: 16,
          bevelSize: 12,
          bevelSegments: 8,
          curveSegments: 48,
        })
    );
    const merged = mergeGeometries(geos, false) ?? geos[0];
    merged.center();
    merged.computeBoundingBox();
    const size = new THREE.Vector3();
    merged.boundingBox!.getSize(size);
    const scale = 5.3 / Math.max(size.x, size.y);
    merged.scale(scale, scale, scale);
    merged.computeVertexNormals();
    return merged;
  }, [data]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.7;
  });

  return (
    <mesh ref={ref} geometry={geometry} rotation={[0.3, 0, 0]}>
      <meshPhysicalMaterial
        color="#f1bccd"
        roughness={0.3}
        metalness={0}
        clearcoat={1}
        clearcoatRoughness={0.22}
        sheen={0.6}
        sheenColor="#ffd9e8"
        sheenRoughness={0.4}
      />
    </mesh>
  );
}

export default function SpikeLogo3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    // Force R3F à (re)mesurer son conteneur après montage (ResizeObserver
    // parfois muet selon l'environnement).
    const t = setTimeout(() => window.dispatchEvent(new Event("resize")), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="w-full select-none"
      style={{ height: "90vh", minHeight: 560 }}
    >
      {mounted && (
        <Canvas
          camera={{ position: [0, 0, 8], fov: 38 }}
          dpr={[1, 2]}
          gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 6, 5]} intensity={1.4} />
          <directionalLight
            position={[-6, -2, 3]}
            intensity={0.5}
            color="#ffd0e2"
          />
          <Suspense fallback={null}>
            <SpikeMesh />
            <Environment resolution={256}>
              <Lightformer
                intensity={2.5}
                position={[0, 2, 4]}
                scale={[6, 6, 1]}
                color="#ffffff"
              />
              <Lightformer
                intensity={1.4}
                position={[-4, -1, 3]}
                scale={[4, 4, 1]}
                color="#ffd0e2"
              />
              <Lightformer
                intensity={1}
                position={[4, 1, -3]}
                scale={[4, 4, 1]}
                color="#ffffff"
              />
            </Environment>
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
