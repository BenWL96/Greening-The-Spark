import React, {useState, useEffect} from 'react';
import Results from './results';
import '../css/components/body.css';
import Api from '../helper/api.js';
import Info from "../images/info.png";
import Stack from 'react-bootstrap/Stack';

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
      //Success then Sim Reports displayed
      //Failure then error displayed.

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

      )}else{
      return (

        <div></div>

      )}
    }


    const backButtonClickedUpdateState = () => {
    setJsonData(null);
    setDataExists(null);
    setSuccessMessage("");

    }



    return (

        
        <>
        {dataExists & !dataBeingFetchedAndPageLoading ?
          <div data-testid="section_body_loading_wrapper">
            <button className="section_body_back_button" onClick={() => backButtonClickedUpdateState()} data-testid="section_body_back_button">Go Back</button>
          </div>  
          :
          <div className='section_body'>
            <div className='section_body_form_wrapper'>
              <div className="section_body_form_wrapper_card">
                <p className='prompt_game_ID'>Please Enter Your Game ID</p>
                <form onSubmit={handleSubmit} data-testid="section_body_form" className='section_body_form_wrapper_form'>

                <Stack direction="horizontal" gap={0} className="section_body_form_wrapper_form_stack">
                    <div>

                      <input required
                      type="number"
                      value={inputGameId}
                      placeholder="Input Your Game ID here"
                      onChange={(e) => setInputGameId(e.target.value)}
                      min="0"
                      className="section_body_form_wrapper_input"/>
                      
                    </div>
                    <div>
                      <button type="submit" data-testid="section_body_form_submit_button" className="section_body_form_wrapper_button">Submit</button>
                    </div>
                    <div className="ms-auto"></div>

                </Stack>
                 
                
                
                  <div className="message">{message ? <p data-testid="section_body_form_message" className='section_body_form_message_failure'>{message}</p> : null}</div>
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