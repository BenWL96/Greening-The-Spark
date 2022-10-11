import { render, screen } from '@testing-library/react';
import SimulationReport from '../simulationReport';



{/*it("Simulation Report should not be in document at page render", () => {
    render(<SimulationReport/>);
    const simulation_report_text = screen.getByTestId("section_simrepo_title");
    expect().toBeInTheDocument();
   
})*/}



const working_post_data = {
	date: "2022-08-16",
	time: "14:26:01",
	simulation_start_time: "14:26:01",
	simulation_end_time: "14:26:01",
	simulation_run_time_days: 1,
	demand: -23,
	wind: -23,
	solar: 42,
	fossil_fuels: -62,
	nuclear: 64,
	surplus: 23,
	shortfall: 16,
	initial_stored: 45,
	final_stored: 25,
	storage_discrepancy: 1,
	efficiency_score: 51,
	total_CO2: 62,
	total_cost: 54,
	average_CO2: 62,
	average_cost: 72,
	efficiency: "Red",
	economy: "Red",
	eco_friendliness : "Red",
	wind_data_values : [-54, 41, 24, -15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61],
	solar_data_values : [-54, 41, 24, -15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61],
	demand_data_values : [-54, 41, 24, -15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61],
	if_power_data_values : [-54, 41, 24, -15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61],
	nuclear_power_data_values : [-54, 41, 24, -15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61],
	battery_power_data_values : [-54, 41, 24, -15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61],
	 hydro_power_data_values : [-54, 41, 24, -15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61],
	batteries_level_data_values : [-54, 41, 24, -15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61],
	hydro_level_data_values : [-54, 41, 24, -15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61, 54, 41, 24, 15, 61]
};


const failing_post_data = null;

it("Pass Correct Data To Simulation Report Expect In Doc", () => {
    render(<SimulationReport json_data={working_post_data}/>);
    const simulation_report_text = screen.getByText("Simulation Report");
    expect(simulation_report_text).toBeInTheDocument();
})

global.console = {
    log: jest.fn(),
}

//I CAN'T FIGURE OUT HOW THIS WORKS.. We need to return logggg.
it("Pass Failing Data To Simulation Report - Log correct info", () => {
    render(<SimulationReport json_data={failing_post_data}/>);
    console.log("No real data was passed to the simulation report..")
    // The first argument of the first call to the function was 'hello'
    expect(global.console.log).toHaveBeenCalledWith("No real data was passed to the simulation report..")
})


//Jest Log.
//https://rogerramos.me/test-console-log-with-jest/
