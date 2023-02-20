function SplitJsonDataStringReturnArrayIntegers({ jsonData }) {
  let windDataValues = jsonData[0].wind_power_data_values.split(" ");
  var windDataValuesArray = windDataValues.map(Number);

  let solarDataValues = jsonData[0].solar_power_data_values.split(" ");
  var solarDataValuesArray = solarDataValues.map(Number);

  let demandDataValues = jsonData[0].demand_power_data_values.split(" ");
  var demandDataValuesArray = demandDataValues.map(Number);

  let FossilFuelsPowerDataValues =
    jsonData[0].fossil_fuels_power_data_values.split(" ");
  var fossilFuelsDataValuesarray = FossilFuelsPowerDataValues.map(Number);

  let nuclearPowerDataValues = jsonData[0].nuclear_power_data_values.split(" ");
  var nuclearPowerDataValuesArray = nuclearPowerDataValues.map(Number);

  let batteriesPowerDataValues =
    jsonData[0].batteries_power_data_values.split(" ");
  var batteriesPowerDataValuesArray = batteriesPowerDataValues.map(Number);

  let hydroPowerDataValues = jsonData[0].hydro_power_data_values.split(" ");
  var hydroPowerDataValuesArray = hydroPowerDataValues.map(Number);

  let gridSurplusDataValues = jsonData[0].grid_surplus_data_values.split(" ");
  var gridSurplusDataValuesArray = gridSurplusDataValues.map(Number);

  return {
    windDataValuesArray,
    solarDataValuesArray,
    demandDataValuesArray,
    fossilFuelsDataValuesarray,
    nuclearPowerDataValuesArray,
    batteriesPowerDataValuesArray,
    hydroPowerDataValuesArray,
    gridSurplusDataValuesArray,
  };
}

export default SplitJsonDataStringReturnArrayIntegers;
