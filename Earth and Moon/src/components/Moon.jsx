import React from 'react';
import * as THREE from 'three';
import MoonMap from '../textures/8k_moon.jpg';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';

const Moon = (props) => {
	const [moonMap] = useLoader(TextureLoader, [MoonMap]);
	return (
		<>
			<mesh position={[5, 5, -5]}>
				<sphereGeometry args={[0.5, 32, 32]} />
				<meshStandardMaterial map={moonMap} metalness={0.4} roughness={0.7} />
				{/* <OrbitControls enablePan={true} panSpeed={0.5} rotateSpeed={0.5} /> */}
			</mesh>
		</>
	);
};

export default Moon;
