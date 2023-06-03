import React, { render, screen, fireEvent } from "@testing-library/react";
import Body from "../body/body";
//jest.mock('../../helper/api.js');
import SimulationReport from "../simulationReport/simulationReport.js";
import workingData from "./mockData/data";
import models from "./mockData/data"
import "@testing-library/jest-dom/extend-expect";

//Test form input and text upon page render
it("Form input box renders on page open.", () => {
  render(<Body models={models}/>);
  const text = screen.getAllByPlaceholderText("Input Your Game ID here");
  expect(text[0]).toBeInTheDocument();
});

//Test when user input in form fails
it("test that form in DOM on page", () => {
  render(<Body models={models}/>);
  const inputText = screen.getAllByPlaceholderText("Input Your Game ID here");
  expect(inputText[0]).toBeInTheDocument();
});

it("input game ID information into box and render input", () => {
  render(<Body models={models}/>);
  const inputText = screen.getAllByPlaceholderText("Input Your Game ID here");
  fireEvent.change(inputText[0], { target: { value: "1" } });
  expect(inputText[0].value).toBe("1");
});

/*

This could be because the text is broken up by multiple elements.

it("input game ID information into box then submit, check that loading indicated that data is being fetched", () => {
  render(<Body models={models}/>);
  const inputText = screen.getByPlaceholderText("Input Your Game ID here");
  fireEvent.change(inputText, { target: { value: "1" } });
  const submitButton = screen.getByTestId("section_body_form_submit_button");
  fireEvent.click(submitButton);
  const loadingMessage = screen.getByText("Loading your game...");
  expect(loadingMessage).toBeInTheDocument();
  //Test fetch mock failure??
});
*/

it("Render expect info button not to be in document on initial load", () => {
  render(<Body models={models}/>);
  const icon = screen.queryByTestId("section_body_info");
  expect(icon).toBeNull();
});

//Test that the icon is loaded after a value is fired.

{
  /*it("input game ID information into box then submit, check that info button in dom", () => {
    render(<SimulationReport/>);
    render(<Body/>);
    //pass json data to results.

    const icon = screen.getByTestId("section_body_info");
    expect(icon).toBeInTheDocument();
    //Test fetch mock failure??

})*/
}

//Here we are mocking api call

{
  /*

    it("Mock api call", () => {
    render(<Body/>);
    act( () => {const inputText = screen.getByPlaceholderText("Enter Your Game ID");
    fireEvent.change(inputText, { target: { value: "1"}});
    const submitButton = screen.getByTestId("section_body_form_submit_button");
    fireEvent.click(submitButton)
    }).then( response => {
        console.log(response);
    })   
    //Test fetch mock failure??

})



//Test when user input in form succeeds



//Check that nested components don't load until successful API fetch and props passed down.

//When user form submitted, then display loading
//Async find and pass data to the components, which display after successfull ID entry.
*/
}
