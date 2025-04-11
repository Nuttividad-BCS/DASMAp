import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, useGLTF } from "@react-three/drei"
import { DasMap } from "../Components/Map.jsx"
import './App.css'
import { Suspense, useState } from "react"

function Interaction() {
  const { nodes } = useGLTF('../public/DASMA.glb')
  const [ color, setColor] = useState('red')
  
  return (
    <mesh 
      geometry={nodes.Salawag.geometry} 
      onClick={() => {
        console.log("ClIcED SALAWAG")
        setColor(color === 'red' ? 'blue' : 'red')  
      }}  
    >
      <meshStandardMaterial color={color}/>      
    </mesh>

  )
}

export default function index() {
 return (
   <div className="box">
     <Canvas>
        <Suspense fallback={null}>
          <Environment preset="sunset" />

          <OrbitControls autoRotate autoRotateSpeed={1}/> 
          
          {/*<DasMap />*/}
          <Interaction />
         </Suspense>
     </Canvas>
   </div>        
 )
}
