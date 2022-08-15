import { render, screen } from '@testing-library/react';
import Footer from '../footer';

test("Footer component should be rendered at all times", () => {
     render(<Footer/>)
    const text = screen.getByText("Social Icons + contact page + aboutpage + carl's website");
    expect(text).toBeInTheDocument;
})