import React, { useState, useEffect } from "react";
import Results from "../results/results";
import "../../css/components/body.css";
import Api from "../../helper/api.js";
import LoadingPage from "../loadingPage/loadingPage.js";
import PowerPlantModel from "../powerPlantModel/powerPlantModel";
import Form from "../form/form";
import BackButton from "../backButton/backButton.js";
import PropTypes from "prop-types";

function Body({ models }) {
  {
    /* Json Data State */
  }
  const [jsonData, setJsonData] = useState(null);
  const [dataExists, setDataExists] = useState(false);
  const [dataBeingFetchedAndPageLoading, setDataBeingFetchedAndPageLoading] =
    useState(false);

  {
    /* User Input State */
  }
  const [inputGameId, setInputGameId] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  {
    /* Loading Screen */
  }
  const [displayLoadingScreen, setDisplayLoadingScreen] = useState(false);
  const [loadingScreenValue, setLoadingScreenValue] = useState(0);

  useEffect(() => {
    //Three States:
    //Json exists
    //Json doesn't exist and loading
    //Json doesn't exist and not loading.

    if (jsonData) {
      console.log("Localstorage data found on page loading using useEffect");
      setDataBeingFetchedAndPageLoading(false);
      setDataExists(true);
    } else if (!jsonData & (dataBeingFetchedAndPageLoading === true)) {
      console.log("Data non existent in useEffect");
      setDataExists(false);
    } else {
      console.log("Data Non existent and no fetch");
      setDataExists(false);
    }
  }, [dataBeingFetchedAndPageLoading]);

  let handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setDataBeingFetchedAndPageLoading(true);

    const json = await Api(inputGameId);

    if (json !== 500 && json !== 404) {
      //Remove the input box, display the loading logic.

      setDataBeingFetchedAndPageLoading(false);
      setJsonData(json);
      setSuccessMessage(
        "Data from the game with ID: " +
          inputGameId +
          " was successfully fetched."
      );
    } else if (json === 500) {
      setDataBeingFetchedAndPageLoading(false);
      console.log("An error occurred");
      setMessage("Fetch request failed: 500 error");
    } else if (json === 404) {
      setDataBeingFetchedAndPageLoading(false);
      console.log("404 error.");
      setMessage(
        "The game with ID: " +
          inputGameId +
          " could not be found. Please try again."
      );
    }
  };

  const displayDataOrNothing = () => {
    if (jsonData) {
      return <Results jsonData={jsonData} models={models} />;
    } else {
      return <></>;
    }
  };

  const backButtonClickedUpdateState = () => {
    setJsonData(null);
    setDataExists(null);
    setSuccessMessage("");
  };

  const loadingScreenState = (trueOrFalse, loadingValue) => {
    setLoadingScreenValue(loadingValue);
    setDisplayLoadingScreen(trueOrFalse);
  };

  const changeInputGameID = ({ e }) => {
    setInputGameId(e.target.value);
  };

  return (
    <>
      {displayLoadingScreen ? (
        <>
          {" "}
          <LoadingPage loadingScreenValue={loadingScreenValue} />{" "}
        </>
      ) : (
        <> </>
      )}

      {dataExists & !dataBeingFetchedAndPageLoading ? (
        //If json data doesn't exists and the page is loading
        //Display the back button.

        <BackButton
          backButtonClickedUpdateState={backButtonClickedUpdateState}
        />
      ) : (
        //If json data doesn't exists and the page isn't loading
        //Display the body of 70vh.

        <section className="section-body">
          <div className="section-body_wrapper">
            <PowerPlantModel
              loadingScreenState={loadingScreenState}
              models={models}
            />

            <Form
              handleSubmit={handleSubmit}
              message={message}
              successMessage={successMessage}
              dataBeingFetchedAndPageLoading={dataBeingFetchedAndPageLoading}
              changeInputGameID={changeInputGameID}
              inputGameId={inputGameId}
            />
          </div>
        </section>
      )}

      {dataBeingFetchedAndPageLoading ? <></> : displayDataOrNothing()}
    </>
  );
}

export default Body;

/*Body.propTypes = {
  //Length 11 required.
  models: PropTypes.json.isRequired
  
};*/
