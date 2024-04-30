import { Html } from "@react-three/drei";

export default function Text() {
  return (
    <Html>
      <div className='w-64'>
        <header>text</header>
        <main>
          <div className='child-one'>text</div>
          <div className='child-one'>more text</div>
          <div className='child-two'>Look at the thing</div>
        </main>
        <footer>Please buy it</footer>
      </div>
    </Html>
  );
}
