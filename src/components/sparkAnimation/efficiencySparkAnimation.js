import {React, useRef, Suspense} from 'react';
import '../../css/components/sparkAnimation.css';


import {Canvas, useFrame} from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useProgress, Stats, OrbitControls } from '@react-three/drei';


function EfficiencySparkAnimation() {


    function Scene() {
  
        const propellerMesh = useRef(); 
            useFrame(({ clock }) => { 
                //propellerMesh.current.rotation.x = clock.getElapsedTime();  
                propellerMesh.current.rotation.y = clock.getElapsedTime(); 
            }) 
          
        const gltf = useLoader(GLTFLoader, 'https://brightonblockchainbb.s3.eu-west-2.amazonaws.com/efficiencyspark_red.glb');
        return (
            
            <primitive object={gltf.scene} ref={propellerMesh}/>
            
        )
    };
        


    return (
        <div className="section_simrepo_wrapper_spark">
            <Canvas camera={{ fov: 10, position: [0, 0, 140] }}>
                <directionalLight position={[0, 0, 5]} />
                                        
                <Scene />
                {/*<OrbitControls 
                    enableZoom={false} 
                    dampingFactor={0.5}
                />*/}
                <Stats />
            </Canvas>
        </div>
    );
}

export default EfficiencySparkAnimation;