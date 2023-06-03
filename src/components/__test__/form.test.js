import React, { render, screen, fireEvent } from "@testing-library/react";
import Form from "../form/form";
//jest.mock('../../helper/api.js');
import "@testing-library/jest-dom/extend-expect";

it("Test loading game text exists", () => {
  const dataBeingFetchedAndPageLoading = true;
  render(
    <Form dataBeingFetchedAndPageLoading={dataBeingFetchedAndPageLoading} />
  );
  const text = screen.queryByTestId("document_loading");
  expect(text).toBeInTheDocument();
});

it("Test loading game does not exists", () => {
  const dataBeingFetchedAndPageLoading = false;
  render(
    <Form dataBeingFetchedAndPageLoading={dataBeingFetchedAndPageLoading} />
  );
  const loadingMessage = screen.queryByTestId("document_loading");
  expect(loadingMessage).toBeNull();
});

//Test for messages upon loading of the component

it("Test success or failure messages do not exists", () => {
  const dataBeingFetchedAndPageLoading = false;
  render(
    <Form dataBeingFetchedAndPageLoading={dataBeingFetchedAndPageLoading} />
  );
  const successOrFailuremessages = screen.queryByTestId(
    "section_body_form_message"
  );
  expect(successOrFailuremessages).toBeNull();
});

//Test form interaction

/*it("input game ID information into box and render input", () => {
  render(<Form />);
  const inputText = screen.getAllByPlaceholderText("Input Your Game ID here");
  fireEvent.change(inputText[0], { target: { value: "1" } });
  expect(inputText[0].value).toBe("1");
});*/
