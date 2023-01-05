import {React} from 'react';
import Popover from 'react-bootstrap/Popover';
import '../../css/popovers/popovers.css';



//Put these popovers in another file and import them.





export const PopoverDemand = (jsonData) => {

   const infoDemand = jsonData[1].demand_info;




    return(
    <Popover id="popover_demand-basic" className="popover_tile">
        <Popover.Header >
            <p className="popover_header">Demand</p>

            
        </Popover.Header>
        <Popover.Body>
            {infoDemand}
        </Popover.Body>
    </Popover>
    )
};

export const PopoverWind = (jsonData) => {

    const infoWind = jsonData[1].wind_info;

    return (

    <Popover id="popover_wind-basic" className="popover_tile" >
        <Popover.Header >
            <p className="popover_header">Wind</p>
        
        </Popover.Header>
        <Popover.Body>
            {infoWind}
        </Popover.Body>
    </Popover>
  )
};

export const PopoverSolar = (jsonData) => {

    const infoSolar = jsonData[1].solar_info;

    return (
    <Popover id="popover_solar-basic" className="popover_tile">
        <Popover.Header >
            <p className="popover_header">Solar</p>
        </Popover.Header>
        <Popover.Body>
            {infoSolar}
        </Popover.Body>
    </Popover>
  );
}

export const PopoverFossilFuels = (jsonData) => {

    const infoFossilFuels = jsonData[1].fossil_fuels_info;
   
    return (
        <Popover id="popoverFossil_fuels-basic" className="popover_tile">
            <Popover.Header >
                <p className="popover_header">Fossil Fuels</p>
             
            </Popover.Header>
            <Popover.Body>
                {infoFossilFuels}
            </Popover.Body>
        </Popover>
    );
}


export const PopoverNuclear = (jsonData) => {

    const infoNuclear = jsonData[1].nuclear_info;

    return(
        <Popover id="popover_nuclear-basic" className="popover_tile">
            <Popover.Header >
                <p className="popover_header">Nuclear</p>
            
            </Popover.Header>
            <Popover.Body>
                {infoNuclear}
            </Popover.Body>
        </Popover>
    );
}

export const PopoverSurplus = (jsonData) => {

    const infoSurplus = jsonData[1].surplus_info;

    return(
        <Popover id="popover_surplus-basic" className="popover_tile">
            <Popover.Header >
                <p className="popover_header">Surplus</p>
            
            </Popover.Header>
            <Popover.Body>
                {infoSurplus}
            </Popover.Body>
        </Popover>
    );
}
export const PopoverShortfall = (jsonData) => {
    
    const infoShortfall = jsonData[1].shortfall_info

    return(
        <Popover id="popover_shortfall-basic" className="popover_tile">
            <Popover.Header >
                <p className="popover_header">Shortfall</p>
            
            </Popover.Header>
            <Popover.Body>
                {infoShortfall}
            </Popover.Body>
        </Popover>
    );
}

export const PopoverInitialStored = (jsonData) => {

    const infoInitialStored = jsonData[1].initial_stored_info;
    return(

        <Popover id="popover_initial_stored-basic" className="popover_tile">
            <Popover.Header >
                <p className="popover_header">Initial Stored</p>
            
            </Popover.Header>
            <Popover.Body>
                {infoInitialStored}
            </Popover.Body>
        </Popover>
    );
}
export const PopoverFinalStored = (jsonData) => {

    const infoFinalStored = jsonData[1].final_stored_info;
    
    return (
        <Popover id="popover_final_stored-basic" className="popover_tile">
            <Popover.Header >
                <p className="popover_header">Final Stored</p>
         
            </Popover.Header>
            <Popover.Body>
                {infoFinalStored}
            </Popover.Body>
        </Popover>
    );
}

export const PopoverStorageDiscrepancy = (jsonData) => {

    const infoStorageDiscrepancy = jsonData[1].storage_discrepancy_info;
    
    return(
        <Popover id="popover_storage_discrepancy-basic" className="popover_tile">
            <Popover.Header >
                <p className="popover_header">Storage Discrepancy</p>
         
            </Popover.Header>
            <Popover.Body>
                {infoStorageDiscrepancy}
            </Popover.Body>
        </Popover>
    );
}


export const PopoverEfficiencyScore = (jsonData) => {

    const infoEfficiencyScore = jsonData[1].efficiency_score_info;
    
    return(
        <Popover id="popover_efficiency_score-basic" className="popover_tile">
            <Popover.Header >
                <p className="popover_header">Efficiency Score</p>
          
            </Popover.Header>
            <Popover.Body>
                {infoEfficiencyScore}
            </Popover.Body>
        </Popover>
    );
}

export const PopoverTotalCO2 = (jsonData) => {

    const infoTotalCO2Tonnes = jsonData[1].total_CO2_tonnes_info;

    return(
        <Popover id="popover_total_CO2-basic" className="popover_tile">
            <Popover.Header >
                <p className="popover_header">Total CO2</p>
          
            </Popover.Header>
            <Popover.Body>
                {infoTotalCO2Tonnes}
            </Popover.Body>
        </Popover>
    );
}


export const PopoverTotalCost = (jsonData) => {

    const infoTotalCostMillionPounds = jsonData[1].total_cost_million_pounds_info;
    
    return(
        <Popover id="popover_total_cost-basic" className="popover_tile">
            <Popover.Header >
                <p className="popover_header">Total Cost</p>
            
            </Popover.Header>
            <Popover.Body>
                {infoTotalCostMillionPounds}
            </Popover.Body>
        </Popover>
    );
}

export const PopoverAverageCost = (jsonData) => {

    const infoAverageCostMillionPerGWH = jsonData[1].average_cost_million_pounds_per_gwh_info;
   
    return(
        <Popover id="popover_average_cost-basic" className="popover_tile">
            <Popover.Header >
                <p className="popover_header">Average Cost</p>
        
            </Popover.Header>
            <Popover.Body>
                {infoAverageCostMillionPerGWH}
            </Popover.Body>
        </Popover>
    );
}


export const PopoverAverageCO2 = (jsonData) => {

    const infoAverageCO2 = jsonData[1].average_CO2_tonnes_per_gwh_info;

    return (
        <Popover id="popover_average_CO2-basic" className="popover_tile">
            <Popover.Header >
                <p className="popover_header">Average CO2</p>
          
            </Popover.Header>
            <Popover.Body>
                <p className="popover_body">
                    {infoAverageCO2}
                </p>
            </Popover.Body>
        </Popover>
    );
}