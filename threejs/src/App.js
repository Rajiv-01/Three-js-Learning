import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import Earth from './components/Earth';
import Moon from './components/Moon';
import Sun from './components/Sun';

const CanvasContainer = styled.div`
	width: 100%;
	height: 100vh;
`;
function App() {
	return (
		<CanvasContainer>
			<Canvas>
				<Suspense fallback={null}>
					<spotLight
						position={[50, 0, 20]}
						shadow-mapSize={[1024, 1024]}
						intensity={5}
						castShadow
					/>
					{/* <pointLight
						castShadow
						position={[50, 0, 0]}
						shadow-mapSize={[1024, 1024]}
						intensity={1.5}
					/> */}
					<Earth />
					<Moon />
					<Sun />
				</Suspense>
			</Canvas>
		</CanvasContainer>
	);
}

export default App;
