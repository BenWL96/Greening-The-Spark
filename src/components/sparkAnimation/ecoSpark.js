import { React, useRef, Suspense } from "react";
import "../../css/components/sparkAnimation.css";

import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three-stdlib';

function EcoSpark({ model }) {

  function EcoSparkScene() {

    const propellerMesh = useRef();
    useFrame(({ clock }) => {
      //propellerMesh.current.rotation.x = clock.getElapsedTime();
      propellerMesh.current.rotation.y = clock.getElapsedTime();
    });

    const gltf = useLoader(
      GLTFLoader,
      model
    );
    return <primitive object={gltf.scene} ref={propellerMesh} />;
  }

  return (
    <div className="section_simrepo_wrapper_spark">
   
        <>
          <Canvas camera={{ fov: 9, position: [0, 0, 140] }}>
            <ambientLight intensity={1}/>
            <EcoSparkScene />
          </Canvas>
        </>
  
    </div>
  );
}

export default EcoSpark;
