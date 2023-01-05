import React from 'react';

import '../../css/components/simulationReport.css';

import EfficiencySparkAnimation from '../sparkAnimation/efficiencySparkAnimation';
import EconomySparkAnimation from '../sparkAnimation/economySparkAnimation';
import EcoSparkAnimation from '../sparkAnimation/ecoSparkAnimation';

import QuestionMarkBlue from '../../images/questionmarkblue.png';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Stack from 'react-bootstrap/Stack';

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

} from '../popovers/popover.js'


function SimulationReport({jsonData}){


    console.log("jsonData Data Is Being Passed To Simulation Report.");
    console.log(jsonData);

    
    if (jsonData){

    const simReportData = jsonData[0] ;
    //change simReportData into a variable

    var gameID = simReportData.game_id;

    var timePlayed = simReportData.time;
    var datePlayed = simReportData.date;
    var difficulty = simReportData.difficulty;


    var demand = simReportData.demand;
    var wind = simReportData.wind;
    var solar = simReportData.solar;
    var fossilFuels = simReportData.fossil_fuels;
    var nuclear = simReportData.nuclear;

    var surplus = simReportData.surplus;
    var shortfall = simReportData.shortfall;
    var initialStored = simReportData.initial_stored;
    var finalStored = simReportData.final_stored;
    var storageDiscrepancy = simReportData.storage_discrepancy;
    var efficiencyScore = simReportData.efficiency_score;
    
    var totalCO2Tonnes = simReportData.total_CO2_tonnes;
    var totalCostMillionPounds = simReportData.total_cost_million_pounds;
    var averageCO2 = simReportData.average_CO2_tonnes_per_gwh;
    var averageCostMillionPerGWH = simReportData.average_cost_million_pounds_per_gwh;

    //COMMENTS

    var surplusComment = simReportData.surplus_comment;
    var shortfallComment = simReportData.shortfall_comment;
    var storageDiscrepancyComment = simReportData.storage_discrepancy_comment;
    var efficiencyScoreComment = simReportData.efficiency_score_comment;
    var averageCO2Comment = simReportData.average_CO2_comment;
    var averageCostComment = simReportData.average_cost_comment;


    //SPARKS
    var efficiencySpark = simReportData.efficiency_spark;
    var economySpark = simReportData.economy_spark;
    var ecoFriendlinessSpark = simReportData.eco_friendliness_spark;

 
    

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
                                <Col className="row_header_sparks_earned" xs={6} sm={4} md={4} lg={4}>Difficulty</Col>
                                <Col className="row_text_difficulty" xs={3} sm={3} md={2} lg={2}>{difficulty}</Col>

                            </Row>
                            <br /><br />
                            <br />
                            <Row className="section_simrepo_wrapper_table_1_wrapper_row">
                                <Col className="row_header_sparks_earned" xs={12} sm={3} md={3} lg={3}>Sparks Earned:</Col>
                                <Col xs={12} sm={3} md={3} lg={3}>
                                    
                                    <EfficiencySparkAnimation />

                                    {/*{efficiencySpark === "green" ? <img className="section_simrepo_wrapper_spark" src={GreenSparkEfficiency} /> : efficiencySpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={BlueSparkEfficiency} /> : <img className="section_simrepo_wrapper_spark" src={RedSparkEfficiency} /> }*/}
                                </Col>
                                <Col xs={12} sm={3} md={3} lg={3}>
                                    
                                    <EcoSparkAnimation />

                                    {/*{ecoFriendlinessSpark === "green" ? <img className="section_simrepo_wrapper_spark" src={GreenSparkEcoFriendliness} /> : ecoFriendlinessSpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={BlueSparkEcoFriendliness} /> : <img className="section_simrepo_wrapper_spark" src={RedSparkEcoFriendliness} /> }*/}
                                </Col>
                                <Col xs={12} sm={3} md={3} lg={3}>
                                    
                                    <EconomySparkAnimation />

                                    {/*{economySpark === "green" ? <img className="section_simrepo_wrapper_spark" src={GreenSparkEconomy} /> : economySpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={BlueSparkEconomy} /> : <img className="section_simrepo_wrapper_spark" src={RedSparkEconomy} /> }*/}
                                </Col>
                            </Row>
                        </div>
                        
                        <br /><br />

                        <p className="section_simrepo_wrapper_table_title">Results Summary</p>
                        <br />
                    

                        <div className="section_simrepo_wrapper_table_2_wrapper">

                        <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">

                                    <div className="stack_0  column_title">
                                        
                                    </div>
                                    <div className="row_header stack_1 column_title">
                                      Something
                                       
                                    </div>
                              
                                    <div className="row_header row_text stack_2 ms-auto column_title">
                                        
                                        Score
                                    </div>
                                    {/*-MAKE THIS SIMILAR CSS TO STACK 3 BUT NOT THE SAME.*/}
                                    <div className="row_header row_text_2 stack_3 ms-auto column_title">
                                        Comments  
                                    </div>
                                </Stack>
    
                            </Row>


                            <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">
                                    <div className="stack_0">
                                        <OverlayTrigger trigger="hover" placement="right" overlay={PopoverDemand(jsonData)}>
                                            <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                        </OverlayTrigger>
                                    </div>
                                    <div className="row_header stack_1">
                                        Demand
                                    </div>
                              
                                    <div className="row_text stack_2 ms-auto">
                                        
                                        {demand}
                                    </div>
                                    <div className="row_text_2 stack_3 ms-auto">
                                        Could Do Better...
                                    </div>
                                </Stack>
    
                            </Row>
                            <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">
                                    <div className="stack_0">
                                        <OverlayTrigger trigger="hover" placement="right" overlay={PopoverWind(jsonData)}>
                                            <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                        </OverlayTrigger>
                                    </div>
                                    <div className="row_header stack_1">
                                    

                                        Wind
                                    </div>
                              
                                    <div className="row_text stack_2 ms-auto">
                                        
                                        {wind}
                                    </div>
                                    <div className="row_text_2 stack_3 ms-auto">

                                    </div>
                                </Stack>
    
                            </Row>
                            <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">

                                     <div className="stack_0">
                                     <OverlayTrigger trigger="hover" placement="right" overlay={PopoverSolar(jsonData)}>
                                            <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                        </OverlayTrigger>
                                    </div>
                                    <div className="row_header stack_1">
                    
                                        
                                        Solar
                                    </div>
                              
                                    <div className="row_text stack_2 ms-auto">
                                        
                                        {solar}
                                    </div>
                                    <div className="row_text_2 stack_3 ms-auto">
                                   
                                    </div>
                                </Stack>
    
                            </Row>

                            <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">

                                    <div className="stack_0">
                                        <OverlayTrigger trigger="hover" placement="right" overlay={PopoverFossilFuels(jsonData)}>
                                            <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                        </OverlayTrigger>
                                        
                                    </div>
                                    <div className="row_header stack_1">

                                        Fossil Fuels
                                    </div>
                              
                                    <div className="row_text stack_2 ms-auto">
                                        
                                        {fossilFuels}
                                    </div>
                                    <div className="row_text_2 stack_3 ms-auto">
                                    
                                    </div>
                                </Stack>
    
                            </Row>

                            <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">

                                    <div className="stack_0">
                                        <OverlayTrigger trigger="hover" placement="right" overlay={PopoverNuclear(jsonData)}>
                                            <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                        </OverlayTrigger>
                                    </div>
                                    <div className="row_header stack_1">
                                        
                                        Nuclear
                                    </div>
                              
                                    <div className="row_text stack_2 ms-auto">
                                        
                                        {nuclear}
                                    </div>
                                    <div className="row_text_2 stack_3 ms-auto">
                                    Could Do Better...
                                    </div>
                                </Stack>
    
                            </Row>

                            <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">
                                    <div className="stack_0">
                                    <OverlayTrigger trigger="hover" placement="right" overlay={PopoverSurplus(jsonData)}>

                                        <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                    </OverlayTrigger>
                                    </div>
                                    <div className="row_header stack_1">
                                       
                                        Surplus
                                    </div>
                              
                                    <div className="row_text stack_2 ms-auto">
                                        
                                        {surplus}
                                    </div>
                                    <div className="row_text_2 stack_3 ms-auto">
                                         {surplusComment}
                                    </div>
                                </Stack>
    
                            </Row>

                            <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">

                                    <div className="stack_0">
                                        <OverlayTrigger trigger="hover" placement="right" overlay={PopoverShortfall(jsonData)}>
                                            <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                        </OverlayTrigger>
                                    </div>
                                    <div className="row_header stack_1">
                                        
                                        Shortfall
                                    </div>
                              
                                    <div className="row_text stack_2 ms-auto">
                                        
                                        {shortfall}
                                    </div>
                                    <div className="row_text_2 stack_3 ms-auto">
                                        {shortfallComment}
                                    </div>
                                </Stack>
    
                            </Row>

                            <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">

                                    <div className="stack_0">
                                        <OverlayTrigger trigger="hover" placement="right" overlay={PopoverInitialStored(jsonData)}>
                                            <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                        </OverlayTrigger>
                                    </div>
                                    <div className="row_header stack_1">

                                        
                                        Initial Stored

                                    </div>
                              
                                    <div className="row_text stack_2 ms-auto">
                                        
                                        {initialStored}
                                    </div>
                                    <div className="row_text_2 stack_3 ms-auto">
                              
                                    </div>
                                </Stack>
    
                            </Row>
                            <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">

                                    <div className="stack_0">
                                        <OverlayTrigger trigger="hover" placement="right" overlay={PopoverFinalStored(jsonData)}>
                                            <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                        </OverlayTrigger>
                                    </div>
                                    <div className="row_header stack_1">
                                        
                                        Final Stored
                                    </div>
                              
                                    <div className="row_text stack_2 ms-auto">
                                        
                                        {finalStored}
                                    </div>
                                    <div className="row_text_2 stack_3 ms-auto">
                            
                                    </div>
                                </Stack>
    
                            </Row>

                            <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">

                                    <div className="stack_0">
                                        <OverlayTrigger trigger="hover" placement="right" overlay={PopoverStorageDiscrepancy(jsonData)}>
                                            <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                        </OverlayTrigger>
                                    </div>

                                    <div className="row_header stack_1">
                                        
                                        Storage Difference
                                    </div>
                              
                                    <div className="row_text stack_2 ms-auto">
                                        
                                        {storageDiscrepancy}
                                    </div>
                                    <div className="row_text_2 stack_3 ms-auto">
                                        {storageDiscrepancyComment}
                                    </div>
                                </Stack>
    
                            </Row>

                            <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">
                                    <div className="stack_0">
                                        <OverlayTrigger trigger="hover" placement="right" overlay={PopoverEfficiencyScore(jsonData)}>
                                            <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                        </OverlayTrigger>
                                    </div>
                                    <div className="row_header stack_1">
                                       
                                        Efficiency Score
                                    </div>
                              
                                    <div className="row_text stack_2 ms-auto">
                                        
                                        {efficiencyScore}
                                    </div>
                                    <div className="row_text_2 stack_3 ms-auto">

                                        {efficiencyScoreComment}
                                    </div>
                                </Stack>
    
                            </Row>

                            <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">
                                    <div className="stack_0">
                                        <OverlayTrigger trigger="hover" placement="right" overlay={PopoverTotalCO2(jsonData)}>
                                            <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                        </OverlayTrigger>
                                    </div>
                                    <div className="row_header stack_1">
                                        
                                        Total CO2 (tonnes)
                                    </div>
                              
                                    <div className="row_text stack_2 ms-auto">
                                        
                                        {totalCO2Tonnes}
                                    </div>
                                    <div className="row_text_2 stack_3 ms-auto">
                            
                                    </div>
                                </Stack>
    
                            </Row>
                            <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">
                                    <div className="stack_0">
                                        <OverlayTrigger trigger="hover" placement="right" overlay={PopoverTotalCost(jsonData)}>
                                            <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                        </OverlayTrigger>
                                    </div>
                                    <div className="row_header stack_1">
                                        
                                        Total Cost (£M)
                                    </div>
                              
                                    <div className="row_text stack_2 ms-auto">
                                        
                                        {totalCostMillionPounds}
                                    </div>
                                    <div className="row_text_2 stack_3 ms-auto">
                            
                                    </div>
                                </Stack>
    
                            </Row>
                            <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">
                                    <div className="stack_0">
                                        <OverlayTrigger trigger="hover" placement="right" overlay={PopoverAverageCost(jsonData)}>
                                            <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                        </OverlayTrigger>
                                    </div>
                                    <div className="row_header stack_1">
                                        
                                        Average Cost (£Million/Gwh)
                                    </div>
                              
                                    <div className="row_text stack_2 ms-auto">
                                        
                                        {averageCostMillionPerGWH}
                                    </div>
                                    <div className="row_text_2 stack_3 ms-auto">
                                        {averageCostComment}
                                    </div>
                                </Stack>
    
                            </Row>
                            <Row className="section_simrepo_wrapper_stack_wrapper_row">
                                
                                <Stack direction="horizontal">
                                    <div className="stack_0">
                                        <OverlayTrigger trigger="hover" placement="right" overlay={PopoverAverageCO2(jsonData)}>
                                            <img className="section_simrepo_wrapper_questionmark" src={QuestionMarkBlue} />
                                        </OverlayTrigger>
                                    </div>
                                    <div className="row_header stack_1">
                                        
                                        Average CO2 (tonnes/GWh)
                                    </div>
                              
                                    <div className="row_text stack_2 ms-auto">
                                        
                                        {averageCO2}
                                    </div>
                                    <div className="row_text_2 stack_3 ms-auto">
                                        {averageCO2Comment}
                                    </div>
                                </Stack>
    
                            </Row>
    
                            
                        </div>
                        <br /><br />
                    </div>
                    
                </section>
            </div>
        )
}

export default SimulationReport;