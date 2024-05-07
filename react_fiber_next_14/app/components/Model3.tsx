import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/robot_playground.glb");

export default function Model3() {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    //@ts-ignore
    actions["Experiment"].play().paused = true;
  }, []);
  useFrame(
    () =>
      // @ts-ignore
      (actions["Experiment"].time =
        //@ts-ignore
        actions["Experiment"]?.getClip().duration * scroll.offset) / 3
    //@ts-ignore
  );
  useFrame(
    () =>
      // @ts-ignore
      (scene.rotation.y = scroll.offset * Math.PI)
    //@ts-ignore
  );

  return (
    <group ref={group}>
      <primitive object={scene} scale={2} />
    </group>
  );
}
