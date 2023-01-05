import React from 'react';
import '../../css/components/backButton.css';

function BackButton({backButtonClickedUpdateState}) {
    return (
        <div data-testid="section_body_loading_wrapper">
            <button className="section_body_back_button" onClick={() => backButtonClickedUpdateState()} data-testid="section_body_back_button">
              Go Back
            </button>
        </div>  
    );
}

export default BackButton;