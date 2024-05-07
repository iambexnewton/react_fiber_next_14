"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useProgress, Html, ScrollControls } from "@react-three/drei";
import Model3 from "./Model3";
import Words from "./TextHorizontal";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}</Html>;
}

export default function Scene3() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
      <directionalLight position={[5, 5, 5]} intensity={4} />
      <Suspense fallback={<Loader />} />
      <ScrollControls horizontal damping={0.1}>
        <Model3 />
        <Words />
      </ScrollControls>
    </Canvas>
  );
}
