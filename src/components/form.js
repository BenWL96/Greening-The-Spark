import React from 'react';

function Form(props) {

    {/*User Input 
    const [input_game_id, setInput_Game_Id] = useState("");
    const [message, setMessage] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          let res = await fetch("api/v1/sim-reports/" + input_game_id + "/details", {
            method: "GET",
            });
          let json = await res.json();
          if (res.status === 200) {
            //Remove the input box, display the loading logic.
            PassInState(json);
            
            setMessage("Data from the game with ID: " + input_game_id + " was successfully fetched.");
          } else {
            console.log("404 error")
            setMessage("The game with ID: " + input_game_id + " could not be found.");
          }
        } catch (err) {
          setMessage("An error occurred.");
          console.log(err);
        }
        
      };*/}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input required
                type="number"
                value={input_game_id}
                placeholder="Input Your Game ID here"
                onChange={(e) => setInput_Game_Id(e.target.value)}
                />
            
                <button type="submit">Create</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    );
}

export default Form;