import { React, useRef, Suspense } from "react";
import "../../css/components/powerPlantModel.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import PropTypes from "prop-types";

function PowerPlantModel({ models }) {
  function MainScene() {
    const modelMesh = useRef();

    const gltf = useLoader(
      GLTFLoader,
      "https://brightonblockchainbb.s3.eu-west-2.amazonaws.com/powerplant.glb"
    );
    return <primitive object={gltf.scene} ref={modelMesh} />;
  }

  return (
    <div className="powerplant-model">
      {models.length == 11 ? (
        <>
          <Canvas camera={{ fov: 40, position: [50, 5, 5] }}>
            <Suspense>
              <ambientLight intensity={50} />
              <MainScene />
              <OrbitControls enableZoom={false} dampingFactor={0.5} />
            </Suspense>
          </Canvas>
        </>
      ) : (
        <>Error</>
      )}
    </div>
  );
}

export default PowerPlantModel;

PowerPlantModel.propTypes = {
  models: PropTypes.json,
};
