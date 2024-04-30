import React, { useCallback, useEffect, useRef } from "react";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/game_ready_wind_turbine_animated.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/game_ready_wind_turbine_animated.glb"
  );
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    console.log(actions);

    //@ts-ignore
    actions["Scene"].play().paused = true;
  }, []);
  useFrame(
    () =>
      // @ts-ignore
      (actions["Scene"].time =
        //@ts-ignore
        actions["Scene"]?.getClip().duration * scroll.offset) / 3
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
      <primitive object={scene} scale={3} />
    </group>
  );
}
