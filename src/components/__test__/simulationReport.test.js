import { render, screen } from "@testing-library/react";
import SimulationReport from "../simulationReport/simulationReport";
import "@testing-library/jest-dom/extend-expect";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import workingData from "./mockData/data";

const failingData = null;

global.console = {
  log: jest.fn(),
};

it("Pass Correct Data To Simulation Report Expect In Doc", () => {
  render(<SimulationReport jsonData={workingData} />);
  const simulationReportText = screen.queryByText("Simulation Report: 1");
  expect(simulationReportText).toBeInTheDocument();
});

it("Pass Working Data To Simulation Report - Log correct info", () => {
  render(<SimulationReport jsonData={workingData} />);
  console.log("Json data has been assigned to variables.");
  // The first argument of the first call to the function was 'hello'
  expect(global.console.log).toHaveBeenCalledWith(
    "Json data has been assigned to variables."
  );
});

it("Pass Failing Data To Simulation Report - Log correct info", () => {
  render(<SimulationReport jsonData={failingData} />);
  console.log("No real data was passed to the simulation report..");
  // The first argument of the first call to the function was 'hello'
  expect(global.console.log).toHaveBeenCalledWith(
    "No real data was passed to the simulation report.."
  );
});

//Jest Log.
//https://rogerramos.me/test-console-log-with-jest/
