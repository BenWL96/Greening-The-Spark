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

function SimulationReport({ jsonData, models }) {
  console.log("jsonData Data Is Being Passed To Simulation Report.");
  console.log(jsonData);

  if (jsonData) {
    const simReportData = jsonData[0];
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
    var efficiencySparkModel;
    var ecoSparkModel;
    var economySparkModel;

    if (model.lenth == 11) {
      if (efficiencySpark == "red") {
        efficiencySparkModel = "";
      } else if (efficiencySpark == "blue") {
        efficiencySparkModel = "";
      } else if (efficiencySpark == "green") {
        efficiencySparkModel = "";
      }

      if (economySpark == "red") {
        economySparkModel = "";
      } else if (economySpark == "blue") {
        economySparkModel = "";
      } else if (economySpark == "green") {
        economySparkModel = "";
      }

      if (ecoSpark == "red") {
        ecoSparkModel = "";
      } else if (ecoSpark == "blue") {
        ecoSparkModel = "";
      } else if (ecoSpark == "green") {
        ecoSparkModel = "";
      }
    }

    console.log("Json data has been assigned to variables.");
  } else {
    console.log("No real data was passed to the simulation report..");
  }

  return (
    <div>
      <br />
      <section className="simreport">
        <div className="simreport_wrapper">
          <br />

          <p className="simreport_title">Simulation Report #{gameID}</p>
          <p className="simreport_sub-title">
            {" "}
            {datePlayed} &nbsp; &nbsp; &nbsp; {timePlayed}{" "}
          </p>

          <br />

          <div className="simreport_table1">
            <Row className="table1_row">
              <Col className="table1_col1-text" xs={6} sm={4} md={4} lg={4}>
                Difficulty
              </Col>
              <Col className="table1_col2-text" xs={3} sm={3} md={2} lg={2}>
                {difficulty}
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <Row className="table1_row">
              <Col className="table1_col1-text" xs={12} sm={3} md={3} lg={3}>
                Sparks Earned:
              </Col>
              <Col xs={12} sm={3} md={3} lg={3}>
                <EfficiencySpark models={models} />

                {/*{efficiencySpark === "green" ? <img className="section_simrepo_wrapper_spark" src={GreenSparkEfficiency} /> : efficiencySpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={BlueSparkEfficiency} /> : <img className="section_simrepo_wrapper_spark" src={RedSparkEfficiency} /> }*/}
              </Col>
              <Col xs={12} sm={3} md={3} lg={3}>
                <EcoSpark models={models} />

                {/*{ecoFriendlinessSpark === "green" ? <img className="section_simrepo_wrapper_spark" src={GreenSparkEcoFriendliness} /> : ecoFriendlinessSpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={BlueSparkEcoFriendliness} /> : <img className="section_simrepo_wrapper_spark" src={RedSparkEcoFriendliness} /> }*/}
              </Col>
              <Col xs={12} sm={3} md={3} lg={3}>
                <EconomySpark models={models} />

                {/*{economySpark === "green" ? <img className="section_simrepo_wrapper_spark" src={GreenSparkEconomy} /> : economySpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={BlueSparkEconomy} /> : <img className="section_simrepo_wrapper_spark" src={RedSparkEconomy} /> }*/}
              </Col>
            </Row>
          </div>

          <br />
          <br />

          <p className="table2_title">Results Summary</p>
          <br />

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
                    overlay={PopoverDemand(jsonData)}
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
                    overlay={PopoverWind(jsonData)}
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
                    overlay={PopoverSolar(jsonData)}
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
                    overlay={PopoverFossilFuels(jsonData)}
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
                    overlay={PopoverNuclear(jsonData)}
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
                    overlay={PopoverSurplus(jsonData)}
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
                    overlay={PopoverShortfall(jsonData)}
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
                    overlay={PopoverInitialStored(jsonData)}
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
                    overlay={PopoverFinalStored(jsonData)}
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
                    overlay={PopoverStorageDiscrepancy(jsonData)}
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
                    overlay={PopoverEfficiencyScore(jsonData)}
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
                    overlay={PopoverTotalCO2(jsonData)}
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
                    overlay={PopoverTotalCost(jsonData)}
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
                    overlay={PopoverAverageCost(jsonData)}
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
                    overlay={PopoverAverageCO2(jsonData)}
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
          <br />
          <br />
        </div>
      </section>
    </div>
  );
}

export default SimulationReport;
