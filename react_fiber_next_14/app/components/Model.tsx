import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/tap.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF("/tap.glb");
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    console.log(actions);
    //@ts-ignore
    actions["Animation"].play().paused = true;
  }, []);
  useFrame(
    () =>
      //@ts-ignore
      (actions["Animation"].time =
        //@ts-ignore
        actions["Animation"]?.getClip().duration * scroll.offset) / 3
  );

  return (
    <group ref={group}>
      <primitive object={scene} scale={5} />
    </group>
  );
}
