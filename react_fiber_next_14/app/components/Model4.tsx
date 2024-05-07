import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/wash_basin.glb");

export default function Model4() {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/wash_basin.glb");
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    console.log(actions);

    //@ts-ignore
    // actions["Scene"].play().paused = true;
  }, []);
  // useFrame(
  //   () =>
  //     // @ts-ignore
  //     (actions["Scene"].time =
  //       //@ts-ignore
  //       actions["Scene"]?.getClip().duration * scroll.offset) / 3
  //   //@ts-ignore
  // );
  useFrame(
    () =>
      // @ts-ignore
      (scene.rotation.y = scroll.offset * Math.PI)
    // (scene.rotation.y = scroll.offset * Math.PI)
    //@ts-ignore
  );

  return (
    <group ref={group}>
      <primitive object={scene} scale={0.2} />
    </group>
  );
}
