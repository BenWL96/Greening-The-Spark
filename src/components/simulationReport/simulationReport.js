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

import DefaultEconomySparkRed from "../sparkAnimation/defaultModels/economy/economysparkredmerge3.glb";
import DefaultEconomySparkBlue from "../sparkAnimation/defaultModels/economy/economysparkbluemerge3.glb";
import DefaultEconomySparkGreen from "../sparkAnimation/defaultModels/economy/economysparkgreenmerge3.glb";
import DefaultEcoSparkRed from "../sparkAnimation/defaultModels/eco/ecosparkredmerge3.glb";
import DefaultEcoSparkBlue from "../sparkAnimation/defaultModels/eco/ecosparkbluemerge3.glb";
import DefaultEcoSparkGreen from "../sparkAnimation/defaultModels/eco/ecosparkgreenmerge3.glb";
import DefaultEfficiencySparkRed from "../sparkAnimation/defaultModels/efficiency/efficiencysparkredmerge3.glb";
import DefaultEfficiencySparkBlue from "../sparkAnimation/defaultModels/efficiency/efficiencysparkbluemerge3.glb";
import DefaultEfficiencySparkGreen from "../sparkAnimation/defaultModels/efficiency/efficiencysparkgreenmerge3.glb";

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
  PopoverNuclearUtilisation,
  PopoverFossilFuelsUtilisation
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

    var fossilFuelsUtilisation = simReportData.fossil_fuels_utilisation;
    var nuclearUtilisation = simReportData.nuclear_utilisation;

    var surplus = simReportData.surplus;
    var shortfall = simReportData.shortfall;
    var initialStored = simReportData.initial_stored;
    var finalStored = simReportData.final_stored;
    var storageChange = simReportData.storage_change;


    var totalCO2 = simReportData.total_CO2;
    var totalCost = simReportData.total_cost;
    var averageCO2 = simReportData.average_CO2;
    var averageCost =
      simReportData.average_cost;

    //COMMENTS

    var surplusComment = simReportData.surplus_comment;
    var shortfallComment = simReportData.shortfall_comment;
    var storageChangeComment = simReportData.storage_change_comment;
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
                <EfficiencySpark model={EfficiencySparkModel} />

                {/*{efficiencySpark === "green" ? <img className="section_simrepo_wrapper_spark" src={GreenSparkEfficiency} /> : efficiencySpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={BlueSparkEfficiency} /> : <img className="section_simrepo_wrapper_spark" src={RedSparkEfficiency} /> }*/}
              </Col>
              
              <Col className="table_1_sparkcol" xs={12} sm={3} md={3} lg={3}>
                <EconomySpark model={EconomySparkModel} />

                {/*{economySpark === "green" ? <img className="section_simrepo_wrapper_spark" src={GreenSparkEconomy} /> : economySpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={BlueSparkEconomy} /> : <img className="section_simrepo_wrapper_spark" src={RedSparkEconomy} /> }*/}
              </Col>
              <Col className="table_1_sparkcol" xs={12} sm={3} md={3} lg={3}>
                <EcoSpark model={EcoSparkModel} />

                {/*{ecoFriendlinessSpark === "green" ? <img className="section_simrepo_wrapper_spark" src={GreenSparkEcoFriendliness} /> : ecoFriendlinessSpark === "blue" ? <img className="section_simrepo_wrapper_spark" src={BlueSparkEcoFriendliness} /> : <img className="section_simrepo_wrapper_spark" src={RedSparkEcoFriendliness} /> }*/}
              </Col>
              
            </Row>
          </div>

          
          <p className="table2_title">Results Summary</p>


          {/* test */}
          <div className="sim-repo-table-2">
            <div className="sim-report-grid">
              <div className="sim-report-item">
              
              </div>
              <div className="sim-report-item">
                <p className="table2_row-header">
                  Metric
                </p>
              </div>
              <div className="sim-report-item">
                <p className="table2_row-header">
                  Value
                </p>
              </div>
              <div className="sim-report-item">
                <p className="table2_row-header">
                  Comments
                </p>
              </div>

            
            </div>

            <div class="sim-report-grid">
              
              <div class="sim-report-item">
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
              <div class="sim-report-item">
                <p className="table2_row-header">
                  Surplus
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text">
                  {surplus}
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text2">
                  {surplusComment}
                </p>
                
              </div>

            
            
            </div>

            <div class="sim-report-grid">
              
              <div class="sim-report-item">
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
              <div class="sim-report-item">
                <p className="table2_row-header">
                    Shortfall
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text">
                  {shortfall}
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text2">
                  {shortfallComment}
                </p>
                
              </div>
            
            </div>

            <div class="sim-report-grid">
              
              <div class="sim-report-item">
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
              <div class="sim-report-item">
                <p className="table2_row-header">
                    Storage Change
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text">
                  {storageChange}
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text2">
                  {storageChangeComment}
                </p>
                
              </div>
            
            </div>


      

            

            

            <div class="sim-report-grid">
              
              <div class="sim-report-item">
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
              <div class="sim-report-item">
                <p className="table2_row-header">
                    Average CO2
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text">
                  {averageCO2}
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text2">
                  {averageCO2Comment}
                </p>
                
              </div>
            
            </div>


            <div class="sim-report-grid">
              
              <div class="sim-report-item">
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
              <div class="sim-report-item">
                <p className="table2_row-header">
                    Average Cost
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text">
                  {averageCost}
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text2">
                  {averageCostComment}
                </p>
                
              </div>
            
            </div>


            <div class="sim-report-grid">
              <div class="sim-report-item">
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
              <div class="sim-report-item">
                <p className="table2_row-header">
                  Wind
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text">
                  {wind}
                </p>
                
              </div>
              <div class="sim-report-item">
              
              </div>

            
            </div>


            <div className="sim-report-grid">
              <div className="sim-report-item">
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
              <div className="sim-report-item">
                <p className="table2_row-header">
                  Demand
                </p>
              </div>
              <div className="sim-report-item">
                <p className="table2_row-text">
                  {demand}
                </p>
              </div>
              <div className="sim-report-item">
                <p className="table2_row-text2">
                </p>
              </div>

            
            </div>
            
            <div class="sim-report-grid">
              <div class="sim-report-item">
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
              <div class="sim-report-item">
                <p className="table2_row-header">
                  Solar
                </p>
                
              </div>
              <div class="sim-report-item">
                 <p className="table2_row-text">
                 {solar}
                </p>
                
              </div>
              <div class="sim-report-item">
         
              </div>
            </div>



            <div class="sim-report-grid">
              
            <div class="sim-report-item">
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
              
              <div class="sim-report-item">
                <p className="table2_row-header">
                Fossil Fuels
                </p>
                
              </div>
              
              <div class="sim-report-item">
                <p className="table2_row-text">
                  {fossilFuels}
                </p>
                
              </div>
              <div class="sim-report-item">
              
              </div>

            
            </div>
            <div class="sim-report-grid">
              <div class="sim-report-item">
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

              <div class="sim-report-item">
                <p className="table2_row-header">
                Nuclear
                </p>
                
              </div>
              
              <div class="sim-report-item">
                <p className="table2_row-text">
                  {nuclear}
                </p>
                
              </div>
              <div class="sim-report-item">
              
              </div>

            
            
            </div>

           

            <div class="sim-report-grid">
              
              <div class="sim-report-item">
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
              <div class="sim-report-item">
                <p className="table2_row-header">
                  Initial Stored
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text">
                  {initialStored}
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text2">
                
                </p>
                
              </div>
            
            </div>
            <div class="sim-report-grid">
              
              <div class="sim-report-item">
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
              <div class="sim-report-item">
                <p className="table2_row-header">
                  Final Stored
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text">
                  {finalStored}
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text2">
              
                </p>
                
              </div>
            
            </div>

            
            

            <div class="sim-report-grid">
              
              <div class="sim-report-item">
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
              <div class="sim-report-item">
                <p className="table2_row-header">
                    Total CO2
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text">
                  {totalCO2}
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text2">
   
                </p>
                
              </div>
            
            </div>
            <div class="sim-report-grid">
              
              <div class="sim-report-item">
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
              <div class="sim-report-item">
                <p className="table2_row-header">
                    Total Cost
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text">
                  {totalCost}
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text2">
                </p>
                
              </div>
            
            </div>



             
            <div class="sim-report-grid">
              
              <div class="sim-report-item">
              <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverFossilFuelsUtilisation(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
              </div>
              <div class="sim-report-item">
                <p className="table2_row-header">
                  Fossil Fuels Utilisation
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text">
                  {fossilFuelsUtilisation}
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text2">
        
                </p>
                
              </div>

            
            
            </div>

            <div class="sim-report-grid">
              
              <div class="sim-report-item">
              <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={PopoverNuclearUtilisation(simRepoFieldData)}
                  >
                    <img
                      className="simrepo_questionmark"
                      src={QuestionMarkBlue}
                    />
                  </OverlayTrigger>
              </div>
              <div class="sim-report-item">
                <p className="table2_row-header">
                  Nuclear Utilisation
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text">
                  {nuclearUtilisation}
                </p>
                
              </div>
              <div class="sim-report-item">
                <p className="table2_row-text2">
     
                </p>
                
              </div>

            
            
            </div>


            

            
            </div>
            {/* endtest */}



          
        </div>
      </section>
    </div>
  );
}

export default SimulationReport;
