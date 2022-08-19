import React, {useState, useEffect} from 'react';
import Results from './results';
import '../css/components/body.css';

function Body() {


    const [json_data, setJson_Data] = useState(null);
    const [data_exists, setData_Exists] = useState(false);
    const [data_being_fetched_and_loading, setData_Being_Fetched_And_Loading] = useState(false);

    {/*User Input */}
    const [input_game_id, setInput_Game_Id] = useState("");
    const [message, setMessage] = useState("");



    useEffect(() => {
        //The Three States
        //Json exists
        //Json doesn't exist and loading
        //Json doesn't exist and not loading.

        if(json_data){
        console.log("data was found in useEffect");
        setData_Being_Fetched_And_Loading(false);
        setData_Exists(true);
        
        }else if(!json_data & data_being_fetched_and_loading === true){
        console.log("Data non existent in useEffect");
        setData_Exists(false);
        }else{
        console.log("Data Non existent and no fetch");
        setData_Exists(false);

        }
    
    },[data_being_fetched_and_loading])



    let handleSubmit = async (e) => {
    e.preventDefault();

    setData_Being_Fetched_And_Loading(true);

    try {
        let res = await fetch("/api/v1/sim-reports/" + input_game_id + "/details/", {
        method: "GET",
        });
        let json = await res.json();
        if (res.status === 200) {
        //Remove the input box, display the loading logic.
        setData_Being_Fetched_And_Loading(false);
        setJson_Data(json);
        
        setMessage("Data from the game with ID: " + input_game_id + " was successfully fetched.");
        } else {
        setData_Being_Fetched_And_Loading(false);
        console.log("404 error")
        setMessage("The game with ID: " + input_game_id + " could not be found.");
        }
    } catch (err) {
        setData_Being_Fetched_And_Loading(false);
        setMessage("An error occurred.");
        console.log(err);
    }
    
    };


    const displayEnterGameID = () => {
    if (json_data){
        return (
        <div></div>
        )}else{
        return (
            <p className='prompt_game_ID'>Please Enter Your Game ID</p>
        )
        
        }
    }



    const displayDataOrNothing = () => {
    if (json_data){
        return (

        <Results json_data={json_data}/>

        )}else{
        return (
            <div></div>
        )
        
        }
    }


    const backButtonClicked = () => {
    setJson_Data(null);
    setData_Exists(null);
    setMessage("");
    }



    return (

        <div className='section_body'>
        {data_being_fetched_and_loading ? 
            <></>
          : 
          displayEnterGameID()
        }
        
        {data_exists & !data_being_fetched_and_loading ?
          <button className="section_body_back_button" onClick={() => backButtonClicked()} data-testid="section_body_back_button" >Go Back</button>
          :
          <div className='section_body_form_wrapper'>
            <form onSubmit={handleSubmit} data-testid="section_body_form" className='section_body_form_wrapper_form'>
              <input required
                type="number"
                value={input_game_id}
                placeholder="Input Your Game ID here"
                onChange={(e) => setInput_Game_Id(e.target.value)}
               className="section_body_form_wrapper_input"/>
            
              <button type="submit" data-testid="section_body_form_submit_button" className="section_body_form_wrapper_button">Create</button>

              <div className="message">{message ? <p data-testid="section_body_form_message" className='section_body_form_message'>{message}</p> : null}</div>
            </form>
            </div>
          }

        {data_being_fetched_and_loading ? 
            <p data-testid="document_loading">Loading</p>
          : 
          displayDataOrNothing()
        }
      </div>

    );
}

export default Body;