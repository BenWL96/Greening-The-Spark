import React from "react";
import Stack from "react-bootstrap/Stack";
import "../../css/components/form.css";
import PropTypes from "prop-types";

function Form({
  handleSubmit,
  message,
  successMessage,
  dataBeingFetchedAndPageLoading,
  changeInputGameID,
  inputGameId,
}) {
  return (
    <section className="section-body">
      <div className="section-body_wrapper">
    <div className="form-wrapper">
      <div className="form-wrapper-child">
        <div class="form-desktop-wrapper">
          <p className="form-wrapper_text-prompt">Enter Your Game ID</p>
          <form
            onSubmit={handleSubmit}
            data-testid="section_body_form"
            className="form"
          >
            <Stack direction="horizontal" gap={0} className="form_stack">
              <div>
                <input
                  required
                  type="number"
                  value={inputGameId}
                  placeholder="Input Your Game ID here"
                  onChange={(e) => changeInputGameID({ e })}
                  min="0"
                  className="form_input-box"
                />
              </div>
              <div>
                <button
                  type="submit"
                  data-testid="section_body_form_submit_button"
                  className="form_button"
                >
                  Submit
                </button>
              </div>
              <div className="ms-auto"></div>
            </Stack>

            <div className="message">
              {message ? (
                <p
                  data-testid="section_body_form_message"
                  className="form_failure-message"
                >
                  {message}
                </p>
              ) : null}
            </div>
            <div className="form_success-message">
              {successMessage ? (
                <p data-testid="section_body_form_wrapper_success_message">
                  {successMessage}
                </p>
              ) : null}
            </div>
          </form>
        </div>

        <div className="form-phone-wrapper">
          <p className="form-wrapper_text-prompt">Enter Your Game ID</p>
          <form
            onSubmit={handleSubmit}
            data-testid="section_body_form"
            className="form"
          >
            <Stack direction="horizontal" gap={0} className="form_stack">
              <div>
                <input
                  required
                  type="number"
                  value={inputGameId}
                  placeholder="Input Your Game ID here"
                  onChange={(e) => changeInputGameID({ e })}
                  min="0"
                  className="form_input-box-phone"
                />
              </div>
            </Stack>
            <Stack direction="horizontal" gap={0} className="form_stack">
              
              <div>
                <button
                  type="submit"
                  data-testid="section_body_form_submit_button"
                  className="form_button-phone"
                >
                  Submit
                </button>
              </div>
        
            </Stack>

            <div className="message">
              {message ? (
                <p
                  data-testid="section_body_form_message"
                  className="form_failure-message"
                >
                  {message}
                </p>
              ) : null}
            </div>
            <div className="form_success-message">
              {successMessage ? (
                <p data-testid="section_body_form_wrapper_success_message">
                  {successMessage}
                </p>
              ) : null}
            </div>
          </form>
        </div>

        {dataBeingFetchedAndPageLoading ? (
          <p data-testid="document_loading" className="section_body_loading">
            Loading your game data...
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
    </div>
  </section>
  );
}

export default Form;

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  successMessage: PropTypes.string.isRequired,
  dataBeingFetchedAndPageLoading: PropTypes.bool.isRequired,
  changeInputGameID: PropTypes.func.isRequired,
  inputGameId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
