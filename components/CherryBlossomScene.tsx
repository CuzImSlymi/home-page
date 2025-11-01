'use client'

import { useRef, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { motion } from 'framer-motion'

// Real Sakura Tree Component
function SakuraTree() {
  const treeRef = useRef<THREE.Group>(null!)
  
  try {
    const gltf = useLoader(GLTFLoader, '/models/sakura.glb')
    
    useFrame((state) => {
      if (treeRef.current) {
        // Gentle swaying animation
        treeRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.02
        treeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.01
      }
    })
    
    useEffect(() => {
      if (gltf?.scene) {
        console.log('✅ Sakura tree loaded successfully!')
        console.log('Tree bounding box:', new THREE.Box3().setFromObject(gltf.scene))
        
        gltf.scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (child.material) {
              child.castShadow = true
              child.receiveShadow = true
            }
          }
        })
      }
    }, [gltf])
    
    if (!gltf) return <SimpleTree />
    
    return (
      <group ref={treeRef} position={[0, 0, 0]} scale={[2, 2, 2]}>
        <primitive object={gltf.scene} />
      </group>
    )
  } catch (error) {
    console.error('❌ Failed to load sakura.glb:', error)
    return <SimpleTree />
  }
}

// Fallback simple tree if model fails
function SimpleTree() {
  return (
    <group position={[0, -1, 0]}>
      {/* Trunk */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.5, 4, 8]} />
        <meshLambertMaterial color="#4a3429" />
      </mesh>
      
      {/* Cherry blossom clusters */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2
        const radius = 1 + Math.random() * 1.5
        const height = 1 + Math.random() * 2
        
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              height,
              Math.sin(angle) * radius
            ]}
          >
            <sphereGeometry args={[0.3, 8, 8]} />
            <meshLambertMaterial color="#ffb3d9" transparent opacity={0.8} />
          </mesh>
        )
      })}
    </group>
  )
}

// Instanced Cherry Blossom Petals
function FallingPetals({ count = 100 }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const petalGltf = useLoader(GLTFLoader, '/models/cherry_blossom_petal.glb')
  
  // Petal physics data
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 40,
        Math.random() * 20 + 10,
        (Math.random() - 0.5) * 40
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.5,
        -Math.random() * 0.3 - 0.1,
        (Math.random() - 0.5) * 0.5
      ),
      rotation: new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ),
      rotationSpeed: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ),
      scale: 0.5 + Math.random() * 0.5
    }))
  }, [count])
  
  useFrame((state) => {
    if (!meshRef.current) return
    
    const time = state.clock.elapsedTime
    const dummy = new THREE.Object3D()
    
    petals.forEach((petal, i) => {
      // Update physics
      petal.position.add(petal.velocity)
      petal.position.x += Math.sin(time * 0.5 + i) * 0.005 // Wind effect
      
      // Update rotation
      petal.rotation.x += petal.rotationSpeed.x
      petal.rotation.y += petal.rotationSpeed.y
      petal.rotation.z += petal.rotationSpeed.z
      
      // Reset if fallen too low
      if (petal.position.y < -10) {
        petal.position.y = 20 + Math.random() * 10
        petal.position.x = (Math.random() - 0.5) * 40
        petal.position.z = (Math.random() - 0.5) * 40
      }
      
      // Apply to instance
      dummy.position.copy(petal.position)
      dummy.rotation.copy(petal.rotation)
      dummy.scale.setScalar(petal.scale)
      dummy.updateMatrix()
      
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    
    meshRef.current.instanceMatrix.needsUpdate = true
  })
  
  if (!petalGltf) return null
  
  const petalGeometry = petalGltf.scene.children[0]?.geometry
  if (!petalGeometry) return null
  
  return (
    <instancedMesh
      ref={meshRef}
      args={[petalGeometry, undefined, count]}
      frustumCulled={false}
    >
      <meshLambertMaterial 
        color="#ffb3d9" 
        transparent 
        opacity={0.8}
        side={THREE.DoubleSide}
      />
    </instancedMesh>
  )
}

// Ground with subtle reflection
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshLambertMaterial 
        color="#2a1810" 
        transparent 
        opacity={0.6}
        reflectivity={0.1}
      />
    </mesh>
  )
}

// Interactive Camera
function CameraController() {
  const { camera } = useThree()
  
  useEffect(() => {
    // Set initial camera position and look at center
    camera.position.set(0, 5, 15)
    camera.lookAt(0, 0, 0)
  }, [camera])
  
  return null
}

// Main Scene
function Scene() {
  return (
    <>
      {/* Lighting Setup */}
      <ambientLight intensity={0.4} color="#ffeef5" />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.8}
        color="#fff8f0"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[0, 5, -5]} intensity={0.3} color="#ffccdd" />
      <pointLight position={[-5, 3, 0]} intensity={0.2} color="#ff99cc" />
      
      {/* Interactive Camera */}
      <CameraController />
      
      {/* Debug cube to see positioning */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="red" />
      </mesh>
      
      {/* Real 3D Models */}
      <Suspense fallback={null}>
        <SakuraTree />
      </Suspense>
      
      {/* Environment */}
      <Ground />
      
      {/* Atmospheric fog */}
      <fog attach="fog" args={['#2a1810', 20, 100]} />
    </>
  )
}

// Loading Component
function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-2 border-pink-400 border-t-transparent rounded-full"
      />
    </div>
  )
}

// Main Cherry Blossom Scene Component
export default function CherryBlossomScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 5, 15], fov: 75 }}
          style={{ background: 'transparent' }}
          shadows
          gl={{ antialias: true, alpha: true }}
          performance={{ min: 0.5 }}
        >
          <Scene />
        </Canvas>
      </Suspense>
      
      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-950/10 via-transparent to-pink-950/20 pointer-events-none" />
      
      {/* Floating light orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-400/5 rounded-full blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/3 w-24 h-24 bg-rose-300/5 rounded-full blur-xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 0.7, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}