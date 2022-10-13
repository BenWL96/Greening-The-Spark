import React from 'react';
import '../css/components/simulationReport.css';
import Green_Spark from '../images/green_spark.png';
import Blue_Spark from '../images/blue_spark.png';
import Red_Spark from '../images/red_spark.png';

import Table from 'react-bootstrap/Table';




function SimulationReport({json_data}){
        
    console.log("json_data Data Is Being Passed To Simulation Report.");
    console.log(json_data);
    
    if (json_data){

    var gameID = json_data.game_id

    var timePlayed = json_data.time;
    var datePlayed = json_data.date;
    var difficulty = json_data.difficulty;


    var demand = json_data.demand;
    var wind = json_data.wind;
    var solar = json_data.solar;
    var fossilFuels = json_data.fossil_fuels;
    var nuclear = json_data.nuclear;

    var surplus = json_data.surplus;
    var shortfall = json_data.shortfall;
    var initialStored = json_data.initial_stored;
    var finalStored = json_data.final_stored;
    var storageDiscrepancy = json_data.storage_discrepancy;
    var efficiencyScore = json_data.efficiency_score;
    
    var totalCO2Tonnes = json_data.total_CO2_tonnes;
    var totalCostMillionPounds = json_data.total_cost_million_pounds;
    var averageCO2 = json_data.average_CO2_tonnes_per_gwh;
    var averageCostMillionPerGWH = json_data.average_cost_million_pounds_per_gwh;
    var averageCO2Score = json_data.average_CO2_score;
    var averageCostScore = json_data.average_cost_score;

    //COMMENTS

    var surplusComment = json_data.surplus_comment;
    var shortfallComment = json_data.shortfall_comment;
    var storageDiscrepancyComment = json_data.storage_discrepancy_comment;
    var efficiencyScoreComment = json_data.efficiency_score_comment;
    var averageCO2Comment = json_data.average_CO2_comment;
    var averageCostComment = json_data.average_cost_comment;


    //SPARKS
    var efficiencySpark = json_data.efficiency_spark;
    var economySpark = json_data.economy_spark;
    var ecoFriendlinessSpark = json_data.eco_friendliness_spark;

    }else{

        console.log("No real data was passed to the simulation report..");
        
    }

    

        return (

            
            <div>
                
                <section className="section section_simrepo">
                    <div className='section_simrepo_wrapper'>

                        <p className='section_simrepo_wrapper_title' >Simulation Report: {gameID}</p>
                        <p className='section_simrepo_wrapper_sub_title'>Simulation Report StateDate StateTime</p>


                    <Table bordered hover variant="dark" className='section_simrepo_wrapper_table'>
                        <tbody>
                            <tr>
                            <td className='section_simrepo_wrapper_table_head_1'>Simulation Start Time</td>
                            <td className='section_simrepo_wrapper_table_head_2'>{timePlayed}</td>
                            <td className='section_simrepo_wrapper_table_head_3'></td>
                            <td className='section_simrepo_wrapper_table_head_4'></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>Time Played</td>
                            <td>{timePlayed}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Date Played</td>
                            <td>{datePlayed}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Difficulty</td>
                            <td>{difficulty}</td>
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
                            <td>{fossilFuels}</td>
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
                            <td>{surplusComment}</td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Shortfall</td>
                            <td>{shortfall}</td>
                            <td>{shortfallComment}</td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Initial Stored</td>
                            <td>{initialStored}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Final Stored</td>
                            <td>{finalStored}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Storage Discrepancy</td>
                            <td>{storageDiscrepancy}</td>
                            <td>{storageDiscrepancyComment}</td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Efficiency Score</td>
                            <td>{efficiencyScore}</td>
                            <td>{efficiencyScoreComment}</td>
                            <td></td>
                            </tr>
                        </tbody>
                        </Table>

                        <p className='section_simrepo_wrapper_sub_title'>SOME TITLE GOES HeRE</p>


                        <Table bordered hover variant="dark" className='section_simrepo_wrapper_table'>
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
                            <td>Total Cost (£M)</td>
                            <td>{totalCostMillionPounds}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Average Cost (£Million/Gwh)</td>
                            <td>{averageCostMillionPerGWH}</td>
                            <td>{averageCostComment}</td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Total CO2 (Tonnes)</td>
                            <td>{totalCO2Tonnes}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Average CO2 (tonnes/GWh)</td>
                            <td>{averageCO2}</td>
                            <td>{averageCO2Comment}</td>
                            <td></td>
                            </tr>

                            <tr>
                            <td>Average CO2 Score</td>
                            <td>{averageCO2Score}</td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Average Cost Score</td>
                            <td>{averageCostScore}</td>
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
                                {efficiencySpark === "Green" ? <img className="section_simrepo_wrapper_spark" src={Green_Spark} /> : efficiencySpark === "Blue" ? <img className="section_simrepo_wrapper_spark" src={Blue_Spark} /> : <img className="section_simrepo_wrapper_spark" src={Red_Spark} /> }
                             </td>
                            <td>
                                {ecoFriendlinessSpark === "Green" ? <img className="section_simrepo_wrapper_spark" src={Green_Spark} /> : ecoFriendlinessSpark === "Blue" ? <img className="section_simrepo_wrapper_spark" src={Blue_Spark} /> : <img className="section_simrepo_wrapper_spark" src={Red_Spark} /> }
                            </td>
                            <td>
                                {economySpark === "Green" ? <img className="section_simrepo_wrapper_spark" src={Green_Spark} /> : economySpark === "Blue" ? <img className="section_simrepo_wrapper_spark" src={Blue_Spark} /> : <img className="section_simrepo_wrapper_spark" src={Red_Spark} /> }
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