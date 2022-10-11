import React, {useState, useEffect} from 'react';
import SimulationReport from './simulationReport.js';
import "../css/components/results.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  

  export const WindSolarDemandDetails = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Wind, Solar, And Demand Inputs',
      },
    },
    scales: {
      y: {
        type: 'linear',
     
        position: 'left',
        title: {
          display: true,
          text: 'Giga Watts / Hour'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      }
    
    },
    };
  

  
  
  export const ManualControlOfRenewablesDetails = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Manual Control Of Renewables',
      },
    },
    scales: {
      y: {
        type: 'linear',
     
        position: 'left',
        title: {
          display: true,
          text: 'Giga Watts / Hour'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time Of Day'
        }
      }
    
    },
    };
  

    export const BatteriesHydroSupplyStatusDetails = {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: 'Batteries, Pumped Hydro And Overall Supply Status',
        },
      },
      scales: {
        y: {
          type: 'linear',
       
          position: 'left',
          title: {
            display: true,
            text: 'Giga Watts / Hour'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Time Of Day'
          }
        }
      
      },
      };


  
  const labels = ['00:00', '01:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
  

  


function Results({json_data}) {

  {/*Graphs*/ }

  //Wind, Solar, And Demand Inputs
  let [windLevelValues, setWindLevelValues] = useState(null);
  let [solarLevelValues, setSolarLevelValues] = useState(null);
  let [demandLevelValues, setDemandLevelValues] = useState(null);

  //Manual Control Of Renewables
  let [fossilFuelsPowerLevelValues, setFossilFuelsPowerLevelValues] = useState(null);
  let [nuclearLevelValues, setNuclearLevelValues] = useState(null);

  //Batteries, Pumped Hydro And Overall Supply Status
  let [batteriesPowerValues, setBatteryPowerValues] = useState(null);
  let [hydroPowerValues, setHydroPowerValues] = useState(null);
  let [gridSurplusValues, setGridSurplusValues] = useState(null);


  const WindSolarDemandLabels = {

    //Wind, solar, and demand inputs

    labels,
    datasets: [
      {
        label: 'Wind',
        data: windLevelValues,
        borderColor: 'blue',
        backgroundColor: 'blue',
        yAxisID: 'y',
      },
      {
        label: 'Solar',
        data: solarLevelValues,
        borderColor: 'red',
        backgroundColor: 'red',
        yAxisID: 'y',
      },
      {
        label: 'Demand',
        data: demandLevelValues,
        borderColor: 'green',
        backgroundColor: 'green',
        yAxisID: 'y',
      },
    ],
  };

  const ManualControlOfRenewablesLabels = {

    //Manual control of renewables

    labels,
    datasets: [
      {
        label: 'Fossil Fuels',
        data: fossilFuelsPowerLevelValues,
        borderColor: 'blue',
        backgroundColor: 'blue',
        yAxisID: 'y',
      },
      {
        label: 'Nuclear',
        data: nuclearLevelValues,
        borderColor: 'lightblue',
        backgroundColor: 'lightblue',
        yAxisID: 'y',
      }
    ],
  };

  const BatteriesHydroSupplyStatusLabels = {

    //Batteries, pumped hydro and overall supply status
    //Change data associated with grid surplus

    labels,
    datasets: [
      {
        label: 'Battery',
        data: batteriesPowerValues,
        borderColor: 'blue',
        backgroundColor: 'blue',
        yAxisID: 'y',
      },
      {
        label: 'Hydro',
        data: hydroPowerValues,
        borderColor: 'red',
        backgroundColor: 'red',
        yAxisID: 'y',
      },
      {
        label: 'Grid',
        data: gridSurplusValues,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y',
      },
    ],
  };


  const splitJsonDataIntoAppropriateArraysAndSetState = (json_data) => {
    let windDataValues = json_data.wind_power_data_values.split(' ');
    var windDataValuesArray = windDataValues.map(Number);

    let solarDataValues = json_data.solar_power_data_values.split(' ');
    var solarDataValuesArray = solarDataValues.map(Number);

    let demandDataValues = json_data.demand_power_data_values.split(' ');
    var demandDataValuesArray = demandDataValues.map(Number);

    let FossilFuelsPowerDataValues = json_data.
            fossil_fuels_power_data_values.split(' ');
    var FossilFuelsDataValuesarray = FossilFuelsPowerDataValues.map(Number);

    let nuclearPowerDataValues = json_data.nuclear_power_data_values.split(' ');
    var nuclearPowerDataValuesArray = nuclearPowerDataValues.map(Number)

    let batteriesPowerDataValues = json_data.batteries_power_data_values.split(' ');
    var batteriesPowerDataValuesArray = batteriesPowerDataValues.map(Number);

    let hydroPowerDataValues = json_data.hydro_power_data_values.split(' ');
    var hydroPowerDataValuesArray = hydroPowerDataValues.map(Number);

    let gridSurplusDataValues = json_data.grid_surplus_data_values.split(' ');
    var gridSurplusDataValuesArray = gridSurplusDataValues.map(Number);

    {/*Graphs*/}

    setWindLevelValues(windDataValuesArray);
    setSolarLevelValues(solarDataValuesArray);
    setDemandLevelValues(demandDataValuesArray);

    setFossilFuelsPowerLevelValues(FossilFuelsDataValuesarray);
    setNuclearLevelValues(nuclearPowerDataValuesArray);

    setBatteryPowerValues(batteriesPowerDataValuesArray);
    setHydroPowerValues(hydroPowerDataValuesArray);
    setGridSurplusValues(gridSurplusDataValuesArray);

  };

  const noJsonDataFoundSetGraphDataNull = () => {
    
    setWindLevelValues(null);
    setSolarLevelValues(null);
    setDemandLevelValues(null);

    setFossilFuelsPowerLevelValues(null);
    setNuclearLevelValues(null);

    setBatteryPowerValues(null);
    setHydroPowerValues(null);
    setGridSurplusValues(null);

  }

    useEffect(() => {

        if (json_data){
            console.log("Data found in result component");

      
            splitJsonDataIntoAppropriateArraysAndSetState(json_data);


        }else{

            console.log("Data not found in result component");

            noJsonDataFoundSetGraphDataNull();
        }

    
    }, [])

  

    return (

     
      <section className='section section_results'>
  
        
        
        <div className='section_results_wrapper'>
          <br />
          <p className='section_simulation_header'>simulation ID |  Date:</p>
        

          <SimulationReport json_data={json_data}/>
          
        
          <div className='graph_storage_wrapper'>
                <Line options={WindSolarDemandDetails} data={WindSolarDemandLabels} className="graph_storage_wrapper_graph"/>
          </div>
        
          <br />
        
              <div className='graph_demand_wrapper'>
                  <Line options={ManualControlOfRenewablesDetails} data={ManualControlOfRenewablesLabels} className="graph_demand_wrapper_graph"/>
              </div>

              <br />
              <div className='graph_demand_wrapper'>
                  <Line options={BatteriesHydroSupplyStatusDetails} data={BatteriesHydroSupplyStatusLabels} className="graph_demand_wrapper_graph"/>
              </div>
              
          </div>
          
        </section>
    
    );
}

export default Results;