import { Canvas } from "@react-three/fiber"
import { Environment, PerspectiveCamera, useGLTF} from "@react-three/drei"
import { DasMap } from "../Components/Map.jsx"
import './App.css'
import { Suspense, useState } from "react"
import React from "react"

import SlidingPane from "react-sliding-pane"
import "react-sliding-pane/dist/react-sliding-pane.css"


export default function index() {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  })
 return (
  <div className="Parent">  

    <div onClick={  
      () => setState({ isPaneOpen: true })
    } className="sidebar_Brgy_Button"><p>Barangays</p></div>
    <SlidingPane
                className="sidebar_Brgy"
                width="300px"
                overlayClassName="some-custom-overlay-class"
                isOpen={state.isPaneOpen}
                from="left"
                
                title="Dasmariñas Barangays"
                subtitle="Optional subtitle."
                onRequestClose={() => {
                // triggered on "<" on left top click or on outside click
                setState({ isPaneOpen: false });
            }}
            >
    </SlidingPane>


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
  
 )
}
