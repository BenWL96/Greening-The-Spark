import React, {useState, useEffect} from 'react';
import Results from './results';
import '../css/components/body.css';
import Api from '../helper/api.js';
import Info from "../images/info.png";

// When jsonData doesn't exist, background is fixed,

function Body() {

    {/*Json Data*/}
    const [jsonData, setJsonData] = useState(null);
    const [dataExists, setDataExists] = useState(false);
    const [dataBeingFetchedAndPageLoading, setDataBeingFetchedAndPageLoading] = useState(false);

    {/*User Input*/}
    const [inputGameId, setInputGameId] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");


    useEffect(() => {
      
        //The Three States
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

      if (json) {
        //Remove the input box, display the loading logic.
        setDataBeingFetchedAndPageLoading(false);
        setJsonData(json);
        
        setSuccessMessage("Data from the game with ID: " + inputGameId + " was successfully fetched.");
        } else {
        setDataBeingFetchedAndPageLoading(false);
        console.log("An error occurred");
        setMessage("The game with ID: " + inputGameId + " could not be found.");
      }
    
    };




    const displayDataOrNothing = () => {
    if (jsonData){
      
      return (
        <Results jsonData={jsonData}/>

      )}else{
      return (

        <div></div>
      )}
    }


    const backButtonClicked = () => {
    setJsonData(null);
    setDataExists(null);
    setSuccessMessage("");
    }



    return (

        
        <>
        
        {dataExists & !dataBeingFetchedAndPageLoading ?
          <>
            <button className="section_body_back_button" onClick={() => backButtonClicked()} data-testid="section_body_back_button">Go Back</button>
            {/*<img className="section_body_info" src={Info} data-testid="section_body_info"/>*/}
          </>  
          :
          <div className='section_body'>
            <div className='section_body_form_wrapper'>
              <div className="section_body_form_wrapper_card">
                <p className='prompt_game_ID'>Please Enter Your Game ID</p>
                <form onSubmit={handleSubmit} data-testid="section_body_form" className='section_body_form_wrapper_form'>
                  <input required
                    type="number"
                    value={inputGameId}
                    placeholder="Input Your Game ID here"
                    onChange={(e) => setInputGameId(e.target.value)}
                    min="0"
                  className="section_body_form_wrapper_input"/>
                
                  <button type="submit" data-testid="section_body_form_submit_button" className="section_body_form_wrapper_button">Submit</button>

                  <div className="message">{message ? <p data-testid="section_body_form_message" className='section_body_form_message'>{message}</p> : null}</div>
                  <div className="section_body_form_wrapper_success_message">{successMessage ? <p data-testid="section_body_form_message">{successMessage}</p> : null}</div>
                </form>

                {dataBeingFetchedAndPageLoading ? 
                  <p data-testid="document_loading" className='section_body_loading'>Loading your game...</p>
                  : 
                  <></>
                }
              </div>
            </div>
          </div>
          }

          {dataBeingFetchedAndPageLoading ? 
            <></>
            : 
            displayDataOrNothing()
          }
          


      </>

    );
}

export default Body;