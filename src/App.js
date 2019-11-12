import React, { useRef } from 'react'
import Links from './components/Links'
import './styles.css'
import { Canvas, useFrame } from 'react-three-fiber'

function Thing() {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
  return (
    <mesh
      ref={ref}
      onClick={e => console.log('click')}
      onPointerOver={e => console.log('hover')}
      onPointerOut={e => console.log('unhover')}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

export default function App() {
    return (
      <div class="main">
        <Canvas style={{ background: '#A2CCB6' }} camera={{position: [0,0,5]}}>
          <Thing />
        </Canvas>
        <Links />
        
        {/* <span class="header">Colin Bowen</span> */ }
      </div>
    );
}

