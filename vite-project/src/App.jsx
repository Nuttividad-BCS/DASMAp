import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei"
import { DasMap } from "../Components/Map.jsx"
import './App.css'
import { Suspense, useState } from "react"

function Interaction(props) {
  const { nodes } = useGLTF('../public/DASMA.glb')
  const [ Salawag_Color, Salawag_setColor] = useState('gray')
  const [ Salitran_IV_Color, Salitran_IV_setColor] = useState('gray')

  const [ activeBarangay, setActiveBarangay ] = useState(null)

  const handleClick = (name) => {
    setActiveBarangay(prev => (prev === name? null : name))
  }

  const getColor = (name) => activeBarangay === name? 'red' : 'gray'


  return (
    <group {...props} dispose={null}>
      <mesh
        scale={19.644} 
        position={[-1.468, 0.009, -7.783]}
        geometry={nodes.Salawag.geometry} 
        onClick={() => {
          console.log("ClIcED SALAWAG")
          handleClick('Salawag')
        }}  
      >
        <meshStandardMaterial color={getColor('Salawag')}/>      
      </mesh>
      <mesh 
        scale={19.644}
        position={[-2.754, 0.009, -7.807]}
        geometry={nodes.Salitran_IV.geometry} 
        onClick={() => {
          console.log("ClIcED SALITRAN")
          handleClick('Salitran_IV')
        }}  
      >
        <meshStandardMaterial color={getColor('Salitran_IV')}/>   
      </mesh>  
      
    </group>  
  )
}

export default function index() {
 return (
   <div className="box">
     <Canvas>
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <PerspectiveCamera makeDefault position={[0, 20, 0]}></PerspectiveCamera>
          <OrbitControls autoRotate autoRotateSpeed={1}/> 
          
          <DasMap />
          <Interaction />
         </Suspense>
     </Canvas>
   </div>        
 )
}
