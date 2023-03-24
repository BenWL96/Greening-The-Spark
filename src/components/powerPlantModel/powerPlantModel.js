import { React, useRef, Suspense } from "react";
import "../../css/components/powerPlantModel.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from "@react-three/drei";
import PropTypes from "prop-types";
import DefaultPowerPlant from "./defaultPowerplant.glb"

function PowerPlantModel({ models }) {
  
  function DefaultPowerPlantScene() {
    const modelMesh = useRef();

    const gltf = useLoader(
      GLTFLoader,
      DefaultPowerPlant
    );
    return <primitive object={gltf.scene} ref={modelMesh} />;
  }

  function PowerPlantScene() {
    const modelMesh = useRef();

    const gltf = useLoader(
      GLTFLoader,
      DefaultPowerPlant
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
            <PowerPlantScene />
            <OrbitControls enableZoom={false} dampingFactor={0.5} />
          </Suspense>
        </Canvas>
      </>
      ) : (
        <>
          <Canvas camera={{ fov: 40, position: [50, 5, 5] }}>
            <Suspense>
              <ambientLight intensity={50} />
              <DefaultPowerPlantScene />
              <OrbitControls enableZoom={false} dampingFactor={0.5} />
            </Suspense>
          </Canvas>
        </>
      )}
    </div>
  );
}

export default PowerPlantModel;

PowerPlantModel.propTypes = {
  models: PropTypes.json,
};
