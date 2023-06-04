import "../../css/components/results.css";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import PropTypes from "prop-types";
import React, { useEffect,useState } from "react";
import { Line } from "react-chartjs-2";

import {
  GridPerformanceDetails,
  Labels,
  ControlledSourcesDetails,
  WeatherConsumerDemandScenarioDetails,
} from "../graphs/graphDetails";
import SimulationReport from "../simulationReport/simulationReport.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Results({ simReportData, models, simRepoFieldData }) {
  {
    /*Graphs*/
  }

  //Wind, Solar, And Demand Inputs
  let [windLevelValues, setWindLevelValues] = useState(null);
  let [solarLevelValues, setSolarLevelValues] = useState(null);
  let [demandLevelValues, setDemandLevelValues] = useState(null);

  //Manual Control Of Renewables
  let [fossilFuelsPowerLevelValues, setFossilFuelsPowerLevelValues] =
    useState(null);
  let [nuclearLevelValues, setNuclearLevelValues] = useState(null);

  //Batteries, Pumped Hydro And Overall Supply Status
  let [batteriesPowerValues, setBatteriesPowerValues] = useState(null);
  let [hydroPowerValues, setHydroPowerValues] = useState(null);
  let [gridSurplusValues, setGridSurplusValues] = useState(null);

  const WindSolarDemandLabels = {
    //Wind, solar, and demand inputs

    labels: Labels,
    datasets: [
      {
        label: "Wind",
        data: windLevelValues,
        borderColor: "blue",
        backgroundColor: "blue",
        yAxisID: "y",
      },
      {
        label: "Solar",
        data: solarLevelValues,
        borderColor: "red",
        backgroundColor: "red",
        yAxisID: "y",
      },
      {
        label: "Demand",
        data: demandLevelValues,
        borderColor: "green",
        backgroundColor: "green",
        yAxisID: "y",
      },
    ],
    options: {
      legend: {
        labels: {
          fontColor: "black",
        },
      },
    },
  };

  const ManualControlOfNonRenewablesLabels = {
    //Manual control of non renewables

    labels: Labels,
    datasets: [
      {
        label: "Fossil Fuels",
        data: fossilFuelsPowerLevelValues,
        borderColor: "blue",
        backgroundColor: "blue",
        yAxisID: "y",
      },
      {
        label: "Nuclear",
        data: nuclearLevelValues,
        borderColor: "lightblue",
        backgroundColor: "lightblue",
        yAxisID: "y",
      },
    ],
    options: {
      legend: {
        labels: {
          fontColor: "black",
        },
      },
    },
  };

  const BatteriesHydroSupplyStatusLabels = {
    //Batteries, pumped hydro and overall supply status
    //Change data associated with grid surplus

    labels: Labels,
    datasets: [
      {
        label: "Battery",
        data: batteriesPowerValues,
        borderColor: "blue",
        backgroundColor: "blue",
        yAxisID: "y",
      },
      {
        label: "Hydro",
        data: hydroPowerValues,
        borderColor: "red",
        backgroundColor: "red",
        yAxisID: "y",
      },
      {
        label: "Grid",
        data: gridSurplusValues,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y",
      },
    ],
    options: {
      legend: {
        labels: {
          fontColor: "black",
        },
      },
    },
  };

  const SplitJsonDataStringReturnArrayIntegers = () => {
    let windDataValues = simReportData.wind_power_data_values.split(" ");
    var windDataValuesArray = windDataValues.map(Number);

    let solarDataValues = simReportData.solar_power_data_values.split(" ");
    var solarDataValuesArray = solarDataValues.map(Number);

    let demandDataValues = simReportData.demand_power_data_values.split(" ");
    var demandDataValuesArray = demandDataValues.map(Number);

    let FossilFuelsPowerDataValues =
      simReportData.fossil_fuels_power_data_values.split(" ");
    var fossilFuelsDataValuesarray = FossilFuelsPowerDataValues.map(Number);

    let nuclearPowerDataValues =
      simReportData.nuclear_power_data_values.split(" ");
    var nuclearPowerDataValuesArray = nuclearPowerDataValues.map(Number);

    let batteriesPowerDataValues =
      simReportData.batteries_power_data_values.split(" ");
    var batteriesPowerDataValuesArray = batteriesPowerDataValues.map(Number);

    let hydroPowerDataValues = simReportData.hydro_power_data_values.split(" ");
    var hydroPowerDataValuesArray = hydroPowerDataValues.map(Number);

    let gridSurplusDataValues = simReportData.grid_surplus_data_values.split(" ");
    var gridSurplusDataValuesArray = gridSurplusDataValues.map(Number);

    return {
      windDataValuesArray,
      solarDataValuesArray,
      demandDataValuesArray,
      fossilFuelsDataValuesarray,
      nuclearPowerDataValuesArray,
      batteriesPowerDataValuesArray,
      hydroPowerDataValuesArray,
      gridSurplusDataValuesArray,
    };
  };

  const splitJsonDataIntoAppropriateArraysAndSetState = () => {
    const arraysOfIntegersGraphData =
      SplitJsonDataStringReturnArrayIntegers(simReportData);

    var windDataValuesArray = arraysOfIntegersGraphData.windDataValuesArray;

    var solarDataValuesArray = arraysOfIntegersGraphData.solarDataValuesArray;

    var demandDataValuesArray = arraysOfIntegersGraphData.demandDataValuesArray;

    var fossilFuelsDataValuesarray =
      arraysOfIntegersGraphData.fossilFuelsDataValuesarray;

    var nuclearPowerDataValuesArray =
      arraysOfIntegersGraphData.nuclearPowerDataValuesArray;

    var batteriesPowerDataValuesArray =
      arraysOfIntegersGraphData.batteriesPowerDataValuesArray;

    var hydroPowerDataValuesArray =
      arraysOfIntegersGraphData.hydroPowerDataValuesArray;

    var gridSurplusDataValuesArray =
      arraysOfIntegersGraphData.gridSurplusDataValuesArray;

    {
      /*Graphs*/
    }

    setWindLevelValues(windDataValuesArray);
    setSolarLevelValues(solarDataValuesArray);
    setDemandLevelValues(demandDataValuesArray);

    setFossilFuelsPowerLevelValues(fossilFuelsDataValuesarray);
    setNuclearLevelValues(nuclearPowerDataValuesArray);

    setBatteriesPowerValues(batteriesPowerDataValuesArray);
    setHydroPowerValues(hydroPowerDataValuesArray);
    setGridSurplusValues(gridSurplusDataValuesArray);

    console.log(windLevelValues);
    console.log(solarLevelValues);
    console.log(demandLevelValues);

    console.log(fossilFuelsPowerLevelValues);
    console.log(nuclearLevelValues);

    console.log(batteriesPowerValues);
    console.log(hydroPowerValues);
    console.log(gridSurplusValues);
  };

  const noJsonDataFoundSetGraphDataNull = () => {
    setWindLevelValues(null);
    setSolarLevelValues(null);
    setDemandLevelValues(null);

    setFossilFuelsPowerLevelValues(null);
    setNuclearLevelValues(null);

    setBatteriesPowerValues(null);
    setHydroPowerValues(null);
    setGridSurplusValues(null);
  };

  const checkForJsonDataBoolean = () => {
    if (simReportData) {
      console.log("Data found in result component");

      splitJsonDataIntoAppropriateArraysAndSetState();
    } else {
      console.log("Data not found in result component");
      noJsonDataFoundSetGraphDataNull();
    }
  };

  useEffect(() => {
    console.log(simReportData);
    console.log(simReportData);

    checkForJsonDataBoolean();
  }, []);

  return (
    <section className="section-results">
      <div className="section-results_wrapper">
        <SimulationReport simReportData={simReportData} models={models} simRepoFieldData={simRepoFieldData}/>

        <br />

        <div className="graph-wrapper_parent">
          <div className="graph-wrapper_child">
            <Line
              options={WeatherConsumerDemandScenarioDetails}
              data={WindSolarDemandLabels}
              className="graphs"
            />
          </div>
        </div>

        <br />
        <div className="graph-wrapper_parent">
          <div className="graph-wrapper_child">
            <Line
              options={ControlledSourcesDetails}
              data={ManualControlOfNonRenewablesLabels}
              className="graphs"
            />
          </div>
        </div>

        <br />
        <div className="graph-wrapper_parent">
          <div className="graph-wrapper_child">
            <Line
              options={GridPerformanceDetails}
              data={BatteriesHydroSupplyStatusLabels}
              className="graphs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;

Results.propTypes = {
  simReportData: PropTypes.json,
  models: PropTypes.json,
};
