import React, {render, screen, fireEvent } from '@testing-library/react';
import Header from '../header';
import '@testing-library/jest-dom/extend-expect';

it("Render section_header of header component", () => {
    render(<Header/>);
   const text = screen.getByTestId("section_header");
   expect(text).toBeInTheDocument();
})

it("Render section_header_title of header component", () => {
    render(<Header/>);
   const icon = screen.getByTestId("section_header_logo");
   expect(icon).toBeInTheDocument();
})

it("Expect info logo to be in document", () => {
    render(<Header/>);
   const icon = screen.getByTestId("section_header_info_logo");
   expect(icon).toBeInTheDocument();
})


it("Expect the title 'Info' to not be in the document ", () => {
    render(<Header/>);
   const infoText = screen.queryByText("Info");
   expect(infoText).not.toBeInTheDocument();
})

it("click info logo and show info panel", () => {
    render(<Header/>)
   const icon = screen.getByTestId("section_header_info_logo");
   fireEvent.click(icon);
   const infoText = screen.getByText('Info');
   expect(infoText).toBeInTheDocument();
})

it("click info logo and show info panel, then click x to exit.", () => {
    render(<Header/>)
   const infoIcon = screen.getByTestId("section_header_info_logo");
   fireEvent.click(infoIcon);
   const closeIcon = screen.getByTestId("info_wrapper_exit_img");
   fireEvent.click(closeIcon)
   const infoText = screen.queryByText('Info');
   expect(infoText).toBeNull();
})



