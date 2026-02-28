
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Colchon3d(props) {
 const { nodes, materials } = useGLTF('/mattress+3d+model.glb')
  return (
    <group {...props} dispose={null} scale={15}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_bb61fd23-ac8b-4483-a9d1-2a6455cfce4a'].geometry}
        material={materials['tripo_mat_bb61fd23-ac8b-4483-a9d1-2a6455cfce4a']}
      />
    </group>
  )
}

useGLTF.preload('/mattress+3d+model.glb')
