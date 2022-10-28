import React from 'react';
import '../css/components/simulationReport.css';
import GreenSparkEfficiency from '../images/green_spark_efficiency.png';
import GreenSparkEconomy from '../images/green_spark_economy.png';
import GreenSparkEcoFriendliness from '../images/green_spark_eco_friendliness.png';
import BlueSparkEfficiency from '../images/blue_spark_efficiency.png';
import BlueSparkEconomy from '../images/blue_spark_economy.png';
import BlueSparkEcoFriendliness from '../images/blue_spark_eco_friendliness.png';
import RedSparkEfficiency from '../images/red_spark_efficiency.png';
import RedSparkEconomy from '../images/red_spark_economy.png';
import RedSparkEcoFriendliness from '../images/red_spark_eco_friendliness.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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
                <br />
                <section className="section section_simrepo">
                    <div className='section_simrepo_wrapper'>

                        <br />

                        <p className='section_simrepo_wrapper_title' >Simulation Report: #{gameID}</p>
                        <p className='section_simrepo_wrapper_sub_title'> {datePlayed}  {timePlayed} </p>

                        <br />
                        
                        <div className="section_simrepo_wrapper_table_1_wrapper">
                            <Row className="section_simrepo_wrapper_table_1_wrapper_row">
                                <Col className="row_header" xs={4} sm={3} md={3} lg={3}>Difficulty</Col>
                                <Col className="row_text" xs={2} sm={3} md={3} lg={3}>{difficulty}</Col>
                                <Col xs={1} sm={1} md={1} lg={1}></Col>
                                <Col xs={1} sm={1} md={1} lg={1}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_1_wrapper_row">
                                <Col className="row_header" xs={2} sm={2} md={3} lg={3}>Sparks Earned</Col>
                                <Col xs={12} sm={3} md={3} lg={3}>
                                    {efficiencySpark === "green" ? <img className="section_simrepo_wrapper_spark" src={GreenSparkEfficiency} /> : efficiencySpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={BlueSparkEfficiency} /> : <img className="section_simrepo_wrapper_spark" src={RedSparkEfficiency} /> }
                                </Col>
                                <Col xs={12} sm={3} md={3} lg={3}>
                                {ecoFriendlinessSpark === "green" ? <img className="section_simrepo_wrapper_spark" src={GreenSparkEcoFriendliness} /> : ecoFriendlinessSpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={BlueSparkEcoFriendliness} /> : <img className="section_simrepo_wrapper_spark" src={RedSparkEcoFriendliness} /> }
                                </Col>
                                <Col xs={12} sm={3} md={3} lg={3}>
                                {economySpark === "green" ? <img className="section_simrepo_wrapper_spark" src={GreenSparkEconomy} /> : economySpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={BlueSparkEconomy} /> : <img className="section_simrepo_wrapper_spark" src={RedSparkEconomy} /> }
                                </Col>
                            </Row>
                        </div>
                        
                        <br /><br />

                        <p className="section_simrepo_wrapper_table_title">Results Summary</p>
                        <p className="section_simrepo_wrapper_table_subtitle">Description Goes Here</p>
                        <br />
                    

                        <div className="section_simrepo_wrapper_table_2_wrapper">
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Demand</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{demand}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Wind</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{wind}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Solar</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{solar}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Fossil Fuels</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{fossilFuels}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Nuclear</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{nuclear}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Surplus</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{surplus}</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{surplusComment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Shortfall</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{shortfall}</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{shortfallComment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Initial Stored</Col>
                                <Col className="row_text" xs={6} md={4}>{initialStored}</Col>
                                <Col xs={6} md={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Final Stored</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{finalStored}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Storage Discrepancy</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{storageDiscrepancy}</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{storageDiscrepancyComment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Efficiency Score</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{efficiencyScore}</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{efficiencyScoreComment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Total CO2 (tonnes)</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{totalCO2Tonnes}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Total Cost (£M)</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{totalCostMillionPounds}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Average Cost (£Million/Gwh)</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{averageCostMillionPerGWH}</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{averageCostComment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Average CO2 (tonnes/GWh)</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{averageCO2}</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{averageCO2Comment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Average CO2 Score</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{averageCO2Score}</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>Average Cost Score</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{averageCostScore}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                        </div>
                        <br /><br />
                    </div>
                    
                </section>
            </div>
        )
}

export default SimulationReport;