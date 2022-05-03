import React from 'react';
import * as THREE from 'three';
import SunMap from '../textures/8k_sun.jpg';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';

const Sun = (props) => {
	const [sunMap] = useLoader(TextureLoader, [SunMap]);
	return (
		<>
			<mesh position={[50, 0, 0]}>
				<sphereGeometry args={[10, 32, 32]} />
				<meshStandardMaterial map={sunMap} metalness={0.4} roughness={0.7} />
				{/* <OrbitControls enablePan={true} panSpeed={0.5} rotateSpeed={0.5} /> */}
			</mesh>
		</>
	);
};

export default Sun;
