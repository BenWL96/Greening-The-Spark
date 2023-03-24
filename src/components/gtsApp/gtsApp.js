import React, { useState, useEffect } from "react";
import "../../css/components/gtsApp.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Body from "../body/body";
import infoPanelApiFetch from "../../helper/infoPanelApiFetch.js";
import ThreeModelsApiFetch from "../../helper/threeModelsApiFetch.js";

function GtsApp() {
  //After functionality works, pass to popovers.
  const [infoPanelData, setInfoPanelData] = useState({});
  const [models, setModels] = useState({});

  const assignInfoPanelDataToLocalStorage = (data) => {
    if (data) {
      console.log("Data has been fetched successfully");
      console.log("Set data to localstorage");

      localStorage.setItem("info_tab_data", JSON.stringify(data));

      console.log("Data has now been set to state");
      setInfoPanelData(data);

      //Pass the information to the header and body
    } else {
      console.log("Something went wrong with the fetch, please try again");
    }
  };

  const fetchInfoPanelDataORResetInfoPanelDataState = async () => {
    const doesInfoPanelDataExistBoolean =
      JSON.parse(localStorage.getItem("info_tab_data")) === null;

    if (doesInfoPanelDataExistBoolean === true) {
      const data = await infoPanelApiFetch();

      if (typeof data != 'number' ){
        //Do not set the error code to local storage...

        assignInfoPanelDataToLocalStorage(data);
      }

      const models = await ThreeModelsApiFetch();
      
      setModels(models);
    } else {
      //useEffect only runs on page load, so set state to local storage.

      setInfoPanelData(JSON.parse(localStorage.getItem("info_tab_data")));

      const models = await ThreeModelsApiFetch();
      setModels(models);

      console.log(
        "info panel data in localstorage now passed to state hooksetInfoPanelData"
      );
    }
  };

  useEffect(() => {
    fetchInfoPanelDataORResetInfoPanelDataState();
  }, []);

  return (
    <>
      <Header infoPanelData={infoPanelData} models={models} dataIsSetTrigger={assignInfoPanelDataToLocalStorage} />

      <Body models={models} />

      <Footer />
    </>
  );
}

export default GtsApp;
