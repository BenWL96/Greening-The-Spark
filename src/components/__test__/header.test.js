import { render, screen } from '@testing-library/react';
import Header from '../header';
import '@testing-library/jest-dom/extend-expect';

it("Render section_header of header component", () => {
    render(<Header/>)
   const text = screen.getByTestId("section_header")
   expect(text).toBeInTheDocument();
})

it("Render section_header_title of header component", () => {
    render(<Header/>)
   const icon = screen.getByTestId("section_header_logo")
   expect(icon).toBeInTheDocument();
})

