import React, { useState, useEffect } from "react";
import Results from "../results/results";
import "../../css/components/body.css";
import SimReportDetailApiFetch from "../../helper/simReportDetailApiFetch.js";
import SimReportFieldInfoApiFetch from "../../helper/simReportFieldInfoApiFetch.js";
import Form from "../form/form";
import BackButton from "../backButton/backButton.js";
import PropTypes from "prop-types";

function Body({ models }) {
  {
    /* Json Data State */
  }
  const [simReportData, setSimReportData] = useState(null);
  const [dataExists, setDataExists] = useState(false);
  const [dataBeingFetchedAndPageLoading, setDataBeingFetchedAndPageLoading] =
    useState(false);
  const [simRepoFieldData, setSimRepoFieldData] = useState(null);

  {
    /* User Input State */
  }
  const [inputGameId, setInputGameId] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  useEffect(() => {


    // Three States:
    // Json exists
    // Json doesn't exist and loading
    // Json doesn't exist and not loading.

    // States control the text that is displayed to the user
    // depending on response success or failure.
    const fetchingSimReportData = !simReportData & (dataBeingFetchedAndPageLoading === true)
    
    if (simReportData) {

      // Simulation Report loaded so display the 'Back Button'
      // which takes the user back to the form input.
      console.log("Display the simulation report and back button.");
      setDataBeingFetchedAndPageLoading(false);
      setDataExists(true);
    } else if (fetchingSimReportData == true) {
      
      // Fetching the simulation report but
      // Simulation Report Doesn't Exist
      // display an error
      console.log("Fetching the simulation report");
      setDataExists(false);

    } else {

      // Not fetching simulation report
      // And user hasn't entered information
      console.log("Display the form");
      setDataExists(false);
    }
  }, [dataBeingFetchedAndPageLoading]);



  let handleSubmit = async (e) => {

    e.preventDefault();

    // Hide the message under the form field.
    setMessage("");
    // 
    setDataBeingFetchedAndPageLoading(true);

    const simReportResponse = await SimReportDetailApiFetch(inputGameId);
    const simReportResponseNoErrors = simReportResponse !== 500 && simReportResponse !== 404;

    if (simReportResponseNoErrors == true) {

      //Remove the input box, display the loading logic.
      
      const fieldDataResponse = await SimReportFieldInfoApiFetch();

      if (fieldDataResponse !== 500 && simReportResponse !== 404) {
        // Set state fieldDataResponse variable.
        setSimRepoFieldData(fieldDataResponse);
      } else if (fieldDataResponse === 500) {
        console.log("fieldDataResponse 500 error");
      } else if (fieldDataResponse === 404) {
        setDataBeingFetchedAndPageLoading(false);
        console.log("404 error. fieldDataResponse could not be found");
      }

      setDataBeingFetchedAndPageLoading(false);
      setSimReportData(simReportResponse);
      setSuccessMessage(
        "Data from the game with ID: " +
          inputGameId +
          " was successfully fetched."
      );

    } else if (simReportResponse === 500) {

      
      console.log("An error occurred");
      setDataBeingFetchedAndPageLoading(false);
      setMessage("Fetch request failed: 500 error");


    } else if (simReportResponse === 404) {

      console.log("404 error.");
      setDataBeingFetchedAndPageLoading(false);
      setMessage(
        "The game with ID: " +
          inputGameId +
          " could not be found. Please try again."
      );

    }
  };

  const displayDataOrNothing = () => {

    // Data is not being fetched and page is not loading
    // This means that the Simulation report may or may not 
    // exists in state simReportData.

    if (simReportData) {

      // Simulation report exists so disply the Simulation report
      // to the user.

      return <Results simReportData={simReportData} models={models} simRepoFieldData={simRepoFieldData}/>;
    } else {
      
      // Simulation report doesn't exist 
      return <></>;
    }
  };

  const backButtonClickedUpdateState = () => {
    
    // Updating these states will take the user back 
    // to the 'Enter Game ID form'

    setSimReportData(null);
    setDataExists(null);
    setSuccessMessage("");

  };


  const changeInputGameID = ({ e }) => {
    setInputGameId(e.target.value);
  };

  return (
    <>

      {dataExists & !dataBeingFetchedAndPageLoading ? (

        // If simReportResponse data doesn't exists and the page is loading
        // Display the back button.

        <BackButton
          backButtonClickedUpdateState={backButtonClickedUpdateState}
        />

      ) : (

        // If simReportResponse data doesn't exists and the page isn't loading
        // Display the 'Input Game ID' form.

        <Form
          handleSubmit={handleSubmit}
          message={message}
          successMessage={successMessage}
          dataBeingFetchedAndPageLoading={dataBeingFetchedAndPageLoading}
          changeInputGameID={changeInputGameID}
          inputGameId={inputGameId}
        />

      )}

      
      {dataBeingFetchedAndPageLoading ? <></> : displayDataOrNothing()}
    </>
  );
}

export default Body;

Body.propTypes = {

  models: PropTypes.oneOfType([
    PropTypes.json,
    PropTypes.number
  ]),
};
