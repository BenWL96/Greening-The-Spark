import React from 'react';
import '../css/components/simulationReport.css';
import Green_Spark from '../images/green_spark.png';
import Blue_Spark from '../images/blue_spark.png';
import Red_Spark from '../images/red_spark.png';

import Table from 'react-bootstrap/Table';




function SimulationReport({jsonData}){
        
    console.log("jsonData Data Is Being Passed To Simulation Report.");
    console.log(jsonData);
    
    if (jsonData){

    var gameID = jsonData.game_id

    var timePlayed = jsonData.time;
    var datePlayed = jsonData.date;
    var difficulty = jsonData.difficulty;


    var demand = jsonData.demand;
    var wind = jsonData.wind;
    var solar = jsonData.solar;
    var fossilFuels = jsonData.fossil_fuels;
    var nuclear = jsonData.nuclear;

    var surplus = jsonData.surplus;
    var shortfall = jsonData.shortfall;
    var initialStored = jsonData.initial_stored;
    var finalStored = jsonData.final_stored;
    var storageDiscrepancy = jsonData.storage_discrepancy;
    var efficiencyScore = jsonData.efficiency_score;
    
    var totalCO2Tonnes = jsonData.total_CO2_tonnes;
    var totalCostMillionPounds = jsonData.total_cost_million_pounds;
    var averageCO2 = jsonData.average_CO2_tonnes_per_gwh;
    var averageCostMillionPerGWH = jsonData.average_cost_million_pounds_per_gwh;
    var averageCO2Score = jsonData.average_CO2_score;
    var averageCostScore = jsonData.average_cost_score;

    //COMMENTS

    var surplusComment = jsonData.surplus_comment;
    var shortfallComment = jsonData.shortfall_comment;
    var storageDiscrepancyComment = jsonData.storage_discrepancy_comment;
    var efficiencyScoreComment = jsonData.efficiency_score_comment;
    var averageCO2Comment = jsonData.average_CO2_comment;
    var averageCostComment = jsonData.average_cost_comment;


    //SPARKS
    var efficiencySpark = jsonData.efficiency_spark;
    var economySpark = jsonData.economy_spark;
    var ecoFriendlinessSpark = jsonData.eco_friendliness_spark;

    console.log("Json data has been assigned to variables.");

    }else{

        console.log("No real data was passed to the simulation report..");
        
    }

    

        return (

            
            <div>
                
                <section className="section section_simrepo">
                    <div className='section_simrepo_wrapper'>

                        <p className='section_simrepo_wrapper_title' >Simulation Report: #{gameID}</p>
                        <p className='section_simrepo_wrapper_sub_title'> {datePlayed}  {timePlayed} </p>


                 
                        <Table bordered hover variant="light" className='section_simrepo_wrapper_table'>
                        <tbody>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'></td>
                            <td className='section_simrepo_wrapper_table_head_2'>Efficiency</td>
                            <td className='section_simrepo_wrapper_table_head_3'>Eco Friendliness</td>
                            <td className='section_simrepo_wrapper_table_head_4'>Economy</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Sparks Earned</td>
                            <td>
                                {efficiencySpark === "green" ? <img className="section_simrepo_wrapper_spark" src={Green_Spark} /> : efficiencySpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={Blue_Spark} /> : <img className="section_simrepo_wrapper_spark" src={Red_Spark} /> }
                             </td>
                            <td>
                                {ecoFriendlinessSpark === "green" ? <img className="section_simrepo_wrapper_spark" src={Green_Spark} /> : ecoFriendlinessSpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={Blue_Spark} /> : <img className="section_simrepo_wrapper_spark" src={Red_Spark} /> }
                            </td>
                            <td>
                                {economySpark === "green" ? <img className="section_simrepo_wrapper_spark" src={Green_Spark} /> : economySpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={Blue_Spark} /> : <img className="section_simrepo_wrapper_spark" src={Red_Spark} /> }
                            </td>
                            </tr>
                           
                    
                        </tbody>
                        </Table>
                        
                       
                        <Table bordered hover variant="light" className='section_simrepo_wrapper_table'>
                        <tbody>
                           
                           <tr>
                           <td className='section_simrepo_wrapper_table_head_1'>Difficulty</td>
                           <td>{difficulty}</td>
                           <td></td>
                           <td></td>
                           </tr>
                   
                       </tbody>
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
                            <td className='section_simrepo_wrapper_table_head_1'>Wind</td>
                            <td>{wind}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Solar</td>
                            <td>{solar}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Fossil Fuels</td>
                            <td>{fossilFuels}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Nuclear</td>
                            <td>{nuclear}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Surplus</td>
                            <td>{surplus}</td>
                            <td>{surplusComment}</td>
                            <td></td>
                            </tr>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Shortfall</td>
                            <td>{shortfall}</td>
                            <td>{shortfallComment}</td>
                            <td></td>
                            </tr>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Initial Stored</td>
                            <td>{initialStored}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Final Stored</td>
                            <td>{finalStored}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Storage Discrepancy</td>
                            <td>{storageDiscrepancy}</td>
                            <td>{storageDiscrepancyComment}</td>
                            <td></td>
                            </tr>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Efficiency Score</td>
                            <td>{efficiencyScore}</td>
                            <td>{efficiencyScoreComment}</td>
                            <td></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Total CO2 (tonnes)</td>
                            <td className='section_simrepo_wrapper_table_head_2'>{totalCO2Tonnes}</td>
                            <td className='section_simrepo_wrapper_table_head_3'></td>
                            <td className='section_simrepo_wrapper_table_head_4'></td>
                            </tr>
                        </tbody>
                        <tbody>

                
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Total Cost (£M)</td>
                            <td>{totalCostMillionPounds}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Average Cost (£Million/Gwh)</td>
                            <td>{averageCostMillionPerGWH}</td>
                            <td>{averageCostComment}</td>
                            <td></td>
                            </tr>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Total CO2 (Tonnes)</td>
                            <td>{totalCO2Tonnes}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Average CO2 (tonnes/GWh)</td>
                            <td>{averageCO2}</td>
                            <td>{averageCO2Comment}</td>
                            <td></td>
                            </tr>

                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Average CO2 Score</td>
                            <td>{averageCO2Score}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Average Cost Score</td>
                            <td>{averageCostScore}</td>
                            <td></td>
                            <td></td>
                            </tr>
                    
                        </tbody>
                        </Table>

                        

                    </div>
                </section>
            </div>
        )
}

export default SimulationReport;