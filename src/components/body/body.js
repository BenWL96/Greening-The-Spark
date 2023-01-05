import React, {useState, useEffect} from 'react';
import Results from '../results/results';
import '../../css/components/body.css';
import Api from '../../helper/api.js';
import LoadingPage from '../loadingPage/loadingPage.js'
import LoadingPageAnimation from '../loadingPageAnimation/loadingPageAnimation';
import Form from '../form/form';
import BackButton from '../backButton/backButton.js'

function Body() {

    {/* Json Data State */}
    const [jsonData, setJsonData] = useState(null);
    const [dataExists, setDataExists] = useState(false);
    const [dataBeingFetchedAndPageLoading, setDataBeingFetchedAndPageLoading] = useState(false);

    {/* User Input State */}
    const [inputGameId, setInputGameId] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    {/* Loading Screen */}
    const [displayLoadingScreen, setDisplayLoadingScreen] = useState(false);
    const [loadingScreenValue, setLoadingScreenValue] = useState(0);



    useEffect(() => {
      
      //Three States:
      //Json exists
      //Json doesn't exist and loading
      //Json doesn't exist and not loading.
        

      if(jsonData){
        console.log("data was found in useEffect");
        setDataBeingFetchedAndPageLoading(false);
        setDataExists(true);
        
      }else if(!jsonData & dataBeingFetchedAndPageLoading === true){
        console.log("Data non existent in useEffect");
        setDataExists(false);
      }else{
        console.log("Data Non existent and no fetch");
        setDataExists(false);

      }
    
    },[dataBeingFetchedAndPageLoading])



    let handleSubmit = async (e) => {

      e.preventDefault();
      setMessage("");
      setDataBeingFetchedAndPageLoading(true);
    
      const json = await Api(inputGameId);

      //Json fetch either success or fail
      //if Success then Sim Reports displayed
      //if Failure then error displayed.

      if (json) {

        //Remove the input box, display the loading logic.

        setDataBeingFetchedAndPageLoading(false);
        setJsonData(json);
        setSuccessMessage("Data from the game with ID: " + inputGameId + " was successfully fetched.");
        
      } else {
        
        setDataBeingFetchedAndPageLoading(false);
        console.log("An error occurred");
        setMessage("The game with ID: " + inputGameId + " could not be found. Please try again.");
        
      }
    
    };


    const displayDataOrNothing = () => {

      if (jsonData){

        return (
          <Results jsonData={jsonData}/>
        )

      }else{
        
        return (
          <></>
        )

      }

    }


    const backButtonClickedUpdateState = () => {

      setJsonData(null);
      setDataExists(null);
      setSuccessMessage("");

    }
  
    const loadingScreenState = (trueOrFalse, loadingValue) => {

      setLoadingScreenValue(loadingValue);
      setDisplayLoadingScreen(trueOrFalse);

    };

    const changeInputGameID = ({e}) => {

      setInputGameId(e.target.value);
      
    }


    return (

        
      <>
      
        {
          displayLoadingScreen ? 
          <> <LoadingPage loadingScreenValue={loadingScreenValue}/> </>
          : 
          <> </> 
        }


        {
        
          dataExists & !dataBeingFetchedAndPageLoading ?
          
          <BackButton backButtonClickedUpdateState={backButtonClickedUpdateState}/>
          
          :

          //If json data doesn't exists and the page isn't loading
          //If json data doesn't exists and the page is loading
          //Display the body of 70vh
          
          <section className='section_body'>
            <div className='section_body_form_wrapper'>

              <LoadingPageAnimation loadingScreenState={loadingScreenState}/>

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
          
        }

        {
          
          dataBeingFetchedAndPageLoading ? 
          
          <></>

          : 
          
          displayDataOrNothing()

        }
        
      </>

    );
}

export default Body;