import React from "react";

import "../../css/components/simulationReport.css";

import EfficiencySpark from "../sparkAnimation/efficiencySpark";
import EconomySpark from "../sparkAnimation/economySpark";
import EcoSpark from "../sparkAnimation/ecoSpark";

import QuestionMarkBlue from "../../images/questionmarkblue.png";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Stack from "react-bootstrap/Stack";

import DefaultEconomySparkRed from "../sparkAnimation/defaultModels/economy/economysparkredNEW.glb";
import DefaultEconomySparkBlue from "../sparkAnimation/defaultModels/economy/economysparkblueNEW.glb";
import DefaultEconomySparkGreen from "../sparkAnimation/defaultModels/economy/economysparkgreenNEW.glb";
import DefaultEcoSparkRed from "../sparkAnimation/defaultModels/eco/ecosparkredNEW.glb";
import DefaultEcoSparkBlue from "../sparkAnimation/defaultModels/eco/ecosparkblueNEW.glb";
import DefaultEcoSparkGreen from "../sparkAnimation/defaultModels/eco/ecosparkgreenNEW.glb";
import DefaultEfficiencySparkRed from "../sparkAnimation/defaultModels/efficiency/efficiencysparkredNEW.glb";
import DefaultEfficiencySparkBlue from "../sparkAnimation/defaultModels/efficiency/efficiencysparkblueNEW.glb";
import DefaultEfficiencySparkGreen from "../sparkAnimation/defaultModels/efficiency/efficiencysparkgreenNEW.glb";

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
} from "../popovers/popover.js";

