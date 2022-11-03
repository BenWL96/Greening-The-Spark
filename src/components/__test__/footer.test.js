import { render, screen } from '@testing-library/react';
import Footer from '../footer';
import '@testing-library/jest-dom/extend-expect';

test("Footer component should render Cornucopia at all times.", () => {
     render(<Footer/>)
    const text = screen.getByText("https://www.cornucopia.co.uk");
    expect(text).toBeInTheDocument;
})


test("Test that footer renders social icons.", () => {
    render(<Footer/>)
    const icon_1 = screen.getByTestId("section_footer_wrapper_icon_1");
    const icon_2 = screen.getByTestId("section_footer_wrapper_icon_2");
    const icon_3 = screen.getByTestId("section_footer_wrapper_icon_3");

    expect(icon_1).toBeInTheDocument;
    expect(icon_2).toBeInTheDocument;
    expect(icon_3).toBeInTheDocument;
})




