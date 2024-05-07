"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useProgress, Html, ScrollControls } from "@react-three/drei";
import Model1 from "./Model1";
// import Words from "./Text";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}</Html>;
}

export default function Scene1() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
      <directionalLight position={[5, 5, 5]} intensity={4} />
      <Suspense fallback={<Loader />} />
      <ScrollControls damping={0.2} pages={1}>
        <Model1 />
        {/* <Words /> */}
      </ScrollControls>
    </Canvas>
  );
}
