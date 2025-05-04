import { Canvas } from "@react-three/fiber"
import { Environment, PerspectiveCamera, useGLTF} from "@react-three/drei"
import { DasMap } from "../Components/Map.jsx"
import './App.css'
import { Suspense, useState } from "react"
import React from "react"
import { SlideP } from "../Components/Slide.jsx"


export default function index() {
const [isPaneOpen, setIsPaneOpen] = useState(false)
 return (
  <div className="Parent">  
    <div className="Main_Header"><h1>D A S M A - P</h1></div>
    <div className="Main_Container">
      <SlideP isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen} />
      <div className="box">
        <Canvas>
            <Suspense fallback={null}>
              <Environment preset="sunset" />
              <PerspectiveCamera makeDefault position={[20, 20, 15]}></PerspectiveCamera>    
              <DasMap />
            </Suspense>
        </Canvas>   
      </div> 
    </div>      
  </div>   
  
 )
}
