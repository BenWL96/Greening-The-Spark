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
  
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  

  export const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Generators & Demand',
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
  

  
  
  export const options_2 = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Storage Elements',
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


  let [simulation_id, setSimulation_ID] = useState(null);
  let [date, setDate] = useState(null);

  let [tab, setTab] = useState("simulation-report");

  {/*Graphs*/ }

  let [wind_level_values, setWind_Level_Values] = useState(null);
  let [solar_level_values, setSolar_Level_Values] = useState(null);
  let [demand_level_values, setDemand_Level_Values] = useState(null);
  let [ifpower_level_values, setIfpower_Level_Values] = useState(null);
  let [nuclear_level_values, setNuclear_Level_Values] = useState(null);

  let [battery_level_values, setBattery_Level_Values] = useState(null);
  let [battery_power_values, setBattery_Power_Values] = useState(null);
  let [hydro_level_values, setHydro_Level_Values] = useState(null);
  let [hydro_power_values, setHydro_Power_Values] = useState(null);


  const something_1 = {
    labels,
    datasets: [
      {
        label: 'Wind',
        data: wind_level_values,
        borderColor: 'blue',
        backgroundColor: 'blue',
        yAxisID: 'y',
      },
      {
        label: 'Solar',
        data: solar_level_values,
        borderColor: 'red',
        backgroundColor: 'red',
        yAxisID: 'y',
      },
      {
        label: 'Demand',
        data: demand_level_values,
        borderColor: 'green',
        backgroundColor: 'green',
        yAxisID: 'y',
      },
      {
        label: 'If Power',
        data: ifpower_level_values,
        borderColor: 'purple',
        backgroundColor: 'purple',
        yAxisID: 'y',
      },
      {
        label: 'Nuclear Power',
        data: nuclear_level_values,
        borderColor: 'lightblue',
        backgroundColor: 'lightblue',
        yAxisID: 'y',
      }
    ],
  };

  const data_2 = {
    labels,
    datasets: [
      {
        label: 'Battery Power',
        data: battery_power_values,
        borderColor: 'blue',
        backgroundColor: 'blue',
        yAxisID: 'y',
      },
      {
        label: 'Hydro Power',
        data: hydro_power_values,
        borderColor: 'red',
        backgroundColor: 'red',
        yAxisID: 'y',
      },
      {
        label: 'Batteries Level',
        data: battery_level_values,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Hydro Leve',
        data: hydro_level_values,
        borderColor: 'green',
        backgroundColor: 'green',
        yAxisID: 'y',
      },
    ],
  };

    useEffect(() => {

        if (json_data){
            console.log("Data found in result component");

      

            let wind_data_values = json_data.wind_data_values.split(' ');
            var wind_data_values_array = wind_data_values.map(Number);

            let solar_data_values = json_data.solar_data_values.split(' ');
            var solar_data_values_array = solar_data_values.map(Number);

            let demand_data_values = json_data.demand_data_values.split(' ');
            var demand_data_values_array = demand_data_values.map(Number);

            let if_power_data_values = json_data.if_power_data_values.split(' ');
            var if_power_data_values_array = if_power_data_values.map(Number);

            let nuclear_power_data_values = json_data.nuclear_power_data_values.split(' ');
            var nuclear_power_data_values_array = nuclear_power_data_values.map(Number)

            let batteries_level_data_values = json_data.batteries_level_data_values.split(' ');
            var batteries_level_data_values_array = batteries_level_data_values.map(Number);

            let batteries_power_data_values = json_data.battery_power_data_values.split(' ');
            var battery_power_data_values_array = batteries_power_data_values.map(Number);

            let hydro_level_data_values = json_data.hydro_level_data_values.split(' ');
            var hydro_level_data_values_array = hydro_level_data_values.map(Number);

            let hydro_power_data_values = json_data.hydro_power_data_values.split(' ');
            var hydro_power_data_values_array = hydro_power_data_values.map(Number);
          

            setSimulation_ID(json_data.simulation_id);
            setDate(json_data.date);

        {/*Graphs*/}

            setWind_Level_Values(wind_data_values_array);
            setSolar_Level_Values(solar_data_values_array);
            setDemand_Level_Values(demand_data_values_array);
            setIfpower_Level_Values(if_power_data_values_array);
            setNuclear_Level_Values(nuclear_power_data_values_array);

            setBattery_Level_Values(batteries_level_data_values_array);
            setBattery_Power_Values(battery_power_data_values_array);
            setHydro_Level_Values(hydro_level_data_values_array);
            setHydro_Power_Values(hydro_power_data_values_array);
        }else{
            console.log("Data not found in result component");

            setWind_Level_Values(null);
            setSolar_Level_Values(null);
            setDemand_Level_Values(null);
            setIfpower_Level_Values(null);
            setNuclear_Level_Values(null);

            setBattery_Level_Values(null);
            setBattery_Power_Values(null);
            setHydro_Level_Values(null);
            setHydro_Power_Values(null);
        }

    
    }, [])

  

    return (

      <>
      <div className='section section_results'>
      <p className='section_simulation_header'>ID:{simulation_id} Date:{date}</p>
      
        
        <div className='section_results_wrapper'>


        <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
        <Tab eventKey="home" title="Home">
          <SimulationReport json_data={json_data}/>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <section className="section section_graph_demand">
            <div className='section section_graph_demand_wrapper'>
              <Line options={options} data={something_1} />
            </div>
          </section>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <section className="section section_graph_storage">
            <div className='section section_graph_storage_wrapper'>
              <Line options={options_2} data={data_2} />
            </div>
          </section>
        </Tab>
      </Tabs>



        

          

          
        </div>
      </div>
      </>
    );
}

export default Results;