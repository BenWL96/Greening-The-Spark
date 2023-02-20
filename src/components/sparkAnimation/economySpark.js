import { React, useRef } from "react";
import "../../css/components/sparkAnimation.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function EconomySpark({ models }) {
  function Scene_2() {
    const propellerMesh = useRef();
    useFrame(({ clock }) => {
      //propellerMesh.current.rotation.x = clock.getElapsedTime();
      propellerMesh.current.rotation.y = clock.getElapsedTime();
    });

    const gltf = useLoader(
      GLTFLoader,
      "https://brightonblockchainbb.s3.eu-west-2.amazonaws.com/efficiencyspark_red_2.glb"
    );
    return <primitive object={gltf.scene} ref={propellerMesh} />;
  }

  return (
    <div className="section_simrepo_wrapper_spark">
      {models.length == 11 ? (
        <>
          <Canvas camera={{ fov: 9, position: [0, 0, 140] }}>
            <directionalLight position={[0, 0, 5]} />
            <Scene_2 />
          </Canvas>
        </>
      ) : (
        <>Error</>
      )}
    </div>
  );
}

export default EconomySpark;
