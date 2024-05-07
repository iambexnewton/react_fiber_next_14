"use client";

import * as THREE from "three";
import { Canvas, extend } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import {
  useProgress,
  Html,
  ScrollControls,
  MotionPathControls,
} from "@react-three/drei";
import Model4 from "./Model4";
import Words from "./Text";

extend(THREE);

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}</Html>;
}

export default function Scene4() {
  const poi = useRef();
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      orthographic
      camera={{ zoom: 10, position: [30, 50, 30] }}
    >
      <directionalLight position={[5, 5, 5]} intensity={4} />
      <Suspense fallback={<Loader />} />
      <ScrollControls horizontal damping={0.3} pages={1}>
        <Model4 />
        <Words />
      </ScrollControls>
    </Canvas>
  );
}
