import React, {render, screen, fireEvent } from '@testing-library/react';
import Header from '../header/header';
import InfoAnimation from '../infoAnimation';

import '@testing-library/jest-dom/extend-expect';

it("Render section_header of header component", () => {
    render(<Header/>);
   const text = screen.getByTestId("section_header");
   expect(text).toBeInTheDocument();
})

//useEffect disables this.

it("Render section_header_title of header component", () => {
    render(<Header/>);
   const icon = screen.getByTestId("section_header_logo");
   expect(icon).toBeInTheDocument();
})

it("Expect info logo not to be in document", () => {
    render(<Header/>);
   const icon = screen.getByTestId("section_header_info_logo");
   expect(icon).not.toBeVisible();

})



it("Expect info logo not to be in document", () => {
    render(<Header/>);
   const icon = screen.getByTestId("section_header_info_logo");
   expect(icon).not.toBeVisible();

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




it("Expect info logo not to be in document", () => {
    render(<Header/>);
    const icon = screen.getByTestId("section_header_info_logo");
    expect(icon).not.toBeVisible();

})


//Test to make sure that localstorage functioning correctly
//fetch needs to be mocked in order for this to work
//as the component accepts no parameters.

{/*const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };
  
global.localStorage = localStorageMock;


const data = [
    {
        "question_id": 1,
        "question": "Who Did What",
        "the_simple_answer": "Jimmy Neutron Did It",
        "the_gts_answer": "GTS tries to model This",
        "the_complex_answer": "Jimmy Neutron Fired A Neutrino Gun"
    }
];


it("expect that localstorage not set when no fetch.", () => {
    render(<Header/>);
    console.log(localStorageMock.setItem);
    //expect(localStorageMock.setItem).not.toHaveBeenCalledWith('info_tab_data');

});*/}