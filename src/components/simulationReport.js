import React, {useState} from 'react';
import '../css/components/simulationReport.css';
import Green_Spark from '../images/green_spark.png';
import Blue_Spark from '../images/blue_spark.png';
import Red_Spark from '../images/red_spark.png';

import Table from 'react-bootstrap/Table';




function SimulationReport({json_data}){
        
    console.log("json_data Data Is Being Passed To Simulation Report.");
    console.log(json_data);
    
    if (json_data){
    var simulation_start_time = json_data.simulation_start_time;
    var simulation_end_time = json_data.simulation_end_time;
    var simulation_run_time_days = json_data.simulation_run_time_days;
    var demand = json_data.demand;
    var wind = json_data.wind;
    var solar = json_data.solar;
    var fossil_fuels = json_data.fossil_fuels;
    var nuclear = json_data.nuclear;
    var surplus = json_data.surplus;
    var shortfall = json_data.shortfall;
    var initial_stored = json_data.initial_stored;
    var final_stored = json_data.final_stored;
    var storage_discrepancy = json_data.storage_discrepancy;
    var efficiency_score = json_data.efficiency_score;
    var total_CO2 = json_data.total_CO2;
    var total_cost = json_data.total_cost;
    var average_CO2 = json_data.average_CO2;
    var average_cost = json_data.average_CO2;

    var efficiency = json_data.efficiency;
    var economy = json_data.economy;
    var eco_friendliness = json_data.eco_friendliness;
    }else{
        console.log("User clicked back and json_data non existent");
    }

    {/*Simulation Report 
    let [simulation_id, setSimulation_Id] = useState(null);
    let [date, setDate] = useState(null);
    let [simulation_start_time, setSimulation_Start_Time] = useState(null);
    let [simulation_end_time, setSimulation_End_Time] = useState(null);
    let [simulation_run_time_days, setSimulation_Run_Time_Days] = useState(null);
    let [demand, setDemand] = useState(null);
    let [wind, setWind] = useState(null);
    let [solar, setSolar] = useState(null);
    let [fossil_fuels, setFossil_Fuels] = useState(null);
    let [nuclear, setNuclear] = useState(null);
    let [surplus, setSurplus] = useState(null);
    let [shortfall, setShortfall] = useState(null);
    let [initial_stored, setInitial_Stored] = useState(null);
    let [final_stored, setFinal_Stored] = useState(null);
    let [storage_discrepancy, setStorage_Discrepancy] = useState(null);
    let [efficiency_score, setEfficiency_Score] = useState(null);
    let [total_CO2, setTotal_CO2] = useState(null);
    let [total_cost, setTotal_Cost] = useState(null);
    let [average_CO2, setAverage_CO2] = useState(null);
    let [average_cost, setAverage_Cost] = useState(null);

    Spark Ratings
    let [efficiency, setEfficiency] = useState(null);
    let [economy, setEconomy] = useState(null);
    let [eco_friendliness, setEco_Friendliness] = useState(null);
    

    simulation report

    setSimulation_Id(json_data.simulation_id);
    setDate(json_data.date);
    setSimulation_Start_Time(json_data.simulation_start_time);
    setSimulation_End_Time(json_data.simulation_end_time);
    setSimulation_Run_Time_Days(json_data.simulation_run_time_days);
    setDemand(json_data.demand);
    setWind(json_data.wind);
    setSolar(json_data.solar);
    setFossil_Fuels(json_data.fossil_fuels);
    setNuclear(json_data.nuclear);
    setSurplus(json_data.surplus);
    setShortfall(json_data.shortfall);
    setInitial_Stored(json_data.initial_stored);
    setFinal_Stored(json_data.final_stored);
    setStorage_Discrepancy(json_data.storage_discrepancy);
    setEfficiency_Score(json_data.efficiency_score);
    setTotal_CO2(json_data.total_CO2);
    setTotal_Cost(json_data.total_cost);
    setAverage_CO2(json_data.average_CO2);
    setAverage_Cost(json_data.average_cost);
    
    Ratings

    setEfficiency(json_data.efficiency);
    setEconomy(json_data.economy);
    setEco_Friendliness(json_data.eco_friendliness); */}
    

        return (

            
            <div>
                
                <section className="section section_simrepo">
                    <div className='section_simrepo_wrapper'>

                        <p className='section_simrepo_wrapper_title'>Simulation Report:</p>
                        <p className='section_simrepo_wrapper_sub_title'>Simulation Report StateDate StateTime</p>


                    <Table bordered hover variant="dark" className='section_simrepo_wrapper_table'>
                        <tbody>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Simulation Start Time</td>
                            <td className='section_simrepo_wrapper_table_head_2'>{simulation_start_time}</td>
                            <td className='section_simrepo_wrapper_table_head_3'></td>
                            <td className='section_simrepo_wrapper_table_head_4'></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Simulation End Time</td>
                            <td>{simulation_end_time}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Simulation Run Time</td>
                            <td>{simulation_run_time_days}</td>
                            <td></td>
                            <td></td>
                            </tr>
                    
                        </tbody>
                        </Table>

                        <p className='section_simrepo_wrapper_sub_title'>SOME TITLE GOES HeRE</p>

                        <Table bordered hover variant="dark" className='section_simrepo_wrapper_table'>
                        <tbody>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Demand</td>
                            <td className='section_simrepo_wrapper_table_head_2'>{demand}</td>
                            <td className='section_simrepo_wrapper_table_head_3'></td>
                            <td className='section_simrepo_wrapper_table_head_4'></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Wind</td>
                            <td>{wind}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Solar</td>
                            <td>{solar}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Fossil Fuels</td>
                            <td>{fossil_fuels}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Nuclear</td>
                            <td>{nuclear}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Surplus</td>
                            <td>{surplus}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Shortfall</td>
                            <td>{shortfall}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Initial Stored</td>
                            <td>{initial_stored}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Final Stored</td>
                            <td>{final_stored}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Storage Discrepancy</td>
                            <td>{storage_discrepancy}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Efficiency Score</td>
                            <td>{efficiency_score}</td>
                            <td></td>
                            <td></td>
                            </tr>
                        </tbody>
                        </Table>

                        <p className='section_simrepo_wrapper_sub_title'>SOME TITLE GOES HeRE</p>


                        <Table bordered hover variant="dark" className='section_simrepo_wrapper_table'>
                        <tbody>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Total CO2 (tonnes)</td>
                            <td className='section_simrepo_wrapper_table_head_2'>{total_CO2}</td>
                            <td className='section_simrepo_wrapper_table_head_3'></td>
                            <td className='section_simrepo_wrapper_table_head_4'></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Total Cost (£M)</td>
                            <td>{total_cost}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Ave CO2 (tonnes/GWh)</td>
                            <td>{average_CO2}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Ave Cost (£M/GWh)</td>
                            <td>{average_cost}</td>
                            <td></td>
                            <td></td>
                            </tr>
                    
                        </tbody>
                        </Table>

                        <p className='section_simrepo_wrapper_sub_title'>SOME TITLE GOES HeRE</p>
                        
                        <Table bordered hover variant="dark" className='section_simrepo_wrapper_table'>
                        <tbody>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Sparks Earned</td>
                            <td className='section_simrepo_wrapper_table_head_2'>Efficiency</td>
                            <td className='section_simrepo_wrapper_table_head_3'>Eco Friendliness</td>
                            <td className='section_simrepo_wrapper_table_head_4'>Economy</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td></td>
                            <td>
                                {efficiency === "Green" ? <img className="section_simrepo_wrapper_spark" src={Green_Spark} /> : efficiency === "Blue" ? <img className="section_simrepo_wrapper_spark" src={Blue_Spark} /> : <img className="section_simrepo_wrapper_spark" src={Red_Spark} /> }
                             </td>
                            <td>
                                {eco_friendliness === "Green" ? <img className="section_simrepo_wrapper_spark" src={Green_Spark} /> : eco_friendliness === "Blue" ? <img className="section_simrepo_wrapper_spark" src={Blue_Spark} /> : <img className="section_simrepo_wrapper_spark" src={Red_Spark} /> }
                            </td>
                            <td>
                                {economy === "Green" ? <img className="section_simrepo_wrapper_spark" src={Green_Spark} /> : economy === "Blue" ? <img className="section_simrepo_wrapper_spark" src={Blue_Spark} /> : <img className="section_simrepo_wrapper_spark" src={Red_Spark} /> }
                            </td>
                            </tr>
                           
                    
                        </tbody>
                        </Table>

                    </div>
                </section>
            </div>
        )
}

export default SimulationReport;