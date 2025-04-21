import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function DasMap(props) {
  const { nodes, materials } = useGLTF('/DASMA.glb')
  const [ activeBarangay, setActiveBarangay ] = useState(null)
  const ref = useRef()

  const handleClick = (name) => {
    setActiveBarangay(prev => (prev === name? null : name))
  }

  const getColor = (name) => activeBarangay === name? 'red' : 'gray'

  return (
    <group {...props} dispose={null}>
      <mesh
        onClick={() => {
          console.log("Clicked Santa_Fe")
          handleClick('Santa_Fe')
        }}
        geometry={nodes.Santa_Fe.geometry}  
        material={materials['SVGMat.032']}
        position={[1.042, 0.009, -0.049]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Santa_Fe')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Burol_I")
          handleClick('Burol_I')
        }}
        geometry={nodes.Burol_I.geometry}
        material={materials['SVGMat.032']}
        position={[-0.259, 0.016, -2.853]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Burol_I')}/>
      </mesh>
      <mesh
        onClick={() => { 
          console.log("Clicked Burol_II") 
          handleClick('Burol_II')
        }}
        geometry={nodes.Burol_II.geometry}
        material={materials['SVGMat.032']}
        position={[0.775, 0.009, -0.736]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Burol_II')}/>
      </mesh>
      <mesh   
        onClick={() => {
          console.log("Clicked Burol_III")
          handleClick('Burol_III')
        }}
        geometry={nodes.Burol_III.geometry}
        material={materials['SVGMat.032']}
        position={[0.138, 0.009, -3.526]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Burol_III')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Burol_Main")
          handleClick('Burol_Main')
        }}
        geometry={nodes.Burol_Main.geometry}
        material={materials['SVGMat.032']}
        position={[-3.165, 0.009, -3.017]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Burol_Main')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Datu_Esmael")
          handleClick('Datu_Esmael')
        }}
        geometry={nodes.Datu_Esmael.geometry}
        material={materials['SVGMat.032']}
        position={[-0.393, 0.009, -2.701]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Datu_Esmael')}/>
      </mesh>
      <mesh  
        onClick={() => {
          console.log("Clicked Emannuel_Bergado_I")
          handleClick('Emannuel_Bergado_I')
        }}
        geometry={nodes.Emannuel_Bergado_I.geometry}
        material={materials['SVGMat.032']}
        position={[-0.053, 0.009, 0.7]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Emannuel_Bergado_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Emannuel_Bergado_II")
          handleClick('Emannuel_Bergado_II')
        }}
        geometry={nodes.Emannuel_Bergado_II.geometry}
        material={materials['SVGMat.032']}
        position={[0.365, 0.009, 1.017]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Emannuel_Bergado_II')}/>
      </mesh>
      <mesh   
        onClick={() => {
          console.log("Clicked Fatima_I")
          handleClick('Fatima_I')
        }}
        geometry={nodes.Fatima_I.geometry}
        material={materials['SVGMat.032']}
        position={[-0.016, 0.009, -0.744]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Fatima_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Fatima_I(2)")
          handleClick('Fatima_I(2)')
        }}
        geometry={nodes['Fatima_I(2)'].geometry}
        material={materials['SVGMat.032']}
        position={[0.147, 0.009, 0.246]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Fatima_I(2)')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Fatima_II")
          handleClick('Fatima_II')
        }}
        geometry={nodes.Fatima_II.geometry}
        material={materials['SVGMat.032']}
        position={[0.682, 0.009, 0.84]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Fatima_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Fatima_III")
          handleClick('Fatima_III')
        }}
        geometry={nodes.Fatima_III.geometry}
        material={materials['SVGMat.032']}
        position={[1.03, 0.009, 1.432]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Fatima_III')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked H2")
          handleClick('H2')
        }}
        geometry={nodes.H2.geometry}
        material={materials['SVGMat.032']}
        position={[-0.56, 0.009, -2.359]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('H2')}/>
      </mesh>
      <mesh 
        onClick={() => {
          console.log("Clicked Langkaan_I")
          handleClick('Langkaan_I')
        }}
        geometry={nodes.Langkaan_I.geometry}
        material={materials['SVGMat.032']}
        position={[-4.333, 0.009, 4.219]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Langkaan_I')}/>
      </mesh>
      <mesh
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
        <meshStandardMaterial color={getColor('Langkaan_II')}/>
      </mesh>
      <mesh     
        onClick={() => {
          console.log("Clicked Luzviminda_I")
          handleClick('Luzviminda_I')
        }}
        geometry={nodes.Luzviminda_I.geometry}
        material={materials['SVGMat.032']}
        position={[1.217, 0.009, 0.744]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Luzviminda_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Luzviminda_II")
          handleClick('Luzviminda_II')
        }}
        geometry={nodes.Luzviminda_II.geometry}
        material={materials['SVGMat.032']}
        position={[1.679, 0.009, 1.834]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Luzviminda_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Paliparan_I")
          handleClick('Paliparan_I')
        }}
        geometry={nodes.Paliparan_I.geometry}
        material={materials['SVGMat.032']}
        position={[3.886, 0.009, 4.573]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Paliparan_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Paliparan_II")
          handleClick('Paliparan_II')
        }}
        geometry={nodes.Paliparan_II.geometry}
        material={materials['SVGMat.032']}
        position={[3.774, 0.009, 1.949]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Paliparan_II')}/>
      </mesh>
      <mesh 
        onClick={() => {
          console.log("Clicked Paliparan_III")
          handleClick('Paliparan_III')
        }}
        geometry={nodes.Paliparan_III.geometry}
        material={materials['SVGMat.032']}
        position={[3.37, 0.009, -0.875]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Paliparan_III')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Sabang")
          handleClick('Sabang')
        }}
        geometry={nodes.Sabang.geometry}
        material={materials['SVGMat.032']}
        position={[-6.713, 0.009, -6.095]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Sabang')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Salawag")
          handleClick('Salawag')
        }}
        geometry={nodes.Salawag.geometry}
        material={materials['SVGMat.032']}
        position={[-1.468, 0.009, -7.783]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Salawag')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Salitran_I")
          handleClick('Salitran_I')
        }}
        geometry={nodes.Salitran_I.geometry}
        material={materials['SVGMat.032']}
        position={[-4.915, 0.009, -7.265]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Salitran_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Salitran_II")
          handleClick('Salitran_II')
        }}
        geometry={nodes.Salitran_II.geometry}
        material={materials['SVGMat.032']}
        position={[-4.367, 0.009, -5.237]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Salitran_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Salitran_III")
          handleClick('Salitran_III')
        }}
        geometry={nodes.Salitran_III.geometry}
        material={materials['SVGMat.032']}
        position={[-3.003, 0.009, -6.873]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Salitran_III')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Salitran_IV")
          handleClick('Salitran_IV')
        }}
        geometry={nodes.Salitran_IV.geometry}
        material={materials['SVGMat.032']}
        position={[-2.754, 0.009, -7.807]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Salitran_IV')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Sampaloc_I")
          handleClick('Sampaloc_I')
        }}
        geometry={nodes.Sampaloc_I.geometry}
        material={materials['SVGMat.032']}
        position={[-0.892, 0.009, 3.305]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Sampaloc_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Sampaloc_II")
          handleClick('Sampaloc_II')
        }}
        geometry={nodes.Sampaloc_II.geometry}
        material={materials['SVGMat.032']}
        position={[-0.786, 0.009, 5.382]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Sampaloc_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Sampaloc_II(2)")
          handleClick('Sampaloc_II(2)')
        }}
        geometry={nodes['Sampaloc_II(2)'].geometry}
        material={materials['SVGMat.032']}
        position={[-0.761, 0.009, 5.03]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Sampaloc_II(2)')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Sampaloc_III")
          handleClick('Sampaloc_III')
        }}
        geometry={nodes.Sampaloc_III.geometry}
        material={materials['SVGMat.032']}
        position={[2.578, 0.009, 5.414]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Sampaloc_III')}/>
      </mesh>
      <mesh        
        onClick={() => {
          console.log("Clicked Sampaloc_IV")
          handleClick('Sampaloc_IV')
        }}
        geometry={nodes.Sampaloc_IV.geometry}
        material={materials['SVGMat.032']}
        position={[0.08, 0.009, 1.373]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Sampaloc_IV')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Sampaloc_V")
          handleClick('Sampaloc_V')
        }}
        geometry={nodes.Sampaloc_V.geometry}
        material={materials['Material.001']}
        position={[0.884, 0.092, 6.801]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Sampaloc_V')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Agustin_I")
          handleClick('San_Agustin_I')
        }}
        geometry={nodes.San_Agustin_I.geometry}
        material={materials['SVGMat.032']}
        position={[-4.19, 0.027, 1.485]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Agustin_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Agustin_II")
          handleClick('San_Agustin_II')
        }}
        geometry={nodes.San_Agustin_II.geometry}
        material={materials['SVGMat.032']}
        position={[-3.19, 0.015, -0.138]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Agustin_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Agustin_III")
          handleClick('San_Agustin_III')
        }}
        geometry={nodes.San_Agustin_III.geometry}
        material={materials['SVGMat.032']}
        position={[-4.119, 0.009, -0.286]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Agustin_III')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Andres_I")
          handleClick('San_Andres_I')
        }}
        geometry={nodes.San_Andres_I.geometry}
        material={materials['SVGMat.032']}
        position={[1.492, 0.009, -0.315]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Andres_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Andres_II")
          handleClick('San_Andres_II')
        }}
        geometry={nodes.San_Andres_II.geometry}
        material={materials['SVGMat.032']}
        position={[1.856, 0.009, 0.024]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Andres_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Antonio_De_Padua_I")
          handleClick('San_Antonio_De_Padua_I')
        }}
        geometry={nodes.San_Antonio_De_Padua_I.geometry}
        material={materials['SVGMat.032']}
        position={[-0.408, 0.009, 0.191]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Antonio_De_Padua_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Antonio_De_Padua_II")
          handleClick('San_Antonio_De_Padua_II')
        }}
        geometry={nodes.San_Antonio_De_Padua_II.geometry}
        material={materials['SVGMat.032']}
        position={[-0.45, 0.009, 0.682]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Antonio_De_Padua_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Dionisio")
          handleClick('San_Dionisio')
        }}
        geometry={nodes.San_Dionisio.geometry}
        material={materials['SVGMat.032']}
        position={[-1.102, 0.009, -3.716]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Dionisio')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Francisco_I")
          handleClick('San_Francisco_I')
        }}
        geometry={nodes.San_Francisco_I.geometry}
        material={materials['SVGMat.032']}
        position={[1.275, 0.009, -0.225]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Francisco_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Francisco_I001")
          handleClick('San_Francisco_I001')
        }}
        geometry={nodes.San_Francisco_I001.geometry}
        material={materials['SVGMat.032']}
        position={[1.367, 0.009, 0.113]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Francisco_I001')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Francisco_I(2)")
          handleClick('San_Francisco_I(2)')
        }}
        geometry={nodes['San_Francisco_I(2)'].geometry}
        material={materials['SVGMat.032']}
        position={[1.245, 0.009, -0.255]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Francisco_I(2)')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_IL_I")
          handleClick('San_IL_I')
        }}
        geometry={nodes.San_IL_I.geometry}
        material={materials['SVGMat.032']}
        position={[-1.479, 0.009, -4.325]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_IL_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_IL_II")
          handleClick('San_IL_II')
        }}
        geometry={nodes.San_IL_II.geometry}
        material={materials['SVGMat.032']}
        position={[-1.777, 0.009, -3.961]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_IL_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked on San_Jose")
          handleClick('San_Jose')
        }}
        geometry={nodes.San_Jose.geometry}
        material={materials['SVGMat.032']}
        position={[-6.434, 0.017, -3.738]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Jose')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Juan")
          handleClick('San_Juan')
        }}
        geometry={nodes.San_Juan.geometry}
        material={materials['SVGMat.032']}
        position={[-1.673, 0.009, -3.585]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Juan')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Lorenzo_Ruis_I")
          handleClick('San_Lorenzo_Ruis_I')
        }}
        geometry={nodes.San_Lorenzo_Ruis_I.geometry}
        material={materials['SVGMat.032']}
        position={[-0.008, 0.009, 1.848]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Lorenzo_Ruis_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Lorenzo_Ruis_II")
          handleClick('San_Lorenzo_Ruis_II')
        }}
        geometry={nodes.San_Lorenzo_Ruiz_II.geometry}
        material={materials['SVGMat.032']}
        position={[-0.485, 0.009, 1.738]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Lorenzo_Ruis_II')}/>
      </mesh>
      <mesh 
        onClick={() => {
          console.log("Clicked San_Luis_I")
          handleClick('San_Luis_I')
        }}
        geometry={nodes.San_Luis_I.geometry}
        material={materials['SVGMat.032']}
        position={[0.625, 0.009, 1.764]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Luis_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Luis_II")
          handleClick('San_Luis_II')
        }}
        geometry={nodes.San_Luis_II.geometry}
        material={materials['SVGMat.032']}
        position={[0.664, 0.009, 1.08]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Luis_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Manuel_I")
          handleClick('San_Manuel_I')
        }}
        geometry={nodes.San_Manuel_I.geometry}
        material={materials['SVGMat.032']}
        position={[-1.516, 0.009, -2.828]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Manuel_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Manuel_II")
          handleClick('San_Manuel_II')
        }}
        geometry={nodes.San_Manuel_II.geometry}
        material={materials['SVGMat.032']}
        position={[-1.347, 0.009, -2.697]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Manuel_II')}/>
      </mesh>
      <mesh  
        onClick={() => {
          console.log("Clicked San_Mateo")
          handleClick('San_Mateo')
        }}
        geometry={nodes.San_Mateo.geometry}
        material={materials['SVGMat.032']}
        position={[1.548, 0.018, 0.686]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Mateo')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Miguel_I")
          handleClick('San_Miguel_I')
        }}
        geometry={nodes.San_Miguel_I.geometry}
        material={materials['SVGMat.032']}
        position={[-2.128, 0.009, -2.978]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Miguel_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Miguel_II")
          handleClick('San_Miguel_II')
        }}
        geometry={nodes.San_Miguel_II.geometry}
        material={materials['SVGMat.032']}
        position={[-1.792, 0.009, -3.13]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Miguel_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Nicholas_I")
          handleClick('San_Nicholas_I')
        }}
        geometry={nodes.San_Nicholas_I.geometry}
        material={materials['SVGMat.032']}
        position={[1.779, 0.009, 1.112]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Nicholas_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Nicholas_II")
          handleClick('San_Nicholas_II')
        }}
        geometry={nodes.San_Nicholas_II.geometry}
        material={materials['SVGMat.032']}
        position={[2.25, 0.009, 0.77]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Nicholas_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Roque")
          handleClick('San_Roque')
        }}
        geometry={nodes.San_Roque.geometry}
        material={materials['SVGMat.032']}
        position={[1.64, 0.009, -0.514]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Roque')}/>
      </mesh>
      <mesh 
        onClick={() => {
          console.log("Clicked San_Simon")
          handleClick('San_Simon')
        }}
        geometry={nodes.San_Simon.geometry}
        material={materials['SVGMat.032']}
        position={[2.133, 0.009, -0.115]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('San_Simon')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Cristina_I")
          handleClick('Santa_Cristina_I')
        }}
        geometry={nodes.Santa_Cristina_I.geometry}
        material={materials['SVGMat.032']}
        position={[1.957, 0.009, -0.55]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Santa_Cristina_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked San_Cristina_II")
          handleClick('Santa_Cristina_II')
        }}
        geometry={nodes.Santa_Cristina_II.geometry}
        material={materials['SVGMat.032']}
        position={[1.358, 0.009, -0.637]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Santa_Cristina_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Santa_Cruz_I")
          handleClick('Santa_Cruz_I')
        }}
        geometry={nodes.Santa_Cruz_I.geometry}
        material={materials['SVGMat.032']}
        position={[-0.497, 0.013, 1.36]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Santa_Cruz_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Santa_Cruz_II")
          handleClick('Santa_Cruz_II')
        }}
        geometry={nodes.Santa_Cruz_II.geometry}
        material={materials['SVGMat.032']}
        position={[-0.434, 0.009, 1.018]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Santa_Cruz_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Santa_Lucia")
          handleClick('Santa_Lucia')
        }}
        geometry={nodes.Santa_Lucia.geometry}
        material={materials['SVGMat.032']}
        position={[-1.377, 0.009, -3.204]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Santa_Lucia')}/>
      </mesh>
      <mesh 
        onClick={() => {
          console.log("Clicked Santa_Maria")
          handleClick('Santa_Maria')
        }}
        geometry={nodes.Santa_Maria.geometry}
        material={materials['SVGMat.032']}
        position={[-0.612, 0.009, -0.634]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Santa_Maria')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Santo_Cristo")
          handleClick('Santo_Cristo')
        }}
        geometry={nodes.Santo_Cristo.geometry}
        material={materials['SVGMat.032']}
        position={[-0.593, 0.009, -3.767]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Santo_Cristo')}/>
      </mesh>
      <mesh  
        onClick={() => {
          console.log("Clicked Santo_Estoban")
          handleClick('Santo_Estoban')
        }}
        geometry={nodes.Santo_Estoban.geometry}
        material={materials['SVGMat.032']}
        position={[-0.373, 0.009, -3.045]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Santo_Estoban')}/>
      </mesh>
      <mesh  
        onClick={() => {
          console.log("Clicked Santo_Nino_I")
          handleClick('Santo_Nino_I')
        }}
        geometry={nodes.Santo_Nino_I.geometry}
        material={materials['SVGMat.032']}
        position={[-1.103, 0.009, -4.126]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Santo_Nino_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Santo_Nino_II")
          handleClick('Santo_Nino_II')
        }}
        geometry={nodes.Santo_Nino_II.geometry}
        material={materials['SVGMat.032']}
        position={[-0.671, 0.009, -4.127]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Santo_Nino_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked St_Peter_I")
          handleClick('St_Peter_I')
        }}
        geometry={nodes.St_Peter_I.geometry}
        material={materials['SVGMat.032']}
        position={[-2, 0.004, -3.08]}
        scale={[32.013, 19.468, 32.013]}
      >
        <meshStandardMaterial color={getColor('St_Peter_I')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked St_Peter_II")
          handleClick('St_Peter_II')
        }}
        geometry={nodes.St_Peter_II.geometry}
        material={materials['SVGMat.032']}
        position={[-2.331, 0.004, -3.061]}
        scale={[34.922, 20.005, 34.922]}
      >
        <meshStandardMaterial color={getColor('St_Peter_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Victoria_Reyes")
          handleClick('Victoria_Reyes')
        }}
        geometry={nodes.Victoria_Reyes.geometry}
        material={materials['SVGMat.032']}
        position={[2.999, 0.011, 1.468]}
        scale={[51.524, 19.433, 51.524]}
      >
        <meshStandardMaterial color={getColor('Victoria_Reyes')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Zone_I")
          handleClick('Zone_I')
        }}
        geometry={nodes.Zone_I.geometry}
        material={materials['SVGMat.032']}
        position={[-4.616, 0.009, -1.847]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Zone_I')}/>
      </mesh>
      <mesh
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
        <meshStandardMaterial color={getColor('Zone_IA')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Zone_II")
          handleClick('Zone_II')
        }}
        geometry={nodes.Zone_II.geometry}
        material={materials['SVGMat.032']}
        position={[-5.079, 0.009, -1.373]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Zone_II')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Zone_III")
          handleClick('Zone_III')
        }}
        geometry={nodes.Zone_III.geometry}
        material={materials['SVGMat.032']}
        position={[-5.59, 0.038, -1.215]}
        scale={19.644}
      >
        <meshStandardMaterial color={getColor('Zone_III')}/>
      </mesh>
      <mesh
        onClick={() => {
          console.log("Clicked Zone_IV")
          handleClick('Zone_IV')
        }}
        geometry={nodes.Zone_IV.geometry}
        material={materials['SVGMat.032']}
        position={[-4.006, 0.015, -0.041]}
        scale={[43.436, 19.131, 43.436]}
      >
        <meshStandardMaterial color={getColor('Zone_IV')}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/DASMA.glb')