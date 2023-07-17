import { React } from "react";
import Popover from "react-bootstrap/Popover";
import "../../css/popovers/popovers.css";
import PropTypes from "prop-types";

//This does not follow DRY

export const PopoverNuclearUtilisation = (simRepoFieldData) => {
  const infoNuclearUtilisation = simRepoFieldData.nuclear_utilisation;

  return (
    <Popover id="popover_demand-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Nuclear Utilisation</p>
      </Popover.Header>
      <Popover.Body>{infoNuclearUtilisation}</Popover.Body>
    </Popover>
  );
};

export const PopoverFossilFuelsUtilisation = (simRepoFieldData) => {
  const infoFossilFuelsUtilisation = simRepoFieldData.fossil_fuels_utilisation;

  return (
    <Popover id="popover_wind-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Fossil Fuels Utilisation</p>
      </Popover.Header>
      <Popover.Body>{infoFossilFuelsUtilisation}</Popover.Body>
    </Popover>
  );
};



export const PopoverDemand = (simRepoFieldData) => {
  const infoDemand = simRepoFieldData.demand_info;

  return (
    <Popover id="popover_demand-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Demand</p>
      </Popover.Header>
      <Popover.Body>{infoDemand}</Popover.Body>
    </Popover>
  );
};

export const PopoverWind = (simRepoFieldData) => {
  const infoWind = simRepoFieldData.wind_info;

  return (
    <Popover id="popover_wind-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Wind</p>
      </Popover.Header>
      <Popover.Body>{infoWind}</Popover.Body>
    </Popover>
  );
};

export const PopoverSolar = (simRepoFieldData) => {
  const infoSolar = simRepoFieldData.solar_info;

  return (
    <Popover id="popover_solar-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Solar</p>
      </Popover.Header>
      <Popover.Body>{infoSolar}</Popover.Body>
    </Popover>
  );
};

export const PopoverFossilFuels = (simRepoFieldData) => {
  const infoFossilFuels = simRepoFieldData.fossil_fuels_info;

  return (
    <Popover id="popoverFossil_fuels-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Fossil Fuels</p>
      </Popover.Header>
      <Popover.Body>{infoFossilFuels}</Popover.Body>
    </Popover>
  );
};

export const PopoverNuclear = (simRepoFieldData) => {
  const infoNuclear = simRepoFieldData.nuclear_info;

  return (
    <Popover id="popover_nuclear-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Nuclear</p>
      </Popover.Header>
      <Popover.Body>{infoNuclear}</Popover.Body>
    </Popover>
  );
};

export const PopoverSurplus = (simRepoFieldData) => {
  const infoSurplus = simRepoFieldData.surplus_info;

  return (
    <Popover id="popover_surplus-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Surplus</p>
      </Popover.Header>
      <Popover.Body>{infoSurplus}</Popover.Body>
    </Popover>
  );
};

export const PopoverShortfall = (simRepoFieldData) => {
  const infoShortfall = simRepoFieldData.shortfall_info;

  return (
    <Popover id="popover_shortfall-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Shortfall</p>
      </Popover.Header>
      <Popover.Body>{infoShortfall}</Popover.Body>
    </Popover>
  );
};

export const PopoverInitialStored = (simRepoFieldData) => {
  const infoInitialStored = simRepoFieldData.initial_stored_info;
  return (
    <Popover id="popover_initial_stored-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Initial Stored</p>
      </Popover.Header>
      <Popover.Body>{infoInitialStored}</Popover.Body>
    </Popover>
  );
};

export const PopoverFinalStored = (simRepoFieldData) => {
  const infoFinalStored = simRepoFieldData.final_stored_info;

  return (
    <Popover id="popover_final_stored-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Final Stored</p>
      </Popover.Header>
      <Popover.Body>{infoFinalStored}</Popover.Body>
    </Popover>
  );
};

export const PopoverStorageDiscrepancy = (simRepoFieldData) => {
  const infoStorageDiscrepancy = simRepoFieldData.storage_discrepancy_info;

  return (
    <Popover id="popover_storage_discrepancy-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Storage Discrepancy</p>
      </Popover.Header>
      <Popover.Body>{infoStorageDiscrepancy}</Popover.Body>
    </Popover>
  );
};

export const PopoverEfficiencyScore = (simRepoFieldData) => {
  const infoEfficiencyScore = simRepoFieldData.efficiency_score_info;

  return (
    <Popover id="popover_efficiency_score-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Efficiency Score</p>
      </Popover.Header>
      <Popover.Body>{infoEfficiencyScore}</Popover.Body>
    </Popover>
  );
};

export const PopoverTotalCO2 = (simRepoFieldData) => {
  const infoTotalCO2Tonnes = simRepoFieldData.total_CO2_tonnes_info;

  return (
    <Popover id="popover_total_CO2-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Total CO2</p>
      </Popover.Header>
      <Popover.Body>{infoTotalCO2Tonnes}</Popover.Body>
    </Popover>
  );
};

export const PopoverTotalCost = (simRepoFieldData) => {
  const infoTotalCostMillionPounds = simRepoFieldData.total_cost_million_pounds_info;

  return (
    <Popover id="popover_total_cost-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Total Cost</p>
      </Popover.Header>
      <Popover.Body>{infoTotalCostMillionPounds}</Popover.Body>
    </Popover>
  );
};

export const PopoverAverageCost = (simRepoFieldData) => {
  const infoAverageCostMillionPerGWH =
  simRepoFieldData.average_cost_million_pounds_per_gwh_info;

  return (
    <Popover id="popover_average_cost-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Average Cost</p>
      </Popover.Header>
      <Popover.Body>{infoAverageCostMillionPerGWH}</Popover.Body>
    </Popover>
  );
};

export const PopoverAverageCO2 = (simRepoFieldData) => {
  const infoAverageCO2 = simRepoFieldData.average_CO2_tonnes_per_gwh_info;

  return (
    <Popover id="popover_average_CO2-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Average CO2</p>
      </Popover.Header>
      <Popover.Body>
        <p className="popover_body">{infoAverageCO2}</p>
      </Popover.Body>
    </Popover>
  );
};

PopoverDemand.propTypes = {
  simRepoFieldData: PropTypes.json,
};

PopoverWind.propTypes = {
  simRepoFieldData: PropTypes.json,
};

PopoverSolar.propTypes = {
  simRepoFieldData: PropTypes.json,
};

PopoverNuclear.propTypes = {
  simRepoFieldData: PropTypes.json,
};

PopoverSurplus.propTypes = {
  simRepoFieldData: PropTypes.json,
};

PopoverShortfall.propTypes = {
  simRepoFieldData: PropTypes.json,
};

PopoverAverageCO2.propTypes = {
  simRepoFieldData: PropTypes.json,
};

PopoverEfficiencyScore.propTypes = {
  simRepoFieldData: PropTypes.json,
};

PopoverInitialStored.propTypes = {
  simRepoFieldData: PropTypes.json,
};

PopoverFinalStored.propTypes = {
  simRepoFieldData: PropTypes.json,
};

PopoverFossilFuels.propTypes = {
  simRepoFieldData: PropTypes.json,
};

PopoverTotalCost.propTypes = {
  simRepoFieldData: PropTypes.json,
};

PopoverAverageCost.propTypes = {
  simRepoFieldData: PropTypes.json,
};

PopoverTotalCO2.propTypes = {
  simRepoFieldData: PropTypes.json,
};

PopoverStorageDiscrepancy.propTypes = {
  simRepoFieldData: PropTypes.json,
};
