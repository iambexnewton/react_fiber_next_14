import { Html } from "@react-three/drei";

export default function Text() {
  return (
    <Html>
      <div className='w-64'>
        <header>This is a Great Tap</header>
        <main>
          <div className='child-one'>Scroll to see animation</div>
          <div className='child-one'>Look at the Hot tap</div>
          <div className='child-two'>Look at the Cold tap</div>
        </main>
        <footer>Please buy it</footer>
      </div>
    </Html>
  );
}
