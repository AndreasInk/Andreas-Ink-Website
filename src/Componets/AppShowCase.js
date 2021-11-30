import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, Image as ImageImpl } from '@react-three/drei'
import { ScrollControls, Scroll, useScroll } from './ScrollControls'
import './styles.css'
import Group2 from './Ai/Frame 26.png'
import Group4 from './Ai/Frame 17.png'
import Group73 from './Ai/Frame 18.png'
import Group74 from './Ai/Frame 19.png'
import Group75 from './Ai/Frame 20.png'
import Group21 from './Ai/Frame 21.png'
import Group24 from './Ai/Frame 24.png'
import Group25 from './Ai/Frame 25.png'
import iPad from './Ai/iPad.png'
import { Link, BrowserRouter } from "react-router-dom";
// import A from './Ai/A.png'

// import R from './Ai/V.png'
// import S from './Ai/V.png'
// import V from './Ai/V.png'
// import P from './Ai/V.png'
function Image(props) {
  const ref = useRef()
  const group = useRef()
  const data = useScroll()
  useFrame((state, delta) => {
    group.current.position.z = THREE.MathUtils.damp(group.current.position.z, Math.max(0, data.delta * 50), 4, delta)
    ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, Math.max(0, 1 - data.delta * 1000), 4, delta)
  })
  return (
    <group ref={group}>
    
      <ImageImpl ref={ref} {...props}/>
       {/* onClick={(e) => {window.open("") */}
    </group>
  )
}

function Page({ m = 0.4, urls, ...props }) {
  const { width } = useThree((state) => state.viewport)
  const w = width < 10 ? 1.5 / 3 : 1 / 3
  return (
    <group {...props}>
        
      <Image position={[-width * w, 0, -1]} scale={[width * w - m * 2, 5, 1]} url={urls[0]} />
      
      <Image position={[0, 0, 0]} scale={[width * w - m * 2, 5, 1]} url={urls[1]} />
      <Image position={[width * w, 0, 1]} scale={[width * w - m * 2, 5, 1]} url={urls[2]} />
    </group>
  )
}

function Pages() {
  const { width } = useThree((state) => state.viewport)
  return (
    <>
    
   
      <Page position={[width * 1, 0, 0]} urls={[Group2, Group74, Group73]} />
      <Page position={[width * 0, 0, 0]} urls={[Group21, Group75, iPad]} />
      <Page position={[width * 2, 0, 0]} urls={[Group24, Group25, Group4]} />
      
    </>
  )
}

export default function AppShowCase() {
    return (
       
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
             <BrowserRouter>
          <Suspense fallback={null}>
            <ScrollControls horizontal damping={4} pages={3} distance={1}>
              <Scroll>
                <Pages />
              </Scroll>
     
            </ScrollControls>
            <Preload />
          </Suspense>
          
          </BrowserRouter>
          
        </Canvas>
      )
}
