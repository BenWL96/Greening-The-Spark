import { render, screen } from "@testing-library/react";
import Footer from "../footer/footer";
import "@testing-library/jest-dom/extend-expect";

test("Footer component should render Cornucopia at all times.", () => {
  render(<Footer />);
  const text = screen.getByText("https://www.cornucopia.co.uk");
  expect(text).toBeInTheDocument;
});
