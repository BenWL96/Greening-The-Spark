import {React, useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import '../../css/components/infoIconModel.css';

function InfoIconModel({changeStatePanelActivated}) {

    function Scene() {
  
        const propellerMesh = useRef(); 
            useFrame(({ clock }) => { 
            propellerMesh.current.rotation.y = clock.getElapsedTime();  
            }) 
          
        const gltf = useLoader(GLTFLoader, 'https://brightonblockchainbb.s3.eu-west-2.amazonaws.com/infoIconSmooth.glb');
       
        
        return (
            
            <primitive object={gltf.scene} ref={propellerMesh}/>
            
        )
    }

    return (
        <div className="info-logo" id="section_header_info_logo" data-testid="section_header_info_logo" onClick={changeStatePanelActivated}>
            <Canvas camera={{ fov: 5, position: [0, 0, 100] }}>
                
                {/*<directionalLight position={[0, 0, 5]} />*/}
                <ambientLight intensity={5} />
                <Scene/>
                                  
            </Canvas>
        </div>
    );
}

export default InfoIconModel;