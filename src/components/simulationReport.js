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

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';



//Put these popovers in another file and import them.
const popoverDemand = (
    <Popover id="popover_demand-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Demand</p>
        </Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
  );

const popoverWind = (
    <Popover id="popover_wind-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Wind</p>
        </Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
  );

const popoverSolar = (
    <Popover id="popover_solar-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Solar</p>
        </Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
  );

const popoverFossilFuels = (
    <Popover id="popoverFossil_fuels-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Fossil Fuels</p>
        </Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);

const popoverNuclear = (
    <Popover id="popover_nuclear-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Nuclear</p>
        </Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);

const popoverSurplus = (
    <Popover id="popover_surplus-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Surplus</p>
        </Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);

const popoverShortfall = (
    <Popover id="popover_shortfall-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Shortfall</p>
        </Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);

const popoverInitialStored = (
    <Popover id="popover_initial_stored-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Initial Stored</p>
        </Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);

const popoverFinalStored = (
    <Popover id="popover_final_stored-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Final Stored</p>
        </Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);

const popoverStorageDiscrepancy = (
    <Popover id="popover_storage_discrepancy-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Storage Discrepancy</p>
        </Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);

const popoverEfficiencyScore = (
    <Popover id="popover_efficiency_score-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Efficiency Score</p>
        </Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);

const popoverTotalCO2 = (
    <Popover id="popover_total_CO2-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Total CO2</p>
        </Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);


const popoverTotalCost = (
    <Popover id="popover_total_cost-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Total Cost</p>
        </Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);

const popoverAverageCost = (
    <Popover id="popover_average_cost-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Average Cost</p>
        </Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);

const popoverAverageCO2 = (
    <Popover id="popover_average_CO2-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Average CO2</p>
        </Popover.Header>
        <Popover.Body>
            <p className="popover_body">
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
            </p>
        </Popover.Body>
    </Popover>
);

const popoverAverageCO2Score = (
    <Popover id="popover_average_CO2_score-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Average CO2 Score</p>
        </Popover.Header>
        <Popover.Body>
            <p className="popover_body">
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
            </p>
        </Popover.Body>
    </Popover>
);


const popoverAverageCostScore = (
    <Popover id="popover_average_cost_score-basic" className="popover_tile" style={{maxWidth: '60vw' }}>
        <Popover.Header >
            <p className="popover_header">Average Cost Score</p>
        </Popover.Header>
        <Popover.Body>
            <p className="popover_body">
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
            </p>
        </Popover.Body>
    </Popover>
);



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
                                <Col className="row_header" xs={12} sm={2} md={3} lg={3}>Sparks Earned</Col>
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
                        <p className="section_simrepo_wrapper_table_subtitle">Description Goes Here</p>
                        <br />
                    

                        <div className="section_simrepo_wrapper_table_2_wrapper">
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    
                                    {/* This overlaytrigger only activated if button activated and ID !== null */}
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverDemand}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>


                                    &nbsp; Demand
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{demand}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    {/* This overlaytrigger only activated if button activated and ID !== null */}
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverWind}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>


                                    &nbsp; Wind
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{wind}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    {/* This overlaytrigger only activated if button activated and ID !== null */}
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverSolar}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>

                                    
                                    &nbsp; Solar
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{solar}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverFossilFuels}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp;Fossil Fuels
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{fossilFuels}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverNuclear}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Nuclear
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{nuclear}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverSurplus}>

                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Surplus
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{surplus}</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{surplusComment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverShortfall}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Shortfall
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{shortfall}</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{shortfallComment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverInitialStored}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Initial Stored
                                </Col>
                                <Col className="row_text" xs={6} md={4}>{initialStored}</Col>
                                <Col xs={6} md={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverFinalStored}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Final Stored
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{finalStored}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverStorageDiscrepancy}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Storage Difference
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{storageDiscrepancy}</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{storageDiscrepancyComment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverEfficiencyScore}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Efficiency Score
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{efficiencyScore}</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{efficiencyScoreComment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverTotalCO2}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Total CO2 (tonnes)
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{totalCO2Tonnes}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverTotalCost}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Total Cost (£M)
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{totalCostMillionPounds}</Col>
                                <Col xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverAverageCost}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Average Cost (£Million/Gwh)
                                    
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{averageCostMillionPerGWH}</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{averageCostComment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverAverageCO2}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Average CO2 (tonnes/GWh)
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{averageCO2}</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{averageCO2Comment}</Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverAverageCO2Score}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Average CO2 Score
                                </Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}>{averageCO2Score}</Col>
                                <Col className="row_text" xs={3} sm={3} md={4} lg={4}></Col>
                            </Row>
                            <br />
                            <Row className="section_simrepo_wrapper_table_2_wrapper_row">
                                <Col className="row_header" xs={6} sm={6} md={4} lg={4}>
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverAverageCostScore}>
                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    &nbsp; Average Cost Score
                                </Col>
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