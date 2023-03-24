import React, {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../app";


it("Landing page should be in document at page render", () => {
  render(<App />);
  const landingPageImg = screen.getByAltText("landing-Page-img");
  expect(landingPageImg).toBeInTheDocument();
})

it("more info button should be in document at page render", () => {
  render(<App />);
  const simulation_report_text = screen.getByText("More Info");
  expect(simulation_report_text).toBeInTheDocument();
});

it("Header should not be in document at page render", () => {
  render(<App />);
  const GTSLogoHeader = screen.queryByAltText("gts-logo");
  expect(GTSLogoHeader).toBeNull()
});

it("Body should not be in document at page render", () => {
  render(<App />);
  const formTextPrompt = screen.queryByText("Enter Your Game ID");
  expect(formTextPrompt).toBeNull()
});


it("Footer should not be in document at page render", () => {
  render(<App />);
  const footerText = screen.queryByText("https://www.cornucopia.co.uk");
  expect(footerText).toBeNull()
});


it("After enter website button clicked check again for Footer text.", () => {
  render(<App />);
  const submitButton = screen.getByText("More Info");
  fireEvent.click(submitButton);
  const footerText = screen.queryByText("https://www.cornucopia.co.uk");
  expect(footerText).toBeNull()
});


it("After enter website button clicked check again for Body text.", () => {
  render(<App />);
  const submitButton = screen.getByText("More Info");
  fireEvent.click(submitButton);
  const footerText = screen.queryByText("Enter Your Game ID");
  expect(footerText).toBeNull()
});
