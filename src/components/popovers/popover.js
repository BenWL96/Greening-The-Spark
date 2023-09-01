import { React } from "react";
import Popover from "react-bootstrap/Popover";
import "../../css/popovers/popovers.css";
import PropTypes from "prop-types";

//This does not follow DRY

export const PopoverNuclearUtilisation = (infoNuclearUtilisation) => {

  return (
    <Popover id="popover_demand-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Nuclear Utilisation</p>
      </Popover.Header>
      <Popover.Body>{infoNuclearUtilisation}</Popover.Body>
    </Popover>
  );
};

export const PopoverFossilFuelsUtilisation = (infoFossilFuelsUtilisation) => {

  return (
    <Popover id="popover_wind-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Fossil Fuels Utilisation</p>
      </Popover.Header>
      <Popover.Body>{infoFossilFuelsUtilisation}</Popover.Body>
    </Popover>
  );
};



export const PopoverDemand = (infoDemand) => {

  return (
    <Popover id="popover_demand-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Demand</p>
      </Popover.Header>
      <Popover.Body>{infoDemand}</Popover.Body>
    </Popover>
  );
};

export const PopoverWind = (infoWind) => {

  return (
    <Popover id="popover_wind-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Wind</p>
      </Popover.Header>
      <Popover.Body>{infoWind}</Popover.Body>
    </Popover>
  );
};

export const PopoverSolar = (infoSolar) => {

  return (
    <Popover id="popover_solar-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Solar</p>
      </Popover.Header>
      <Popover.Body>{infoSolar}</Popover.Body>
    </Popover>
  );
};

export const PopoverFossilFuels = (infoFossilFuels) => {

  return (
    <Popover id="popoverFossil_fuels-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Fossil Fuels</p>
      </Popover.Header>
      <Popover.Body>{infoFossilFuels}</Popover.Body>
    </Popover>
  );
};

export const PopoverNuclear = (infoNuclear) => {

  return (
    <Popover id="popover_nuclear-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Nuclear</p>
      </Popover.Header>
      <Popover.Body>{infoNuclear}</Popover.Body>
    </Popover>
  );
};

export const PopoverSurplus = (infoSurplus) => {

  return (
    <Popover id="popover_surplus-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Surplus</p>
      </Popover.Header>
      <Popover.Body>{infoSurplus}</Popover.Body>
    </Popover>
  );
};

export const PopoverShortfall = (infoShortfall) => {

  return (
    <Popover id="popover_shortfall-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Shortfall</p>
      </Popover.Header>
      <Popover.Body>{infoShortfall}</Popover.Body>
    </Popover>
  );
};

export const PopoverInitialStored = (infoInitialStored) => {

  return (
    <Popover id="popover_initial_stored-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Initial Stored</p>
      </Popover.Header>
      <Popover.Body>{infoInitialStored}</Popover.Body>
    </Popover>
  );
};

export const PopoverFinalStored = (infoFinalStored) => {

  return (
    <Popover id="popover_final_stored-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Final Stored</p>
      </Popover.Header>
      <Popover.Body>{infoFinalStored}</Popover.Body>
    </Popover>
  );
};

export const PopoverStorageDiscrepancy = (infoStorageDiscrepancy) => {

  return (
    <Popover id="popover_storage_discrepancy-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Storage Discrepancy</p>
      </Popover.Header>
      <Popover.Body>{infoStorageDiscrepancy}</Popover.Body>
    </Popover>
  );
};

export const PopoverEfficiencyScore = (infoEfficiencyScore) => {

  return (
    <Popover id="popover_efficiency_score-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Efficiency Score</p>
      </Popover.Header>
      <Popover.Body>{infoEfficiencyScore}</Popover.Body>
    </Popover>
  );
};

export const PopoverTotalCO2 = (infoTotalCO2Tonnes) => {

  return (
    <Popover id="popover_total_CO2-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Total CO2</p>
      </Popover.Header>
      <Popover.Body>{infoTotalCO2Tonnes}</Popover.Body>
    </Popover>
  );
};

export const PopoverTotalCost = (infoTotalCostMillionPounds) => {

  return (
    <Popover id="popover_total_cost-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Total Cost</p>
      </Popover.Header>
      <Popover.Body>{infoTotalCostMillionPounds}</Popover.Body>
    </Popover>
  );
};

export const PopoverAverageCost = (infoAverageCostMillionPerGWH) => {

  return (
    <Popover id="popover_average_cost-basic" className="popover">
      <Popover.Header>
        <p className="popover_header">Average Cost</p>
      </Popover.Header>
      <Popover.Body>{infoAverageCostMillionPerGWH}</Popover.Body>
    </Popover>
  );
};

export const PopoverAverageCO2 = (infoAverageCO2) => {

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

PopoverNuclearUtilisation.propTypes = {
  infoNuclearUtilisation: PropTypes.string,
};

PopoverFossilFuelsUtilisation.propTypes = {
  infoFossilFuelsUtilisation: PropTypes.string,
};

PopoverDemand.propTypes = {
  infoDemand: PropTypes.string,
};

PopoverWind.propTypes = {
  infoWind: PropTypes.string,
};

PopoverSolar.propTypes = {
  infoSolar: PropTypes.string,
};

PopoverNuclear.propTypes = {
  infoNuclear: PropTypes.string,
};

PopoverSurplus.propTypes = {
  infoSurplus: PropTypes.string,
};

PopoverShortfall.propTypes = {
  infoShortfall: PropTypes.string,
};

PopoverAverageCO2.propTypes = {
  infoAverageCO2: PropTypes.string,
};

PopoverEfficiencyScore.propTypes = {
  infoEfficiencyScore: PropTypes.string,
};

PopoverInitialStored.propTypes = {
  infoInitialStored: PropTypes.string,
};

PopoverFinalStored.propTypes = {
  infoFinalStored: PropTypes.string,
};

PopoverFossilFuels.propTypes = {
  infoFossilFuels: PropTypes.string,
};

PopoverTotalCost.propTypes = {
  infoTotalCostMillionPounds: PropTypes.string,
};

PopoverAverageCost.propTypes = {
  infoAverageCostMillionPerGWH: PropTypes.string,
};

PopoverTotalCO2.propTypes = {
  infoTotalCO2Tonnes: PropTypes.string,
};

PopoverStorageDiscrepancy.propTypes = {
  infoStorageDiscrepancy: PropTypes.string,
};
