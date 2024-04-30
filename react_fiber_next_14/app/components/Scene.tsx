"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useProgress, Html, ScrollControls } from "@react-three/drei";
import Model from "./Model";

function Loader() {
  const { progress, active } = useProgress();
  return <Html center>{progress.toFixed(1)}</Html>;
}

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
      <directionalLight position={[5, 5, 5]} intensity={4} />
      <Suspense fallback={<Loader />} />
      <ScrollControls damping={0.2} pages={3}>
        <Model />
      </ScrollControls>
    </Canvas>
  );
}
