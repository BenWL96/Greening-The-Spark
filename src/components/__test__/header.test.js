import { render, screen } from '@testing-library/react';
import Header from '../header';

it("Render text of header component", () => {
    render(<Header/>)
   const text = screen.getByText("Greening The Spark");

   expect(text).toBeInTheDocument();
})

it("Render section_header of header component", () => {
    render(<Header/>)
   const text = screen.getByTestId("section_header")
   expect(text).toBeInTheDocument();
})

it("Render section_header_title of header component", () => {
    render(<Header/>)
   const text = screen.getByTestId("section_header_title")
   expect(text).toBeInTheDocument();
})



