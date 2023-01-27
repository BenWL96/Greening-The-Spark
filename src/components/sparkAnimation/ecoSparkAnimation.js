import {React, useRef, Suspense} from 'react';
import '../../css/components/sparkAnimation.css';


import {Canvas, useFrame} from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function EcoSparkAnimation() {


    function Scene_3() {
  
        const propellerMesh = useRef(); 
            useFrame(({ clock }) => { 
                //propellerMesh.current.rotation.x = clock.getElapsedTime(); 
                propellerMesh.current.rotation.y = clock.getElapsedTime(); 
            }) 
          
        const gltf = useLoader(GLTFLoader, 'https://brightonblockchainbb.s3.eu-west-2.amazonaws.com/efficiencyspark_red_3.glb');
        return (
            
            <primitive object={gltf.scene} ref={propellerMesh}/>
            
        )
    };
        


    return (
        <div className="section_simrepo_wrapper_spark">

            <Canvas camera={{ fov: 10, position: [0, 0, 140] }}>
                <directionalLight position={[0, 0, 5]} />                       
                <Scene_3 />
            </Canvas>
            
        </div>
    );
}

export default EcoSparkAnimation;