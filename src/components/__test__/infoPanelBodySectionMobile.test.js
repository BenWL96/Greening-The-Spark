import React, { render, screen, fireEvent } from "@testing-library/react";
import InfoPanelBodySectionDesktop from "../infoPanel/infoPanelBodySectionDesktop";
import "@testing-library/jest-dom/extend-expect";

//We need to test the info panel tab at different page widths

const infoPanelData = [
  {
    id: 2,
    question: "Question 1",
    the_simple_answer: "Answer 1",
    the_gts_answer: "Answer 2",
    the_complex_answer: "Answer 3",
  },
  {
    id: 3,
    question: "Question 2",
    the_simple_answer: "Answer 4",
    the_gts_answer: "Answer 5",
    the_complex_answer: "Answer 6",
  },
  {
    id: 4,
    question: "Question 3",
    the_simple_answer: "Answer 7",
    the_gts_answer:"Answer 8",
    the_complex_answer: "Answer 9",
  },
  {
    id: 5,
    question: "Question 4",
    the_simple_answer: "Answer 10",
    the_gts_answer:"Answer 11",
    the_complex_answer: "Answer 12",
  },
];





// Open the window > specific width and make sure it's block
// Open the window < specific width and make sure none

it("Check to see if Question 1 in dom", () => {
    render(<InfoPanelBodySectionDesktop infoPanelData={infoPanelData}/>);
    const question = screen.getAllByText("Question 1");
    const question_count = question.length;
    expect(question_count).toBeGreaterThan(0);

});

it("Check to see if Answer 1 to Question 1 in dom", () => {
    render(<InfoPanelBodySectionDesktop infoPanelData={infoPanelData}/>);
    const question = screen.getAllByText("Answer 1");
    const question_count = question.length;
    expect(question_count).toEqual(1);

});

it("Check to see if Answer 2 to Question 1 in dom", () => {
    render(<InfoPanelBodySectionDesktop infoPanelData={infoPanelData}/>);
    const question = screen.getAllByText("Answer 2");
    const question_count = question.length;
    expect(question_count).toEqual(1);

});

it("Check to see if Answer 3 to Question 1 in dom", () => {
    render(<InfoPanelBodySectionDesktop infoPanelData={infoPanelData}/>);
    const question = screen.getAllByText("Answer 3");
    const question_count = question.length;
    expect(question_count).toEqual(1);

});

it("Check to see if Answer 1 to Question 2 in dom", () => {
    render(<InfoPanelBodySectionDesktop infoPanelData={infoPanelData}/>);
    const question = screen.getAllByText("Answer 4");
    const question_count = question.length;
    expect(question_count).toEqual(1);

});

it("Check to see if Answer 2 to Question 2 in dom", () => {
    render(<InfoPanelBodySectionDesktop infoPanelData={infoPanelData}/>);
    const question = screen.getAllByText("Answer 5");
    const question_count = question.length;
    expect(question_count).toEqual(1);

});

it("Check to see if Answer 3 to Question 2 in dom", () => {
    render(<InfoPanelBodySectionDesktop infoPanelData={infoPanelData}/>);
    const question = screen.getAllByText("Answer 6");
    const question_count = question.length;
    expect(question_count).toEqual(1);

});

it("Check to see if Answer 1 to Question 3 in dom", () => {
    render(<InfoPanelBodySectionDesktop infoPanelData={infoPanelData}/>);
    const question = screen.getAllByText("Answer 7");
    const question_count = question.length;
    expect(question_count).toEqual(1);

});

it("Check to see if Answer 2 to Question 3 in dom", () => {
    render(<InfoPanelBodySectionDesktop infoPanelData={infoPanelData}/>);
    const question = screen.getAllByText("Answer 8");
    const question_count = question.length;
    expect(question_count).toEqual(1);

});

it("Check to see if Answer 3 to Question 3 in dom", () => {
    render(<InfoPanelBodySectionDesktop infoPanelData={infoPanelData}/>);
    const question = screen.getAllByText("Answer 9");
    const question_count = question.length;
    expect(question_count).toEqual(1);

});