function SimulationReport({ simReportData, models, simRepoFieldData }) {
  console.log("simReportData Data Is Being Passed To Simulation Report.");
  console.log(simReportData);

  if (simReportData) {
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
    var averageCostMillionPerGWH =
      simReportData.average_cost_million_pounds_per_gwh;

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

    //Here filter models, and pass them into three dimensional model components
    var EconomySparkModel;
    var EcoSparkModel;
    var EfficiencySparkModel;
    

    if (typeof models != 'number' ) {

      console.log(models);
      console.log();

      if (economySpark == "red") {
        EconomySparkModel = models[0].model_url;
      } else if (economySpark == "blue") {
        EconomySparkModel = models[1].model_url;
      } else if (economySpark == "green") {
        EconomySparkModel = models[2].model_url;
      }

      if (ecoFriendlinessSpark == "red") {
        EcoSparkModel = models[3].model_url;
      } else if (ecoFriendlinessSpark == "blue") {
        EcoSparkModel = models[4].model_url;
      } else if (ecoFriendlinessSpark == "green") {
        EcoSparkModel = models[5].model_url;
      }

      if (efficiencySpark == "red") {
        EfficiencySparkModel = models[6].model_url;
      } else if (efficiencySpark == "blue") {
        EfficiencySparkModel = models[7].model_url;
      } else if (efficiencySpark == "green") {
        EfficiencySparkModel = models[8].model_url;
      }

    } else {

      //here pass all the default models to the compone

      if (economySpark == "red") {
        EconomySparkModel = DefaultEconomySparkRed;
      } else if (economySpark == "blue") {
        EconomySparkModel = DefaultEconomySparkBlue;
      } else if (economySpark == "green") {
        EconomySparkModel = DefaultEconomySparkGreen;
      }

      if (ecoFriendlinessSpark == "red") {
        EcoSparkModel = DefaultEcoSparkRed;
      } else if (ecoFriendlinessSpark == "blue") {
        EcoSparkModel = DefaultEcoSparkBlue;
      } else if (ecoFriendlinessSpark == "green") {
        EcoSparkModel = DefaultEcoSparkGreen;
      }

      if (efficiencySpark == "red") {
        EfficiencySparkModel = DefaultEfficiencySparkRed;
      } else if (efficiencySpark == "blue") {
        EfficiencySparkModel = DefaultEfficiencySparkBlue;
      } else if (efficiencySpark == "green") {
        EfficiencySparkModel = DefaultEfficiencySparkGreen;
      }


    }

    console.log("Json data has been assigned to variables.");
  } else {
    console.log("No real data was passed to the simulation report..");
  }

  return (
    <div>

      <section className="simreport">
        <div className="simreport_wrapper">
     

          <p className="simreport_title">Simulation Report #{gameID}</p>
          <p className="simreport_sub-title">
            {" "}
            {datePlayed} &nbsp; &nbsp; &nbsp; {timePlayed}{" "}
          </p>



          <div className="simreport_table1">
            <Row className="table1_row1">
              <Col className="table1_col1-text" xs={6} sm={4} md={4} lg={4}>
                Difficulty
              </Col>
              <Col className="table1_col2-text" xs={3} sm={3} md={2} lg={2}>
                {difficulty}
              </Col>
            </Row>
     
            <Row className="table1_row2">
              <Col className="table1_col1-text" xs={12} sm={3} md={3} lg={3}>
                Sparks Earned:
              </Col>
              
              <Col className="table_1_sparkcol" xs={12} sm={3} md={3} lg={3}>
                <EconomySpark model={EconomySparkModel} />

                {/*{economySpark === "green" ? <img className="section_simrepo_wrapper_spark" src={GreenSparkEconomy} /> : economySpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={BlueSparkEconomy} /> : <img className="section_simrepo_wrapper_spark" src={RedSparkEconomy} /> }*/}
              </Col>
              <Col className="table_1_sparkcol" xs={12} sm={3} md={3} lg={3}>
                <EcoSpark model={EcoSparkModel} />

                {/*{ecoFriendlinessSpark === "green" ? <img className="section_simrepo_wrapper_spark" src={GreenSparkEcoFriendliness} /> : ecoFriendlinessSpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={BlueSparkEcoFriendliness} /> : <img className="section_simrepo_wrapper_spark" src={RedSparkEcoFriendliness} /> }*/}
              </Col>
              <Col className="table_1_sparkcol" xs={12} sm={3} md={3} lg={3}>
                <EfficiencySpark model={EfficiencySparkModel} />

                {/*{efficiencySpark === "green" ? <img className="section_simrepo_wrapper_spark" src={GreenSparkEfficiency} /> : efficiencySpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={BlueSparkEfficiency} /> : <img className="section_simrepo_wrapper_spark" src={RedSparkEfficiency} /> }*/}
              </Col>
            </Row>
          </div>

   
          <p className="table2_title">Results Summary</p>

          <div className="table2">
            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0  table2_column-title"></div>
                <div className="table2_row-header table2_stack1 table2_column-title">
                  Metric
                </div>

                <div className="table2_row-header table2_row-text table2_stack2 ms-auto table2_column-title">
                  Score
                </div>
                {/*-MAKE THIS SIMILAR CSS TO STACK 3 BUT NOT THE SAME.*/}
                <div className="table2_row-header table2_row-text2 table2_stack3 ms-auto table2_column-title">
                  Comments
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverDemand(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">Demand</div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {demand}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  Could Do Better...
                </div>
              </Stack>
            </Row>
            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverWind(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">Wind</div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {wind}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto"></div>
              </Stack>
            </Row>
            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverSolar(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">Solar</div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {solar}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  Could Do Better...
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverFossilFuels(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">
                  Fossil Fuels
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {fossilFuels}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  Could Do Better...
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverNuclear(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">Nuclear</div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {nuclear}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  Could Do Better...
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverSurplus(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">Surplus</div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {surplus}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  {surplusComment}
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverShortfall(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">Shortfall</div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {shortfall}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  {shortfallComment}
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverInitialStored(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">
                  Initial Stored
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {initialStored}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto"></div>
              </Stack>
            </Row>
            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverFinalStored(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">
                  Final Stored
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {finalStored}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto"></div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverStorageDiscrepancy(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>

                <div className="table2_row-header table2_stack1">
                  Storage Difference
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {storageDiscrepancy}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  {storageDiscrepancyComment}
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverEfficiencyScore(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">
                  Efficiency Score
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {efficiencyScore}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  {efficiencyScoreComment}
                </div>
              </Stack>
            </Row>

            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverTotalCO2(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">Total CO2</div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {totalCO2Tonnes}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto"></div>
              </Stack>
            </Row>
            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverTotalCost(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">
                  Total Cost
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {totalCostMillionPounds}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto"></div>
              </Stack>
            </Row>
            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverAverageCost(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">
                  Average Cost
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {averageCostMillionPerGWH}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  {averageCostComment}
                </div>
              </Stack>
            </Row>
            <Row className="table2_row">
              <Stack direction="horizontal">
                <div className="table2_stack0">
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverAverageCO2(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
                </div>
                <div className="table2_row-header table2_stack1">
                  Average CO2
                </div>

                <div className="table2_row-text table2_stack2 ms-auto">
                  {averageCO2}
                </div>
                <div className="table2_row-text2 table2_stack3 ms-auto">
                  {averageCO2Comment}
                </div>
              </Stack>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SimulationReport;
