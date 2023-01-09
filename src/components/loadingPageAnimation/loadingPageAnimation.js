import {React, useRef, Suspense} from 'react';
import '../../css/components/loadingPageAnimation.css';


import {Canvas, useFrame} from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useProgress, Stats, OrbitControls } from '@react-three/drei';


function LoadingPageAnimation({loadingScreenState}) {


    function MainScene() {
      


        const modelMesh = useRef(); 
            useFrame(({ clock }) => { 
             //modelMesh.current.rotation.y = clock.getElapsedTime();  
             //modelMesh.current.rotation.x = clock.getElapsedTime();  
             //modelMesh.current.rotation.z = clock.getElapsedTime();
            }) 
          
        const gltf = useLoader(GLTFLoader, './assets/models/powerplant/powerplant.glb')
        return (
            
            <primitive object={gltf.scene} ref={modelMesh}/>
            
        )
      }
        
    function Loader() {
        {/*const { progress } = useProgress();
        console.log({progress});
        if ({progress}.progress < 100) {

            loadingScreenState(true, {progress}.progress)
            console.log("progress less than 100");
        } 
        else {
            loadingScreenState(false, {progress}.progress)
            console.log("finished");
        }*/}
      }


    return (
        <div className="section_body_form_wrapper_anim">
            <Canvas camera={{ fov: 20, position: [20, 20, 20] }}>
                <Suspense fallback={<Loader />}>
                <ambientLight intensity={50} />
                <MainScene/>
                <OrbitControls 
                    enableZoom={false} 
                    dampingFactor={0.5}

    />
                <Stats />
                </Suspense>
               
            </Canvas>
        </div>
    );
}

export default LoadingPageAnimation;