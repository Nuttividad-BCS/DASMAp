import { Canvas } from "@react-three/fiber"
import { render } from 'react-dom'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'
import { Environment, PerspectiveCamera, useGLTF} from "@react-three/drei"
import { DasMap } from "../Components/Map.jsx"
import './App.css'
import { Suspense, useState} from "react"

export function Popup_Info() {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false
  })

  return (
    pass
  )
}

export default function index() {
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
