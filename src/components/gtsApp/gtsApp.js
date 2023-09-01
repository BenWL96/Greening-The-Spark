import React, { useState, useEffect } from "react";
import "../../css/components/gtsApp.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Body from "../body/body";
import infoPanelApiFetch from "../../helper/infoPanelApiFetch.js";
import ThreeModelsApiFetch from "../../helper/threeModelsApiFetch.js";
import {AssignInfoPanelDataToLocalStorage} from "./assignInfoPanelDataToLocalStorage";

function GtsApp({alterStateLandingPageActivated}) {
  
  // Info panel data fetched.
  // Along with this 3d model icons fetched

  const [infoPanelData, setInfoPanelData] = useState({});
  const [models, setModels] = useState({});

  const changeStateInfoPanelData = (data) => {
      setInfoPanelData(data);
  }

  const fetchInfoPanelDataORResetInfoPanelDataState = async () => {


    const localStorageInfoPanelDataIsNull =
      JSON.parse(localStorage.getItem("info_tab_data")) === null;

    if (localStorageInfoPanelDataIsNull === true) {

      // Data doesn't exist so fetch it.
      const data = await infoPanelApiFetch();
      // The endpoint X will return data or a error code.
      if (typeof data != 'number' ){
        // The fetch was successful.
        // Set data to local storage.
        AssignInfoPanelDataToLocalStorage(data, changeStateInfoPanelData);
      }

      // ! Error handling should be here
      const models = await ThreeModelsApiFetch();;
      setModels(models);

    } else {

      // Fetch the information stored.
      setInfoPanelData(JSON.parse(localStorage.getItem("info_tab_data")));
      const models = await ThreeModelsApiFetch();
      setModels(models);

    }
  };

  useEffect(() => {
    fetchInfoPanelDataORResetInfoPanelDataState();
  }, []);

  return (
    <>
      <Header infoPanelData={infoPanelData} models={models} dataIsSetTrigger={AssignInfoPanelDataToLocalStorage} alterStateLandingPageActivated={alterStateLandingPageActivated}/>

      <Body models={models} />

      <Footer />
    </>
  );
}

export default GtsApp;
