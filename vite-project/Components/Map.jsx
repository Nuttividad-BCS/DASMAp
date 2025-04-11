import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DasMap(props) {
  const { nodes, materials } = useGLTF('/DASMA.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Santa_Fe.geometry}
        material={materials['SVGMat.032']}
        position={[1.042, 0.009, -0.049]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Burol_I.geometry}
        material={materials['SVGMat.032']}
        position={[-0.259, 0.016, -2.853]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Burol_II.geometry}
        material={materials['SVGMat.032']}
        position={[0.775, 0.009, -0.736]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Burol_III.geometry}
        material={materials['SVGMat.032']}
        position={[0.138, 0.009, -3.526]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Burol_Main.geometry}
        material={materials['SVGMat.032']}
        position={[-3.165, 0.009, -3.017]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Datu_Esmael.geometry}
        material={materials['SVGMat.032']}
        position={[-0.393, 0.009, -2.701]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Emannuel_Bergado_I.geometry}
        material={materials['SVGMat.032']}
        position={[-0.053, 0.009, 0.7]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Emannuel_Bergado_II.geometry}
        material={materials['SVGMat.032']}
        position={[0.365, 0.009, 1.017]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fatima_I.geometry}
        material={materials['SVGMat.032']}
        position={[-0.016, 0.009, -0.744]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Fatima_I(2)'].geometry}
        material={materials['SVGMat.032']}
        position={[0.147, 0.009, 0.246]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fatima_II.geometry}
        material={materials['SVGMat.032']}
        position={[0.682, 0.009, 0.84]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fatima_III.geometry}
        material={materials['SVGMat.032']}
        position={[1.03, 0.009, 1.432]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.H2.geometry}
        material={materials['SVGMat.032']}
        position={[-0.56, 0.009, -2.359]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Langkaan_I.geometry}
        material={materials['SVGMat.032']}
        position={[-4.333, 0.009, 4.219]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Langkaan_II.geometry}
        material={materials['SVGMat.032']}
        position={[-5.95, 0.009, -0.206]}
        rotation={[0, 0.017, 0]}
        scale={19.823}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Luzviminda_I.geometry}
        material={materials['SVGMat.032']}
        position={[1.217, 0.009, 0.744]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Luzviminda_II.geometry}
        material={materials['SVGMat.032']}
        position={[1.679, 0.009, 1.834]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Paliparan_I.geometry}
        material={materials['SVGMat.032']}
        position={[3.886, 0.009, 4.573]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Paliparan_II.geometry}
        material={materials['SVGMat.032']}
        position={[3.774, 0.009, 1.949]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Paliparan_III.geometry}
        material={materials['SVGMat.032']}
        position={[3.37, 0.009, -0.875]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sabang.geometry}
        material={materials['SVGMat.032']}
        position={[-6.713, 0.009, -6.095]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Salawag.geometry}
        material={materials['SVGMat.032']}
        position={[-1.468, 0.009, -7.783]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Salitran_I.geometry}
        material={materials['SVGMat.032']}
        position={[-4.915, 0.009, -7.265]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Salitran_II.geometry}
        material={materials['SVGMat.032']}
        position={[-4.367, 0.009, -5.237]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Salitran_III.geometry}
        material={materials['SVGMat.032']}
        position={[-3.003, 0.009, -6.873]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Salitran_IV.geometry}
        material={materials['SVGMat.032']}
        position={[-2.754, 0.009, -7.807]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sampaloc_I.geometry}
        material={materials['SVGMat.032']}
        position={[-0.892, 0.009, 3.305]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sampaloc_II.geometry}
        material={materials['SVGMat.032']}
        position={[-0.786, 0.009, 5.382]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Sampaloc_II(2)'].geometry}
        material={materials['SVGMat.032']}
        position={[-0.761, 0.009, 5.03]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sampaloc_III.geometry}
        material={materials['SVGMat.032']}
        position={[2.578, 0.009, 5.414]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sampaloc_IV.geometry}
        material={materials['SVGMat.032']}
        position={[0.08, 0.009, 1.373]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sampaloc_V.geometry}
        material={materials['Material.001']}
        position={[0.884, 0.092, 6.801]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Agustin_I.geometry}
        material={materials['SVGMat.032']}
        position={[-4.19, 0.027, 1.485]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Agustin_II.geometry}
        material={materials['SVGMat.032']}
        position={[-3.19, 0.015, -0.138]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Agustin_III.geometry}
        material={materials['SVGMat.032']}
        position={[-4.119, 0.009, -0.286]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Andres_I.geometry}
        material={materials['SVGMat.032']}
        position={[1.492, 0.009, -0.315]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Andres_II.geometry}
        material={materials['SVGMat.032']}
        position={[1.856, 0.009, 0.024]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Antonio_De_Padua_I.geometry}
        material={materials['SVGMat.032']}
        position={[-0.408, 0.009, 0.191]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Antonio_De_Padua_II.geometry}
        material={materials['SVGMat.032']}
        position={[-0.45, 0.009, 0.682]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Dionisio.geometry}
        material={materials['SVGMat.032']}
        position={[-1.102, 0.009, -3.716]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Francisco_I.geometry}
        material={materials['SVGMat.032']}
        position={[1.275, 0.009, -0.225]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Francisco_I001.geometry}
        material={materials['SVGMat.032']}
        position={[1.367, 0.009, 0.113]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['San_Francisco_I(2)'].geometry}
        material={materials['SVGMat.032']}
        position={[1.245, 0.009, -0.255]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_IL_I.geometry}
        material={materials['SVGMat.032']}
        position={[-1.479, 0.009, -4.325]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_IL_II.geometry}
        material={materials['SVGMat.032']}
        position={[-1.777, 0.009, -3.961]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Jose.geometry}
        material={materials['SVGMat.032']}
        position={[-6.434, 0.017, -3.738]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Juan.geometry}
        material={materials['SVGMat.032']}
        position={[-1.673, 0.009, -3.585]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Lorenzo_Ruis_I.geometry}
        material={materials['SVGMat.032']}
        position={[-0.008, 0.009, 1.848]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Lorenzo_Ruiz_II.geometry}
        material={materials['SVGMat.032']}
        position={[-0.485, 0.009, 1.738]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Luis_I.geometry}
        material={materials['SVGMat.032']}
        position={[0.625, 0.009, 1.764]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Luis_II.geometry}
        material={materials['SVGMat.032']}
        position={[0.664, 0.009, 1.08]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Manuel_I.geometry}
        material={materials['SVGMat.032']}
        position={[-1.516, 0.009, -2.828]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Manuel_II.geometry}
        material={materials['SVGMat.032']}
        position={[-1.347, 0.009, -2.697]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Mateo.geometry}
        material={materials['SVGMat.032']}
        position={[1.548, 0.018, 0.686]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Miguel_I.geometry}
        material={materials['SVGMat.032']}
        position={[-2.128, 0.009, -2.978]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Miguel_II.geometry}
        material={materials['SVGMat.032']}
        position={[-1.792, 0.009, -3.13]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Nicholas_I.geometry}
        material={materials['SVGMat.032']}
        position={[1.779, 0.009, 1.112]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Nicholas_II.geometry}
        material={materials['SVGMat.032']}
        position={[2.25, 0.009, 0.77]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Roque.geometry}
        material={materials['SVGMat.032']}
        position={[1.64, 0.009, -0.514]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.San_Simon.geometry}
        material={materials['SVGMat.032']}
        position={[2.133, 0.009, -0.115]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Santa_Cristina_I.geometry}
        material={materials['SVGMat.032']}
        position={[1.957, 0.009, -0.55]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Santa_Cristina_II.geometry}
        material={materials['SVGMat.032']}
        position={[1.358, 0.009, -0.637]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Santa_Cruz_I.geometry}
        material={materials['SVGMat.032']}
        position={[-0.497, 0.013, 1.36]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Santa_Cruz_II.geometry}
        material={materials['SVGMat.032']}
        position={[-0.434, 0.009, 1.018]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Santa_Lucia.geometry}
        material={materials['SVGMat.032']}
        position={[-1.377, 0.009, -3.204]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Santa_Maria.geometry}
        material={materials['SVGMat.032']}
        position={[-0.612, 0.009, -0.634]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Santo_Cristo.geometry}
        material={materials['SVGMat.032']}
        position={[-0.593, 0.009, -3.767]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Santo_Estoban.geometry}
        material={materials['SVGMat.032']}
        position={[-0.373, 0.009, -3.045]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Santo_Nino_I.geometry}
        material={materials['SVGMat.032']}
        position={[-1.103, 0.009, -4.126]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Santo_Nino_II.geometry}
        material={materials['SVGMat.032']}
        position={[-0.671, 0.009, -4.127]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.St_Peter_I.geometry}
        material={materials['SVGMat.032']}
        position={[-2, 0.004, -3.08]}
        scale={[32.013, 19.468, 32.013]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.St_Peter_II.geometry}
        material={materials['SVGMat.032']}
        position={[-2.331, 0.004, -3.061]}
        scale={[34.922, 20.005, 34.922]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Victoria_Reyes.geometry}
        material={materials['SVGMat.032']}
        position={[2.999, 0.011, 1.468]}
        scale={[51.524, 19.433, 51.524]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zone_I.geometry}
        material={materials['SVGMat.032']}
        position={[-4.616, 0.009, -1.847]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zone_IA.geometry}
        material={materials['SVGMat.032']}
        position={[-4.353, 0.012, -1.319]}
        rotation={[Math.PI, -0.052, Math.PI]}
        scale={[-45.186, -20.06, -45.186]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zone_II.geometry}
        material={materials['SVGMat.032']}
        position={[-5.079, 0.009, -1.373]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zone_III.geometry}
        material={materials['SVGMat.032']}
        position={[-5.59, 0.038, -1.215]}
        scale={19.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zone_IV.geometry}
        material={materials['SVGMat.032']}
        position={[-4.006, 0.015, -0.041]}
        scale={[43.436, 19.131, 43.436]}
      />
    </group>
  )
}

useGLTF.preload('/DASMA.glb')