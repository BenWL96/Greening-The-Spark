import { React, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import "../../css/components/infoIconModel.css";
import PropTypes from "prop-types";

function InfoIconModel({ changeStatePanelActivated, models }) {
  function Scene() {
    const propellerMesh = useRef();
    useFrame(({ clock }) => {
      propellerMesh.current.rotation.y = clock.getElapsedTime();
    });

    const gltf = useLoader(GLTFLoader, models[2].model_url);

    return <primitive object={gltf.scene} ref={propellerMesh} crossOrigin />;
  }

  return (
    <div
      className="info-logo"
      id="section_header_info_logo"
      data-testid="section_header_info_logo"
      onClick={changeStatePanelActivated}
    >
      {models.length == 11 ? (
        <>
          <Canvas camera={{ fov: 5, position: [0, 0, 100] }}>
            <ambientLight intensity={5} />
            <Scene />
          </Canvas>
        </>
      ) : (
        <>Error</>
      )}
    </div>
  );
}

export default InfoIconModel;

InfoIconModel.propTypes = {
  changeStatePanelActivated: PropTypes.func.isRequired,
  models: PropTypes.json,
};
