import React, { useRef, useState, Suspense } from 'react'
import * as THREE from 'three'
import { useLoader, Canvas, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'
import Button from 'react-bootstrap/Button'

function Scene({ name = 'goku', rotate, scale = 1.5 }) {
	const gltf = useLoader(GLTFLoader, `./${name}/scene.gltf`)

	const modelRef = useRef()

	let mixer
	if (gltf.animations.length) {
		mixer = new THREE.AnimationMixer(gltf.scene)
		gltf.animations.forEach((clip) => {
			const action = mixer.clipAction(clip)
			action.play()
		})
	}

	useFrame((state, delta) => {
		if (rotate) {
			modelRef.current.rotation.y += 0.01
		}
		mixer?.update(delta)
	})

	return (
		<>
			<primitive
				object={gltf.scene}
				position={[0, -1.5, 0]}
				scale={scale}
				rotation={[0, 0, 0]}
				ref={modelRef}
			/>
		</>
	)
}

const CanvasArea = ({ name, scale, lights = false }) => {
	const [rotation, setRotation] = useState(true)

	return (
		<Suspense fallback={null}>
			<Canvas>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				{lights && (
					<>
						<pointLight position={[0, 10, 10]} />
						<pointLight position={[10, 0, 10]} />
						<pointLight position={[10, 10, 0]} />
					</>
				)}

				<OrbitControls />
				<Scene name={name} rotate={rotation} scale={scale} lights={lights} />
			</Canvas>
			<p>Use mouse to rotate and mouse wheel to zoom in/out</p>
			<Button
				variant="dark"
				className="toggle-btn"
				onClick={() => setRotation(!rotation)}
			>
				Start/Stop Rotation
			</Button>
		</Suspense>
	)
}

export default CanvasArea
