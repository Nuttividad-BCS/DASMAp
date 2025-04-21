import { Canvas, useThree} from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera, useGLTF} from "@react-three/drei"
import { DasMap } from "../Components/Map.jsx"
import './App.css'
import { Suspense, useState, useRef, useEffect } from "react"

function Controls() {
  const { camera, gl } = useThree()
  const controlsRef = useRef()

  useEffect(() => {
    if(controlsRef.current){
      controlsRef.current.minPolarAngle = 0
      controlsRef.current.minDistance = 10
      controlsRef.current.maxDistance = 50
      controlsRef.current.maxPolarAngle = Math.PI / 3
      controlsRef.current.update()
    }
  }, [camera])


  return (
    <OrbitControls
      autoRotate 
      autoRotateSpeed={0}
      enablePan={false}
      target={[2, 0, 3]}
      ref={controlsRef}
      args={[camera, gl.domElement]}
    />
  )

}

export default function index() {
 return (
   <div className="box">
     <Canvas>
        <Suspense fallback={null}>

          <Environment preset="sunset" />
          <PerspectiveCamera makeDefault position={[20, 20, 15]}></PerspectiveCamera>
          
          <Controls />
          <DasMap />
         </Suspense>
     </Canvas>
     
   </div>     
      
 )
}
