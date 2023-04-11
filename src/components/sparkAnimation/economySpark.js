import { React, useRef, useEffect } from "react";
import "../../css/components/sparkAnimation.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three-stdlib';
import { useGLTF, useAnimations } from '@react-three/drei'


function EconomySpark({ model }) {
  
  function EconomySparkScene() {
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
            <ambientLight intensity={3}/>
            <EconomySparkScene />
          </Canvas>
        </>
    </div>
  );
}

export default EconomySpark;


/* THE ANIMATED MODEL */


/*function EconomySpark({ model }) {
  
  function EconomySparkScene() {

  

  const { scene, animations } = useGLTF(model)
  const { actions } = useAnimations(animations, scene)
  console.log(scene, animations)
  useEffect(() => {
    actions.cone1Action.play()
    actions.cone2Action.play()
    actions.cone3Action.play()
    actions.cone5Action.play()
    actions.cone6Action.play()
    actions.cone7Action.play()
    actions.cone8Action.play()
    actions.cone9Action.play()
    actions.cone11Action.play()
    actions.cone12Action.play()
    actions.cone13Action.play()
    actions.cone14Action.play()
    actions.cone17Action.play()
  })

  const propellerMesh = useRef();
    useFrame(({ clock }) => {

      propellerMesh.current.rotation.y = clock.getElapsedTime();
    });
  
  return <primitive object={scene} ref={propellerMesh}/>


}
  return (
    <div className="section_simrepo_wrapper_spark">
    
        <>
          <Canvas camera={{ fov: 9, position: [0, 0, 140] }}>
            <ambientLight intensity={3}/>
        
            <EconomySparkScene />
          </Canvas>
        </>
    </div>
  );
}

export default EconomySpark;*/

