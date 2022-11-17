import React, { useState } from 'react';
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
import QuestionMark from '../images/questionmark.png';
import QuestionMarkBlue from '../images/questionmarkblue.png';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {

    PopoverDemand,
    PopoverWind,
    PopoverSolar,
    PopoverFossilFuels,
    PopoverNuclear,
    PopoverSurplus,
    PopoverShortfall,
    PopoverInitialStored,
    PopoverFinalStored,
    PopoverStorageDiscrepancy,
    PopoverEfficiencyScore,
    PopoverTotalCO2,
    PopoverTotalCost,
    PopoverAverageCost,
    PopoverAverageCO2,
    PopoverAverageCO2Score,
    PopoverAverageCostScore

} from './popovers/popover.js'



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

                        <p className='section_simrepo_wrapper_title' >Simulation Report #{gameID}</p>
                        <p className='section_simrepo_wrapper_sub_title'> {datePlayed}  &nbsp; &nbsp; &nbsp; {timePlayed} </p>

                        <br />
                        
                        <div className="section_simrepo_wrapper_table_1_wrapper">
                            <Row className="section_simrepo_wrapper_table_1_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>Difficulty</Col>
                                <Col className="row_text_difficulty" xs={3} sm={3} md={2} lg={2}>{difficulty}</Col>

                            </Row>
                            <br /><br />
                            <br />
                            <Row className="section_simrepo_wrapper_table_1_wrapper_row">
                                <Col className="row_header_sparks_earned" xs={12} sm={2} md={3} lg={3}>Sparks Earned:</Col>
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
                        <br />
                    

                        <div className="section_simrepo_wrapper_table_2_wrapper">
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    
                                    {/* This overlaytrigger only activated if button activated and ID !== null */}
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverDemand}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>


                                    &nbsp; Demand
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{demand}</Col>
                                <Col xs={3} sm={3} md={2} lg={2}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    {/* This overlaytrigger only activated if button activated and ID !== null */}
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverWind}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>


                                    &nbsp; Wind
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{wind}</Col>
                                <Col xs={3} sm={3} md={2} lg={2}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    {/* This overlaytrigger only activated if button activated and ID !== null */}
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverSolar}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>

                                    
                                    &nbsp; Solar
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{solar}</Col>
                                <Col xs={3} sm={3} md={2} lg={2}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverFossilFuels}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp;Fossil Fuels
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{fossilFuels}</Col>
                                <Col xs={3} sm={3} md={2} lg={2}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverNuclear}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Nuclear
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{nuclear}</Col>
                                <Col xs={3} sm={3} md={2} lg={2}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverSurplus}>

                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Surplus
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{surplus}</Col>
                                <Col className="section_simrepo_wrapper_table_2_wrapper_row_comment" xs={3} sm={3} md={2} lg={2}>{surplusComment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverShortfall}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Shortfall
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{shortfall}</Col>
                                <Col className="row_text" xs={3} sm={3} md={3} lg={3}>{shortfallComment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverInitialStored}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Initial Stored
                                </Col>
                                <Col className="row_text" xs={6} md={4}>{initialStored}</Col>
                                <Col xs={6} md={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverFinalStored}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Final Stored
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{finalStored}</Col>
                                <Col xs={3} sm={3} md={2} lg={2}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverStorageDiscrepancy}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Storage Difference
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{storageDiscrepancy}</Col>
                                <Col className="section_simrepo_wrapper_table_2_wrapper_row_comment" xs={3} sm={3} md={4} lg={4}>{storageDiscrepancyComment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverEfficiencyScore}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Efficiency Score
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{efficiencyScore}</Col>
                                <Col className="section_simrepo_wrapper_table_2_wrapper_row_comment" xs={3} sm={3} md={4} lg={4}>{efficiencyScoreComment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverTotalCO2}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Total CO2 (tonnes)
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{totalCO2Tonnes}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverTotalCost}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Total Cost (£M)
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{totalCostMillionPounds}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverAverageCost}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Average Cost (£Million/Gwh)
                                    
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{averageCostMillionPerGWH}</Col>
                                <Col className="section_simrepo_wrapper_table_2_wrapper_row_comment" xs={3} sm={3} md={4} lg={4}>{averageCostComment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverAverageCO2}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Average CO2 (tonnes/GWh)
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{averageCO2}</Col>
                                <Col className="section_simrepo_wrapper_table_2_wrapper_row_comment" xs={3} sm={3} md={4} lg={4}>{averageCO2Comment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverAverageCO2Score}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Average CO2 Score
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{averageCO2Score}</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={4} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverAverageCostScore}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Average Cost Score
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={2} lg={2}>{averageCostScore}</Col>
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