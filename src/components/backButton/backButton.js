import React from "react";
import "../../css/components/backButton.css";

function BackButton({ backButtonClickedUpdateState }) {
  return (
    <div data-testid="loading-wrapper">
      <button
        className="loading-wrapper_back-button"
        onClick={() => backButtonClickedUpdateState()}
        data-testid="section_body_back_button"
      >
        Go Back
      </button>
    </div>
  );
}

export default BackButton;
