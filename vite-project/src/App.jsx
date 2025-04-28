import { Canvas, useThree } from "@react-three/fiber"
import { Environment, PerspectiveCamera, useGLTF} from "@react-three/drei"
import { DasMap } from "../Components/Map.jsx"
import './App.css'
import { Suspense, useState, useRef, useEffect } from "react"



export default function index() {
 const brgyRef = useRef(null)
 return (
   <div className="box">
     <Canvas>
        <Suspense fallback={null}>

          <Environment preset="sunset" />
          <PerspectiveCamera makeDefault position={[20, 20, 15]}></PerspectiveCamera>
          
          <DasMap />
         </Suspense>
     </Canvas>
     
   </div>     
      
 )
}
