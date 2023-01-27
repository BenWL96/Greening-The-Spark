import {React, useRef, Suspense} from 'react';
import '../../css/components/powerPlantModel.css';


import {Canvas, useFrame} from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useProgress, OrbitControls } from '@react-three/drei';


function PowerPlantModel({loadingScreenState}) {


    function MainScene() {
      


        const modelMesh = useRef(); 
            useFrame(({ clock }) => { 
             //modelMesh.current.rotation.y = clock.getElapsedTime();  
             //modelMesh.current.rotation.x = clock.getElapsedTime();  
             //modelMesh.current.rotation.z = clock.getElapsedTime();
            }) 
          
        const gltf = useLoader(GLTFLoader, 'https://brightonblockchainbb.s3.eu-west-2.amazonaws.com/powerplant.glb')
        return (
            
            <primitive object={gltf.scene} ref={modelMesh}/>
            
        )
      }
        
    {/*function Loader() {
        console.log("Loader if required");
        
        const { progress } = useProgress();
        console.log({progress});
        if ({progress}.progress < 100) {

            loadingScreenState(true, {progress}.progress)
            console.log("progress less than 100");
        } 
        else {
            loadingScreenState(false, {progress}.progress)
            console.log("finished");
        }
        return
      }
    
    fallback={<Loader />}

*/}


    return (
        <div className="powerplant-model">
            <Canvas camera={{ fov: 40, position: [50, 5, 5] }}>
                <Suspense>
                <ambientLight intensity={50} />
                <MainScene/>
                <OrbitControls 
                    enableZoom={false} 
                    dampingFactor={0.5}/>
                </Suspense>
               
            </Canvas>
        </div>
    );
}

export default PowerPlantModel;