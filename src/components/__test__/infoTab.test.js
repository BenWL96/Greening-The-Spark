import React, { render, screen, fireEvent } from "@testing-library/react";
import InfoTab from "../infotab/infoTab";
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
    the_simple_answer: "They Did It In 1964",
    the_gts_answer: "GTS tries to model This",
    the_complex_answer: "Jimmy Neutron Fired A Neutrino Gun",
  },
  {
    id: 4,
    question: "Question 3",
    the_simple_answer: "Answer 1",
    the_gts_answer:
      "GTS tries to model ThisGTS tries to model ThisGTS tries to model ThisGTS tries to model ThisGTS tries to model ThisGTS tries to model ThisGTS tries to model ThisGTS tries to model ThisGTS tries to model This GTS tries to model ThisGTS tries to model ThisG",
    the_complex_answer: "Jimmy Neutron Fired A Neutrino Gun In 1964",
  },
  {
    id: 5,
    question: "How does this work?",
    the_simple_answer: "It just does.",
    the_gts_answer: 'Because I"m clever.',
    the_complex_answer: "See manual.",
  },
];

// All data in first panel should be displayed, the other question data SHOULD be visible, answers which
// Belong to Other questions should NOT be visible.
it("Pass info panel tab json data then check to see if title 1 in dom", () => {
  render(<InfoTab infoPanelData={infoPanelData} />);
  const question = screen.getAllByText("Question 1");
  console.log(question);
  console.log(question);
  const question_count = question.length;
  expect(question_count).toBeGreaterThan(0);
});

it("Pass info panel tab json data then check to see if simple answer in dom", () => {
  render(<InfoTab infoPanelData={infoPanelData} />);
  const question = screen.getAllByText("Answer 1");
  const question_count = question.length;
  expect(question_count).toBeGreaterThan(0);
});

it("Pass info panel tab json data then check to see if gts answer in dom", () => {
  render(<InfoTab infoPanelData={infoPanelData} />);
  const question = screen.getAllByText("Answer 2");
  const question_count = question.length;
  expect(question_count).toBeGreaterThan(0);
});

it("Pass info panel tab json data then check to see if complex answer in dom", () => {
  render(<InfoTab infoPanelData={infoPanelData} />);
  const question = screen.getAllByText("Answer 3");
  const question_count = question.length;
  expect(question_count).toBeGreaterThan(0);
});

//Checking other questions are in the document

it("Check if the second question is in the document.", () => {
  render(<InfoTab infoPanelData={infoPanelData} />);
  const question = screen.getAllByText("Question 2");
  const question_count = question.length;
  expect(question_count).toBeGreaterThan(0);
});

it("Test that Question 3 is in the document.", () => {
  render(<InfoTab infoPanelData={infoPanelData} />);
  const question = screen.getAllByText("Question 3");
  const question_count = question.length;
  expect(question_count).toBeGreaterThan(0);
});

it("Test that final question is in the document.", () => {
  render(<InfoTab infoPanelData={infoPanelData} />);
  const question = screen.getAllByText("How does this work?");
  const question_count = question.length;
  expect(question_count).toBeGreaterThan(0);
});

//Checking other answer are not in document - THESE DON'T WORK

it("Test answer 1 from question 2 are not in the document.", () => {
  render(<InfoTab infoPanelData={infoPanelData} />);
  const answer_1 = screen.queryByText("They Did It In 1964");
  expect(answer_1).toBeNull();
});

it("Test answer 2 from question 2 are not in the document.", () => {
  render(<InfoTab infoPanelData={infoPanelData} />);
  const answer_2 = screen.queryByText("GTS tries to model This");
  expect(answer_2).toBeNull();
});

it("Test answer 2 from question 2 are not in the document.", () => {
  render(<InfoTab infoPanelData={infoPanelData} />);
  const answer_3 = screen.queryByText("Jimmy Neutron Fired A Neutrino Gun");
  expect(answer_3).toBeNull();
});

//answers can't be accessed directly..
//TestingLibraryElementError: Unable to find an element with the text: Answer3. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

{
  /*it("Pass info panel tab json data then check to see if a2 to q1 in dom", () => {
    render(<InfoTab infoPanelData={questionsAndAnswers}/>);
    const question = screen.getByTestId("custom-element");
    print(question);

});

it("Pass info panel tab json data then check to see if a2 to q1 in dom", () => {
    render(<InfoTab infoPanelData={questionsAndAnswers}/>);
    const question = screen.getByText("Answer2");
    const question_count = question.length;
    expect(question_count).toBeGreaterThan(0);

});
it("Pass info panel tab json data then check to see if a3 to q1 in dom", () => {
    render(<InfoTab infoPanelData={questionsAndAnswers}/>);
    const question = screen.getByText("Answer3");
    const question_count = question.length;
    expect(question_count).toBeGreaterThan(0);

});*/
}

{
  /*it("Pass info panel tab json data then check to see if first button exists", () => {
    render(<InfoTab infoPanelData={questionsAndAnswers}/>);
    const question_1 = screen.getByRole('tab', { name: "Question 1" });
    expect(question_1).toBeInTheDocument();

});


it("Pass info panel tab json data then check to see if second button exists", () => {
    render(<InfoTab infoPanelData={questionsAndAnswers}/>);
    const question_2 = screen.getByRole('tab', { name: "When Did They Do It" });
    expect(question_2).toBeInTheDocument();

});

// We know that the first button will automatically selected 
// On page render so no need to test click.

it("Pass info panel tab json data then check to see if second button exists then click and see if simple answer passed", () => {
    render(<InfoTab infoPanelData={questionsAndAnswers}/>);
    const question_2 = screen.getByRole('tab', { name: "When Did They Do It" });
    fireEvent.click(question_2);
    const simple_answer = screen.getAllByText(/Jimmy Neutron Did It/);
    const simple_answer_count = simple_answer.length;
    expect(simple_answer_count).toBeGreaterThan(0);

});

it("Pass info panel tab json data then check to see if second button exists then click and see if gts info passed", () => {
    render(<InfoTab infoPanelData={questionsAndAnswers}/>);
    const question_2 = screen.getByRole('tab', { name: "When Did They Do It" });
    fireEvent.click(question_2);
    const gts_answer = screen.getAllByText(/GTS tries to model This/);
    const gts_answer_count = gts_answer.length;
    expect(gts_answer_count).toBeGreaterThan(0);

});

it("Pass info panel tab json data then check to see if second button exists then click and see if complex info passed", () => {
    render(<InfoTab infoPanelData={questionsAndAnswers}/>);
    const question_2 = screen.getByRole('tab', { name: "When Did They Do It" });
    fireEvent.click(question_2);
    const complex_answer = screen.getAllByText(/Jimmy Neutron Fired A Neutrino Gun/);
    const complex_answer_count = complex_answer.length;
    expect(complex_answer_count).toBeGreaterThan(0);

});*/
}
