import React, { useEffect, useRef } from "react";
import { Html, useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/game_ready_wind_turbine_animated.glb");

export default function Model1() {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF(
    "/game_ready_wind_turbine_animated.glb"
  );
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
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

      <Html transform={true}>
        <section className='text'>
          <p>This is some text</p>
        </section>
      </Html>
    </group>
  );
}
