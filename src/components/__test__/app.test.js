import React, { getAllByText, getByText, render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../../app';



it("Landing page should be in document at page render", () => {
    render(<App/>);
    const simulation_report_text = screen.querySelector('#landingPage');
    expect(simulation_report_text).toBeInTheDocument();
   
})



it("Simulation Report should not be in document at page render", () => {
    render(<App/>);
    const simulation_report_text = screen.getByText("Simulation Report");
    expect(simulation_report_text).not.toBeInTheDocument();
   
})
