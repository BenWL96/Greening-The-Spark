import { render, screen } from '@testing-library/react';
import SimulationReport from '../simulationReport';

it("Simulation Report should not be in document at page render", () => {
    render(<SimulationReport/>);
   
})
