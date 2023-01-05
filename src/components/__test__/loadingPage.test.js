import React, {render, screen } from '@testing-library/react';
import LoadingPage from '../loadingPage/loadingPage';
import '@testing-library/jest-dom/extend-expect';


it("Loading page displays correct percentage when given prop", () => {
    const loadingScreenValue = 50;
    render(<LoadingPage loadingScreenValue={loadingScreenValue}/>);
    const text = screen.queryByText("50%")
    expect(text).toBeInTheDocument();
})



it("Loading page exhibits new loading screen value after prop state update.", () => {


    const {rerender} = render(<LoadingPage loadingScreenValue={50}/>);

    const text = screen.queryByText("50%")
    expect(text).toBeInTheDocument();

    rerender(<LoadingPage loadingScreenValue={75}/>);

    const text_2 = screen.queryByText("75%");

    expect(text_2).toBeInTheDocument();
    expect(text).not.toBeInTheDocument();

})