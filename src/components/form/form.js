import React from 'react';
import Stack from 'react-bootstrap/Stack';
import '../../css/components/form.css';

function Form({

  handleSubmit, message, successMessage, 
  dataBeingFetchedAndPageLoading, changeInputGameID, inputGameId
  
}) {

    return (

        <div className="section_body_form_wrapper_card">
          
          <p className='prompt_game_ID'>Please Enter Your Game ID</p>
          <form onSubmit={handleSubmit} data-testid="section_body_form" className='section_body_form_wrapper_form'>

            <Stack direction="horizontal" gap={0} className="section_body_form_wrapper_form_stack">
              <div>

                <input required
                        type="number"
                        value={inputGameId}
                        placeholder="Input Your Game ID here"
                        onChange={(e) => changeInputGameID({e})}
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

    );
}

export default Form;