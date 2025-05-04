import React, { useRef, useState } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'

import SlidingPane from "react-sliding-pane"
import "react-sliding-pane/dist/react-sliding-pane.css"

async function resetMoveCam({target, fromTargetPosition}) {
  useFrame((state) => {
    const [tx, ty, tz] = fromTargetPosition


  })
  return null
}



function MoveCam({ target, clicked, targetPosition }) {
  useFrame((state) => {
    if (clicked && target) {
      const [tx, ty, tz] = targetPosition
      const targetVec = new THREE.Vector3(tx, ty, tz)
      state.camera.position.lerp(targetVec.clone().add(new THREE.Vector3(0, 5, 5)), 0.05)

      state.camera.lookAt(targetVec)
      
    }
  })

  return null
}

export function PassName(name, activeB, handleClick) {
  if (name === activeB) {
    handleClick(name)
  }
  
  return null
}

export function DasMap(props) {
  const { nodes, materials } = useGLTF('/DASMA.glb')
  const [ activeBarangay, setActiveBarangay ] = useState(null)
  const [clicked, setClicked] = useState(false)  // State to check if mesh is clicked
  const [targetPosition, setTargetPosition] = useState([0, 0, 0])
  const brgyRef = useRef({})

  const [state, setState] = useState({
      isPaneOpen: false,
      isPaneOpenLeft: false,
  })

  const handleClick = (name) => {
    if (activeBarangay === name) {
      setState({ isPaneOpen: true }) // Open the sliding pane
      setActiveBarangay(null) // Unselect the barangay
      setClicked(false)       // Reset clicked state
      resetCamera()
    } else if (!activeBarangay) {
      // If no barangay is selected, set the clicked barangay as active
      setActiveBarangay(name)
      setClicked(true)
      
      // Store the position of the selected barangay
      if (brgyRef.current && brgyRef.current[name]) {
        const mesh = brgyRef.current[name]
        const box = new THREE.Box3().setFromObject(mesh)
        const center = new THREE.Vector3()
        box.getCenter(center)
        setTargetPosition([center.x, center.y, center.z])
      }
    }

  }

  const resetCamera = () => {
    setClicked(false)
    setTargetPosition([0, 0, 0])  // Set to default position if resetting
  }


  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          ref={(el) => {if (el) brgyRef.current["Santa_Fe"] = el}}
          onClick={() => {
            console.log("Clicked Santa_Fe")
            handleClick('Santa_Fe')
          }}
          geometry={nodes.Santa_Fe.geometry}  
          material={materials['SVGMat.032']}
          position={[1.042, 0.009, -0.049]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Santa_Fe' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Burol_I"] = el}}
          onClick={() => {
            console.log("Clicked Burol_I")
            handleClick('Burol_I')
          }}
          geometry={nodes.Burol_I.geometry}
          material={materials['SVGMat.032']}
          position={[-0.259, 0.016, -2.853]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Burol_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Burol_II"] = el}}
          onClick={() => { 
            console.log("Clicked Burol_II") 
            handleClick('Burol_II')
          }}
          geometry={nodes.Burol_II.geometry}
          material={materials['SVGMat.032']}
          position={[0.775, 0.009, -0.736]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Burol_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Burol_III"] = el}}   
          onClick={() => {
            console.log("Clicked Burol_III")
            handleClick('Burol_III')
          }}
          geometry={nodes.Burol_III.geometry}
          material={materials['SVGMat.032']}
          position={[0.138, 0.009, -3.526]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Burol_III' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Burol_Main"] = el}}
          onClick={() => {
            console.log("Clicked Burol_Main")
            handleClick('Burol_Main')
          }}
          geometry={nodes.Burol_Main.geometry}
          material={materials['SVGMat.032']}
          position={[-3.165, 0.009, -3.017]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Burol_Main' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Datu_Esmael"] = el}}
          onClick={() => {
            console.log("Clicked Datu_Esmael")
            handleClick('Datu_Esmael')
          }}
          geometry={nodes.Datu_Esmael.geometry}
          material={materials['SVGMat.032']}
          position={[-0.393, 0.009, -2.701]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Datu_Esmael' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Emannuel_Bergado_I"] = el}}  
          onClick={() => {
            console.log("Clicked Emannuel_Bergado_I")
            handleClick('Emannuel_Bergado_I')
          }}
          geometry={nodes.Emannuel_Bergado_I.geometry}
          material={materials['SVGMat.032']}
          position={[-0.053, 0.009, 0.7]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Emannuel_Bergado_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Emannuel_Bergado_II"] = el}}
          onClick={() => {
            console.log("Clicked Emannuel_Bergado_II")
            handleClick('Emannuel_Bergado_II')
          }}
          geometry={nodes.Emannuel_Bergado_II.geometry}
          material={materials['SVGMat.032']}
          position={[0.365, 0.009, 1.017]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Emannuel_Bergado_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Fatima_I"] = el}}   
          onClick={() => {
            console.log("Clicked Fatima_I")
            handleClick('Fatima_I')
          }}
          geometry={nodes.Fatima_I.geometry}
          material={materials['SVGMat.032']}
          position={[-0.016, 0.009, -0.744]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Fatima_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Fatima_I(2)"] = el}}
          onClick={() => {
            console.log("Clicked Fatima_I(2)")
            handleClick('Fatima_I(2)')
          }}
          geometry={nodes['Fatima_I(2)'].geometry}
          material={materials['SVGMat.032']}
          position={[0.147, 0.009, 0.246]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Fatima_I(2)' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Fatima_II"] = el}}
          onClick={() => {
            console.log("Clicked Fatima_II")
            handleClick('Fatima_II')
          }}
          geometry={nodes.Fatima_II.geometry}
          material={materials['SVGMat.032']}
          position={[0.682, 0.009, 0.84]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Fatima_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Fatima_III"] = el}}
          onClick={() => {
            console.log("Clicked Fatima_III")
            handleClick('Fatima_III')
          }}
          geometry={nodes.Fatima_III.geometry}
          material={materials['SVGMat.032']}
          position={[1.03, 0.009, 1.432]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Fatima_III' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["H2"] = el}}
          onClick={() => {
            console.log("Clicked H2")
            handleClick('H2')
          }}
          geometry={nodes.H2.geometry}
          material={materials['SVGMat.032']}
          position={[-0.56, 0.009, -2.359]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='H2' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Langkaan_I"] = el}} 
          onClick={() => {
            console.log("Clicked Langkaan_I")
            handleClick('Langkaan_I')
          }}
          geometry={nodes.Langkaan_I.geometry}
          material={materials['SVGMat.032']}
          position={[-4.333, 0.009, 4.219]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Langkaan_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Langkaan_II"] = el}}
          onClick={() => {
            console.log("Clicked Langkaan_II")
            handleClick('Langkaan_II')
          }}
          geometry={nodes.Langkaan_II.geometry}
          material={materials['SVGMat.032']}
          position={[-5.95, 0.009, -0.206]}
          rotation={[0, 0.017, 0]}
          scale={19.823}
        >
          <meshStandardMaterial color={activeBarangay ==='Langkaan_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Luzviminda_I"] = el}}     
          onClick={() => {
            console.log("Clicked Luzviminda_I")
            handleClick('Luzviminda_I')
          }}
          geometry={nodes.Luzviminda_I.geometry}
          material={materials['SVGMat.032']}
          position={[1.217, 0.009, 0.744]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Luzviminda_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Luzviminda_II"] = el}}
          onClick={() => {
            console.log("Clicked Luzviminda_II")
            handleClick('Luzviminda_II')
          }}
          geometry={nodes.Luzviminda_II.geometry}
          material={materials['SVGMat.032']}
          position={[1.679, 0.009, 1.834]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Luzviminda_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Paliparan_I"] = el}}
          onClick={() => {
            console.log("Clicked Paliparan_I")
            handleClick('Paliparan_I')
          }}
          geometry={nodes.Paliparan_I.geometry}
          material={materials['SVGMat.032']}
          position={[3.886, 0.009, 4.573]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Paliparan_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Paliparan_II"] = el}}
          onClick={() => {
            console.log("Clicked Paliparan_II")
            handleClick('Paliparan_II')
          }}
          geometry={nodes.Paliparan_II.geometry}
          material={materials['SVGMat.032']}
          position={[3.774, 0.009, 1.949]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Paliparan_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Paliparan_III"] = el}} 
          onClick={() => {
            console.log("Clicked Paliparan_III")
            handleClick('Paliparan_III')
          }}
          geometry={nodes.Paliparan_III.geometry}
          material={materials['SVGMat.032']}
          position={[3.37, 0.009, -0.875]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Paliparan_III' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Sabang"] = el}}
          onClick={() => {
            console.log("Clicked Sabang")
            handleClick('Sabang')
          }}
          geometry={nodes.Sabang.geometry}
          material={materials['SVGMat.032']}
          position={[-6.713, 0.009, -6.095]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Sabang' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Salawag"] = el}}
          onClick={() => {
            console.log("Clicked Salawag")
            handleClick('Salawag')
          }}
          
          geometry={nodes.Salawag.geometry}
          material={materials['SVGMat.032']}
          position={[-1.468, 0.009, -7.783]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Salawag' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Salitran_I"] = el}}
          onClick={() => {
            console.log("Clicked Salitran_I")
            handleClick('Salitran_I')
          }}
          geometry={nodes.Salitran_I.geometry}
          material={materials['SVGMat.032']}
          position={[-4.915, 0.009, -7.265]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Salitran_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Salitran_II"] = el}}
          onClick={() => {
            console.log("Clicked Salitran_II")
            handleClick('Salitran_II')
          }}
          geometry={nodes.Salitran_II.geometry}
          material={materials['SVGMat.032']}
          position={[-4.367, 0.009, -5.237]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Salitran_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Salitran_III"] = el}}
          onClick={() => {
            console.log("Clicked Salitran_III")
            handleClick('Salitran_III')
          }}
          geometry={nodes.Salitran_III.geometry}
          material={materials['SVGMat.032']}
          position={[-3.003, 0.009, -6.873]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Salitran_III' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Salitran_IV"] = el}}
          onClick={() => {
            console.log("Clicked Salitran_IV")
            handleClick('Salitran_IV')
          }}
          geometry={nodes.Salitran_IV.geometry}
          material={materials['SVGMat.032']}
          position={[-2.754, 0.009, -7.807]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Salitran_IV' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Sampaloc_I"] = el}}
          onClick={() => {
            console.log("Clicked Sampaloc_I")
            handleClick('Sampaloc_I')
          }}
          geometry={nodes.Sampaloc_I.geometry}
          material={materials['SVGMat.032']}
          position={[-0.892, 0.009, 3.305]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Sampaloc_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Sampaloc_II"] = el}}
          onClick={() => {
            console.log("Clicked Sampaloc_II")
            handleClick('Sampaloc_II')
          }}
          geometry={nodes.Sampaloc_II.geometry}
          material={materials['SVGMat.032']}
          position={[-0.786, 0.009, 5.382]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Sampaloc_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Sampaloc_II(2)"] = el}}
          onClick={() => {
            console.log("Clicked Sampaloc_II(2)")
            handleClick('Sampaloc_II(2)')
          }}
          geometry={nodes['Sampaloc_II(2)'].geometry}
          material={materials['SVGMat.032']}
          position={[-0.761, 0.009, 5.03]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Sampaloc_II(2)' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Sampaloc_III"] = el}}
          onClick={() => {
            console.log("Clicked Sampaloc_III")
            handleClick('Sampaloc_III')
          }}
          geometry={nodes.Sampaloc_III.geometry}
          material={materials['SVGMat.032']}
          position={[2.578, 0.009, 5.414]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Sampaloc_III' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Sampaloc_IV"] = el}}        
          onClick={() => {
            console.log("Clicked Sampaloc_IV")
            handleClick('Sampaloc_IV')
          }}
          geometry={nodes.Sampaloc_IV.geometry}
          material={materials['SVGMat.032']}
          position={[0.08, 0.009, 1.373]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Sampaloc_IV' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Sampaloc_V"] = el}}
          onClick={() => {
            console.log("Clicked Sampaloc_V")
            handleClick('Sampaloc_V')
          }}
          geometry={nodes.Sampaloc_V.geometry}
          material={materials['Material.001']}
          position={[0.884, 0.092, 6.801]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Sampaloc_V' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Agustin_I"] = el}}
          onClick={() => {
            console.log("Clicked San_Agustin_I")
            handleClick('San_Agustin_I')
          }}
          geometry={nodes.San_Agustin_I.geometry}
          material={materials['SVGMat.032']}
          position={[-4.19, 0.027, 1.485]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Agustin_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Agustin_II"] = el}}
          onClick={() => {
            console.log("Clicked San_Agustin_II")
            handleClick('San_Agustin_II')
          }}
          geometry={nodes.San_Agustin_II.geometry}
          material={materials['SVGMat.032']}
          position={[-3.19, 0.015, -0.138]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Agustin_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Agustin_III"] = el}}
          onClick={() => {
            console.log("Clicked San_Agustin_III")
            handleClick('San_Agustin_III')
          }}
          geometry={nodes.San_Agustin_III.geometry}
          material={materials['SVGMat.032']}
          position={[-4.119, 0.009, -0.286]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Agustin_III' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Andres_I"] = el}}
          onClick={() => {
            console.log("Clicked San_Andres_I")
            handleClick('San_Andres_I')
          }}
          geometry={nodes.San_Andres_I.geometry}
          material={materials['SVGMat.032']}
          position={[1.492, 0.009, -0.315]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Andres_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Andres_II"] = el}}
          onClick={() => {
            console.log("Clicked San_Andres_II")
            handleClick('San_Andres_II')
          }}
          geometry={nodes.San_Andres_II.geometry}
          material={materials['SVGMat.032']}
          position={[1.856, 0.009, 0.024]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Andres_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Antonio_De_Padua_I"] = el}}
          onClick={() => {
            console.log("Clicked San_Antonio_De_Padua_I")
            handleClick('San_Antonio_De_Padua_I')
          }}
          geometry={nodes.San_Antonio_De_Padua_I.geometry}
          material={materials['SVGMat.032']}
          position={[-0.408, 0.009, 0.191]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Antonio_De_Padua_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Antonio_De_Padua_II"] = el}}
          onClick={() => {
            console.log("Clicked San_Antonio_De_Padua_II")
            handleClick('San_Antonio_De_Padua_II')
          }}
          geometry={nodes.San_Antonio_De_Padua_II.geometry}
          material={materials['SVGMat.032']}
          position={[-0.45, 0.009, 0.682]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Antonio_De_Padua_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Dionisio"] = el}}
          onClick={() => {
            console.log("Clicked San_Dionisio")
            handleClick('San_Dionisio')
          }}
          geometry={nodes.San_Dionisio.geometry}
          material={materials['SVGMat.032']}
          position={[-1.102, 0.009, -3.716]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Dionisio' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Francisco_I"] = el}}
          onClick={() => {
            console.log("Clicked San_Francisco_I")
            handleClick('San_Francisco_I')
          }}
          geometry={nodes.San_Francisco_I.geometry}
          material={materials['SVGMat.032']}
          position={[1.275, 0.009, -0.225]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Francisco_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Francisco_I001"] = el}}
          onClick={() => {
            console.log("Clicked San_Francisco_I001")
            handleClick('San_Francisco_I001')
          }}
          geometry={nodes.San_Francisco_I001.geometry}
          material={materials['SVGMat.032']}
          position={[1.367, 0.009, 0.113]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Francisco_I001' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Francisco_I(2)"] = el}}
          onClick={() => {
            console.log("Clicked San_Francisco_I(2)")
            handleClick('San_Francisco_I(2)')
          }}
          geometry={nodes['San_Francisco_I(2)'].geometry}
          material={materials['SVGMat.032']}
          position={[1.245, 0.009, -0.255]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Francisco_I(2)' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_IL_I"] = el}}
          onClick={() => {
            console.log("Clicked San_IL_I")
            handleClick('San_IL_I')
          }}
          geometry={nodes.San_IL_I.geometry}
          material={materials['SVGMat.032']}
          position={[-1.479, 0.009, -4.325]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_IL_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_IL_II"] = el}}
          onClick={() => {
            console.log("Clicked San_IL_II")
            handleClick('San_IL_II')
          }}
          geometry={nodes.San_IL_II.geometry}
          material={materials['SVGMat.032']}
          position={[-1.777, 0.009, -3.961]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_IL_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Jose"] = el}}
          onClick={() => {
            console.log("Clicked on San_Jose")
            handleClick('San_Jose')
          }}
          geometry={nodes.San_Jose.geometry}
          material={materials['SVGMat.032']}
          position={[-6.434, 0.017, -3.738]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Jose' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Juan"] = el}}
          onClick={() => {
            console.log("Clicked San_Juan")
            handleClick('San_Juan')
          }}
          geometry={nodes.San_Juan.geometry}
          material={materials['SVGMat.032']}
          position={[-1.673, 0.009, -3.585]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Juan' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Lorenzo_Ruis_I"] = el}}
          onClick={() => {
            console.log("Clicked San_Lorenzo_Ruis_I")
            handleClick('San_Lorenzo_Ruis_I')
          }}
          geometry={nodes.San_Lorenzo_Ruis_I.geometry}
          material={materials['SVGMat.032']}
          position={[-0.008, 0.009, 1.848]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Lorenzo_Ruis_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Lorenzo_Ruis_II"] = el}}
          onClick={() => {
            console.log("Clicked San_Lorenzo_Ruis_II")
            handleClick('San_Lorenzo_Ruis_II')
          }}
          geometry={nodes.San_Lorenzo_Ruiz_II.geometry}
          material={materials['SVGMat.032']}
          position={[-0.485, 0.009, 1.738]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Lorenzo_Ruis_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Luis_I"] = el}} 
          onClick={() => {
            console.log("Clicked San_Luis_I")
            handleClick('San_Luis_I')
          }}
          geometry={nodes.San_Luis_I.geometry}
          material={materials['SVGMat.032']}
          position={[0.625, 0.009, 1.764]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Luis_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Luis_II"] = el}}
          onClick={() => {
            console.log("Clicked San_Luis_II")
            handleClick('San_Luis_II')
          }}
          geometry={nodes.San_Luis_II.geometry}
          material={materials['SVGMat.032']}
          position={[0.664, 0.009, 1.08]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Luis_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Manuel_I"] = el}}
          onClick={() => {
            console.log("Clicked San_Manuel_I")
            handleClick('San_Manuel_I')
          }}
          geometry={nodes.San_Manuel_I.geometry}
          material={materials['SVGMat.032']}
          position={[-1.516, 0.009, -2.828]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Manuel_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Manuel_II"] = el}}
          onClick={() => {
            console.log("Clicked San_Manuel_II")
            handleClick('San_Manuel_II')
          }}
          geometry={nodes.San_Manuel_II.geometry}
          material={materials['SVGMat.032']}
          position={[-1.347, 0.009, -2.697]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Manuel_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Mateo"] = el}}  
          onClick={() => {
            console.log("Clicked San_Mateo")
            handleClick('San_Mateo')
          }}
          geometry={nodes.San_Mateo.geometry}
          material={materials['SVGMat.032']}
          position={[1.548, 0.018, 0.686]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Mateo' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Miguel_I"] = el}}
          onClick={() => {
            console.log("Clicked San_Miguel_I")
            handleClick('San_Miguel_I')
          }}
          geometry={nodes.San_Miguel_I.geometry}
          material={materials['SVGMat.032']}
          position={[-2.128, 0.009, -2.978]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Miguel_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Miguel_II"] = el}}
          onClick={() => {
            console.log("Clicked San_Miguel_II")
            handleClick('San_Miguel_II')
          }}
          geometry={nodes.San_Miguel_II.geometry}
          material={materials['SVGMat.032']}
          position={[-1.792, 0.009, -3.13]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Miguel_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Nicholas_I"] = el}}
          onClick={() => {
            console.log("Clicked San_Nicholas_I")
            handleClick('San_Nicholas_I')
          }}
          geometry={nodes.San_Nicholas_I.geometry}
          material={materials['SVGMat.032']}
          position={[1.779, 0.009, 1.112]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Nicholas_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Nicholas_II"] = el}}
          onClick={() => {
            console.log("Clicked San_Nicholas_II")
            handleClick('San_Nicholas_II')
          }}
          geometry={nodes.San_Nicholas_II.geometry}
          material={materials['SVGMat.032']}
          position={[2.25, 0.009, 0.77]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Nicholas_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Roque"] = el}}
          onClick={() => {
            console.log("Clicked San_Roque")
            handleClick('San_Roque')
          }}
          geometry={nodes.San_Roque.geometry}
          material={materials['SVGMat.032']}
          position={[1.64, 0.009, -0.514]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Roque' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Simon"] = el}} 
          onClick={() => {
            console.log("Clicked San_Simon")
            handleClick('San_Simon')
          }}
          geometry={nodes.San_Simon.geometry}
          material={materials['SVGMat.032']}
          position={[2.133, 0.009, -0.115]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='San_Simon' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Cristina_I"] = el}}
          onClick={() => {
            console.log("Clicked San_Cristina_I")
            handleClick('Santa_Cristina_I')
          }}
          geometry={nodes.Santa_Cristina_I.geometry}
          material={materials['SVGMat.032']}
          position={[1.957, 0.009, -0.55]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Santa_Cristina_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["San_Cristina_II"] = el}}
          onClick={() => {
            console.log("Clicked San_Cristina_II")
            handleClick('Santa_Cristina_II')
          }}
          geometry={nodes.Santa_Cristina_II.geometry}
          material={materials['SVGMat.032']}
          position={[1.358, 0.009, -0.637]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Santa_Cristina_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Santa_Cruz_I"] = el}}
          onClick={() => {
            console.log("Clicked Santa_Cruz_I")
            handleClick('Santa_Cruz_I')
          }}
          geometry={nodes.Santa_Cruz_I.geometry}
          material={materials['SVGMat.032']}
          position={[-0.497, 0.013, 1.36]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Santa_Cruz_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Santa_Cruz_II"] = el}}
          onClick={() => {
            console.log("Clicked Santa_Cruz_II")
            handleClick('Santa_Cruz_II')
          }}
          geometry={nodes.Santa_Cruz_II.geometry}
          material={materials['SVGMat.032']}
          position={[-0.434, 0.009, 1.018]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Santa_Cruz_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Santa_Lucia"] = el}}
          onClick={() => {
            console.log("Clicked Santa_Lucia")
            handleClick('Santa_Lucia')
          }}
          geometry={nodes.Santa_Lucia.geometry}
          material={materials['SVGMat.032']}
          position={[-1.377, 0.009, -3.204]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Santa_Lucia' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Santa_Maria"] = el}} 
          onClick={() => {
            console.log("Clicked Santa_Maria")
            handleClick('Santa_Maria')
          }}
          geometry={nodes.Santa_Maria.geometry}
          material={materials['SVGMat.032']}
          position={[-0.612, 0.009, -0.634]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Santa_Maria' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Santo_Cristo"] = el}}
          onClick={() => {
            console.log("Clicked Santo_Cristo")
            handleClick('Santo_Cristo')
          }}
          geometry={nodes.Santo_Cristo.geometry}
          material={materials['SVGMat.032']}
          position={[-0.593, 0.009, -3.767]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Santo_Cristo' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Santo_Estoban"] = el}}  
          onClick={() => {
            console.log("Clicked Santo_Estoban")
            handleClick('Santo_Estoban')
          }}
          geometry={nodes.Santo_Estoban.geometry}
          material={materials['SVGMat.032']}
          position={[-0.373, 0.009, -3.045]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Santo_Estoban' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Santo_Nino_I"] = el}}  
          onClick={() => {
            console.log("Clicked Santo_Nino_I")
            handleClick('Santo_Nino_I')
          }}
          geometry={nodes.Santo_Nino_I.geometry}
          material={materials['SVGMat.032']}
          position={[-1.103, 0.009, -4.126]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Santo_Nino_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Santo_Nino_II"] = el}}
          onClick={() => {
            console.log("Clicked Santo_Nino_II")
            handleClick('Santo_Nino_II')
          }}
          geometry={nodes.Santo_Nino_II.geometry}
          material={materials['SVGMat.032']}
          position={[-0.671, 0.009, -4.127]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Santo_Nino_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["St_Peter_I"] = el}}
          onClick={() => {
            console.log("Clicked St_Peter_I")
            handleClick('St_Peter_I')
          }}
          geometry={nodes.St_Peter_I.geometry}
          material={materials['SVGMat.032']}
          position={[-2, 0.004, -3.08]}
          scale={[32.013, 19.468, 32.013]}
        >
          <meshStandardMaterial color={activeBarangay ==='St_Peter_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["St_Peter_II"] = el}}
          onClick={() => {
            console.log("Clicked St_Peter_II")
            handleClick('St_Peter_II')
          }}
          geometry={nodes.St_Peter_II.geometry}
          material={materials['SVGMat.032']}
          position={[-2.331, 0.004, -3.061]}
          scale={[34.922, 20.005, 34.922]}
        >
          <meshStandardMaterial color={activeBarangay ==='St_Peter_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Victoria_Reyes"] = el}}
          onClick={() => {
            console.log("Clicked Victoria_Reyes")
            handleClick('Victoria_Reyes')
          }}
          geometry={nodes.Victoria_Reyes.geometry}
          material={materials['SVGMat.032']}
          position={[2.999, 0.011, 1.468]}
          scale={[51.524, 19.433, 51.524]}
        >
          <meshStandardMaterial color={activeBarangay ==='Victoria_Reyes' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Zone_I"] = el}}
          onClick={() => {
            console.log("Clicked Zone_I")
            handleClick('Zone_I')
          }}
          geometry={nodes.Zone_I.geometry}
          material={materials['SVGMat.032']}
          position={[-4.616, 0.009, -1.847]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Zone_I' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Zone_IA"] = el}}
          onClick={() => {
            console.log("Clicked Zone_IA")
            handleClick('Zone_IA')
          }}
          geometry={nodes.Zone_IA.geometry}
          material={materials['SVGMat.032']}
          position={[-4.353, 0.012, -1.319]}
          rotation={[Math.PI, -0.052, Math.PI]}
          scale={[-45.186, -20.06, -45.186]}
        >
          <meshStandardMaterial color={activeBarangay ==='Zone_IA' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Zone_II"] = el}}
          onClick={() => {
            console.log("Clicked Zone_II")
            handleClick('Zone_II')
          }}
          geometry={nodes.Zone_II.geometry}
          material={materials['SVGMat.032']}
          position={[-5.079, 0.009, -1.373]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Zone_II' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Zone_III"] = el}}
          onClick={() => {
            console.log("Clicked Zone_III")
            handleClick('Zone_III')
          }}
          geometry={nodes.Zone_III.geometry}
          material={materials['SVGMat.032']}
          position={[-5.59, 0.038, -1.215]}
          scale={19.644}
        >
          <meshStandardMaterial color={activeBarangay ==='Zone_III' ? 'red' : 'gray'}/>
        </mesh>

        <mesh
          ref={(el) => {if (el) brgyRef.current["Zone_IV"] = el}}
          onClick={() => {
            console.log("Clicked Zone_IV")
            handleClick('Zone_IV')
          }}
          geometry={nodes.Zone_IV.geometry}
          material={materials['SVGMat.032']}
          position={[-4.006, 0.015, -0.041]}
          scale={[43.436, 19.131, 43.436]}
        >
          <meshStandardMaterial color={activeBarangay ==='Zone_IV' ? 'red' : 'gray'}/>
        </mesh>

        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 3}
          dampingFactor={0.25}
          autoRotate 
          autoRotateSpeed={1}
          enablePan={false}
          minDistance={20}
          maxDistance={60}
          target={new THREE.Vector3(...targetPosition)}
        />
        <MoveCam target={activeBarangay ? brgyRef.current[activeBarangay] : null} clicked={clicked} targetPosition={targetPosition}/>
      </group>
      
    </>
  )
}

useGLTF.preload('/DASMA.glb')