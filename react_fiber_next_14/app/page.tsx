import dynamic from "next/dynamic";

const Scene1 = dynamic(() => import("./components/Scene1"));
const Scene2 = dynamic(() => import("./components/Scene2"));
const Scene3 = dynamic(() => import("./components/Scene3"));
const Scene4 = dynamic(() => import("./components/Scene4"));

export default function Home() {
  return (
    <div>
      <section className='sceneWrapper'>
        <Scene1 />
      </section>
      <section className='sceneWrapper'>
        <Scene2 />
      </section>
      <section className='sceneWrapper'>
        <Scene3 />
      </section>
      <section className='sceneWrapper'>
        <Scene4 />
      </section>
    </div>
  );
}
