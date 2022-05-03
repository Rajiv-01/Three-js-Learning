import React, { useRef } from 'react';
import * as THREE from 'three';

import EarthdayMap from '../textures/8k_earth_daymap.jpg';

// import EarthnightMap from '../textures/8k_earth_nightmap.jpg';
import EarthnormalMap from '../textures/8k_earth_normal_map.jpg';
import EarthCloudsMap from '../textures/8k_earth_clouds.jpg';
import EarthSecularMap from '../textures/8k_earth_specular_map.jpg';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import Moon from './Moon';

const Earth = (props) => {
	const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
		TextureLoader,
		[EarthdayMap, EarthnormalMap, EarthSecularMap, EarthCloudsMap]
	);
	const earthRef = useRef();
	const cloudRef = useRef();

	useFrame(({ clock }) => {
		earthRef.current.rotation.y = 0.1 * clock.getElapsedTime();
		cloudRef.current.rotation.y = 0.1 * clock.getElapsedTime();
	});
	return (
		<>
			<ambientLight intensity={0.05} />

			<Stars
				radius={300}
				depth={60}
				count={20000}
				factor={10}
				fade={true}
				saturation={true}
			/>

			<mesh ref={cloudRef} scale={[2, 2, 2]} postion={[10, 0, 0]}>
				<sphereGeometry args={[1.005, 32, 32]} />
				<meshPhongMaterial
					map={cloudsMap}
					opacity={0.4}
					depthWrite={false}
					transparent={true}
					side={THREE.DoubleSide}
				/>
			</mesh>
			<mesh ref={earthRef} scale={[2, 2, 2]} postion={[10, 0, 0]}>
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial attach='material' specularMap={specularMap} />
				<meshStandardMaterial
					map={colorMap}
					normalMap={normalMap}
					metalness={0.4}
					roughness={0.7}
				/>
				<OrbitControls
					// enableZoom={true}
					enablePan={true}
					// zoomSpeed={0.6}
					panSpeed={0.5}
					rotateSpeed={0.5}
				/>
			</mesh>
		</>
	);
};

export default Earth;
