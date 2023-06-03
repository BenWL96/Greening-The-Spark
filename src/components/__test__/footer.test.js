import { render, screen } from "@testing-library/react";
import Footer from "../footer/footer";
import "@testing-library/jest-dom/extend-expect";

test("Footer component should render Cornucopia at all times.", () => {
  render(<Footer />);
  
});
