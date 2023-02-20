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
  BatteriesHydroSupplyStatusDetails,
  Labels,
  ManualControlOfRenewablesDetails,
  WindSolarDemandDetails,
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

function Results({ jsonData, models }) {
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

  const ManualControlOfRenewablesLabels = {
    //Manual control of renewables

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
    let windDataValues = jsonData[0].wind_power_data_values.split(" ");
    var windDataValuesArray = windDataValues.map(Number);

    let solarDataValues = jsonData[0].solar_power_data_values.split(" ");
    var solarDataValuesArray = solarDataValues.map(Number);

    let demandDataValues = jsonData[0].demand_power_data_values.split(" ");
    var demandDataValuesArray = demandDataValues.map(Number);

    let FossilFuelsPowerDataValues =
      jsonData[0].fossil_fuels_power_data_values.split(" ");
    var fossilFuelsDataValuesarray = FossilFuelsPowerDataValues.map(Number);

    let nuclearPowerDataValues =
      jsonData[0].nuclear_power_data_values.split(" ");
    var nuclearPowerDataValuesArray = nuclearPowerDataValues.map(Number);

    let batteriesPowerDataValues =
      jsonData[0].batteries_power_data_values.split(" ");
    var batteriesPowerDataValuesArray = batteriesPowerDataValues.map(Number);

    let hydroPowerDataValues = jsonData[0].hydro_power_data_values.split(" ");
    var hydroPowerDataValuesArray = hydroPowerDataValues.map(Number);

    let gridSurplusDataValues = jsonData[0].grid_surplus_data_values.split(" ");
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
      SplitJsonDataStringReturnArrayIntegers(jsonData);

    var windDataValuesArray = arraysOfIntegersGraphData.wind_power_data_values;

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
    if (jsonData) {
      console.log("Data found in result component");

      splitJsonDataIntoAppropriateArraysAndSetState();
    } else {
      console.log("Data not found in result component");
      noJsonDataFoundSetGraphDataNull();
    }
  };

  useEffect(() => {
    console.log(jsonData);
    console.log(jsonData);

    checkForJsonDataBoolean();
  }, []);

  return (
    <section className="section-results">
      <div className="section-results_wrapper">
        <SimulationReport jsonData={jsonData} models={models} />

        <br />

        <div className="graph-wrapper_parent">
          <div className="graph-wrapper_child">
            <Line
              options={WindSolarDemandDetails}
              data={WindSolarDemandLabels}
              className="graphs"
            />
          </div>
        </div>

        <br />
        <div className="graph-wrapper_parent">
          <div className="graph-wrapper_child">
            <Line
              options={ManualControlOfRenewablesDetails}
              data={ManualControlOfRenewablesLabels}
              className="graphs"
            />
          </div>
        </div>

        <br />
        <div className="graph-wrapper_parent">
          <div className="graph-wrapper_child">
            <Line
              options={BatteriesHydroSupplyStatusDetails}
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
  jsonData: PropTypes.json,
  models: PropTypes.json,
};
