import React, { useEffect, useRef } from "react";
import { Html, useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/tap.glb");

export default function Model2() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF("/tap.glb");
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    //@ts-ignore
    actions["Animation"].play().paused = true;
  }, []);
  useFrame(
    () =>
      // @ts-ignore
      (actions["Animation"].time =
        //@ts-ignore
        actions["Animation"]?.getClip().duration * scroll.offset) / 3
    //@ts-ignore
  );
  useFrame(
    () =>
      // @ts-ignore
      (scene.rotation.z = scroll.offset * Math.PI)
    //@ts-ignore
  );

  return (
    <group ref={group}>
      <primitive object={scene} scale={10} />
      <Html transform={true}>
        <section className='text'>
          <p>This is some text</p>
        </section>
      </Html>
    </group>
  );
}
