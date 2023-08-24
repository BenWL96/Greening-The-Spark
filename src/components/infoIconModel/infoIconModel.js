import { React, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three-stdlib';

import "../../css/components/infoIconModel.css";
import PropTypes from "prop-types";
import DefaultInfoIconSmooth from './defaultInfoIconSmooth.glb';

function InfoIconModel({ changeStatePanelActivated, models }) {
  
  
  function DefaultInfoIconScene() {
    const propellerMesh = useRef();
    useFrame(({ clock }) => {
      propellerMesh.current.rotation.y = clock.getElapsedTime();
    });

    const gltf = useLoader(GLTFLoader, DefaultInfoIconSmooth);

    return <primitive object={gltf.scene} ref={propellerMesh} crossOrigin />;
  }

  function InfoIconScene() {
    const propellerMesh = useRef();
    useFrame(({ clock }) => {
      propellerMesh.current.rotation.y = clock.getElapsedTime();
    });

    const gltf = useLoader(GLTFLoader, DefaultInfoIconSmooth);

    return <primitive object={gltf.scene} ref={propellerMesh} crossOrigin />;
  }

  return (
    <div
      className="info-logo"
      id="section_header_info_logo"
      data-testid="section_header_info_logo"
      onClick={changeStatePanelActivated}
    >

      {/* Model should either be json is status code 200 or int if 404 or 500 */}
      {typeof models != 'number' ? (
        <>
          <Canvas camera={{ fov: 5, position: [0, 0, 100] }}>
            <ambientLight intensity={10} />
            <InfoIconScene />
          </Canvas>
        </>
      ) : (

        <>
          <Canvas camera={{ fov: 5, position: [0, 0, 100] }}>
            <ambientLight intensity={10} />
            <DefaultInfoIconScene />
          </Canvas>
        </>

      )}
    </div>
  );
}

export default InfoIconModel;

InfoIconModel.propTypes = {
  changeStatePanelActivated: PropTypes.func.isRequired,
  infoPanelData: PropTypes.oneOfType([
    PropTypes.json,
    PropTypes.number
  ]),
};
