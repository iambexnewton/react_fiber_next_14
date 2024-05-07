"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useProgress, Html, ScrollControls, Scroll } from "@react-three/drei";
import Model2 from "./Model2";
import Words from "./Text";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}</Html>;
}

export default function Scene2() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className='canvas'>
      <directionalLight position={[5, 5, 5]} intensity={4} />
      <Suspense fallback={<Loader />} />
      <ScrollControls>
        <Scroll>
          <Model2 />
          <Words />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
