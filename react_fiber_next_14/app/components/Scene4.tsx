"use client";

import { Canvas, extend } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useProgress, Html, ScrollControls } from "@react-three/drei";
import Model4 from "./Model4";
import Words from "./TextHorizontal";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}</Html>;
}

export default function Scene4() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      orthographic
      camera={{ zoom: 10, position: [30, 50, 30] }}
    >
      <directionalLight position={[5, 5, 5]} intensity={4} />
      <Suspense fallback={<Loader />} />
      <ScrollControls horizontal pages={1}>
        <Model4 />
        <Words />
      </ScrollControls>
    </Canvas>
  );
}
