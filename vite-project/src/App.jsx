import { Canvas } from "@react-three/fiber"
import { Environment, PerspectiveCamera } from "@react-three/drei"
import { DasMap } from "../Components/Map.jsx"
import './App.css'
import { Suspense, useRef, useState, useEffect } from "react"
import React from "react"
import { SlideP } from "../Components/Slide.jsx"
import { BARANGAYS } from '../src/barangays.js'
import * as THREE from 'three'

function getRandomRedShade() {
  const red = 180 + Math.floor(Math.random() * 76);     // 180–255
  const greenBlue = Math.floor(Math.random() * 80);     // 0–79
  const hexColor = `#${red.toString(16).padStart(2, '0')}${greenBlue.toString(16).padStart(2, '0')}${greenBlue.toString(16).padStart(2, '0')}`;
  return hexColor.toUpperCase();
}

export default function App() {
  const [isPaneOpen, setIsPaneOpen] = useState(false)
  const [activeBarangay, setActiveBarangay] = useState(null)
  const [clicked, setClicked] = useState(false)
  const [targetPosition, setTargetPosition] = useState([0, 0, 0])
  const [heatmapped, setheatmapped] = useState(false)
  const brgyRef = useRef({})

  const [barangayColors, setBarangayColors] = useState({})

  useEffect(() => {
    const colors = {}
    BARANGAYS.forEach(brgy => {
      colors[brgy] = getRandomRedShade()
    })
    setBarangayColors(colors)
  }, [])

  const resetCamera = () => {
    setClicked(false)
    setTargetPosition([0, 0, 0])
  }

  const handleHeatmapClick = () => {
    if (heatmapped) {
      setheatmapped(false)
      resetCamera()
    } else {
      setheatmapped(true)
      setClicked(true)
    }
  }

  const handleClick = (name) => {
    if (activeBarangay === name) {
      setActiveBarangay(null)
      setClicked(false)
      resetCamera()
    } else if (!activeBarangay) {
      setActiveBarangay(name)
      setClicked(true)
      if (brgyRef.current && brgyRef.current[name]) {
        const mesh = brgyRef.current[name]
        const box = new THREE.Box3().setFromObject(mesh)
        const center = new THREE.Vector3()
        box.getCenter(center)
        setTargetPosition([center.x, center.y, center.z])
      }
    }
  }

  return (
    <div className="Parent">
      <div className="Main_Header"><h1>D A S M A - P</h1></div>
      <div className="Main_Container">
        <SlideP isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen} handleClick={handleClick} />
        <div className="box">
          <Canvas>
            <Suspense fallback={null}>
              <Environment preset="sunset" />
              <PerspectiveCamera makeDefault position={[10, 15, 10]} />
              <DasMap
                activeBarangay={activeBarangay}
                clicked={clicked}
                targetPosition={targetPosition}
                handleClick={handleClick}
                brgyRef={brgyRef}
                barangayColors={barangayColors}
                heatmapped={heatmapped}
              />
            </Suspense>
          </Canvas>
        </div>
        <div onClick={handleHeatmapClick} className='hmapButton' ><p>H-Map</p></div>
      </div>
    </div>
  )
}
