const DATA = {
    "game_id": 5,
    "date": '2022-10-12',
    "time": '12:47:33',
    "difficulty": "easy",
    "demand": -23,
    "wind": -23,
    "solar": 42,
    "fossil_fuels": -62,
    "nuclear": 64,
    "fossil_fuels_utilisation_percentage": 0,
    "nuclear_fuels_utilisation_percentage": 99,
    "surplus": 23,
    "shortfall": 16,
    "initial_stored": 45,
    "final_stored": 25,
    "storage_discrepancy": 1,
    "efficiency_score": 51,
    "total_CO2_tonnes": 62,
    "total_cost_million_pounds": 54,
    "average_CO2_tonnes_per_gwh": 62,
    "average_cost_million_pounds_per_gwh": 72,
    "average_CO2_score": 0,
    "average_cost_score": 0,
    "surplus_comment": "23",
    "shortfall_comment": "16",
    "storage_discrepancy_comment": "1",
    "efficiency_score_comment": "51",
    "average_CO2_comment": "1",
    "average_cost_comment": "51",
    "efficiency_spark": "red",
    "economy_spark": "red",
    "eco_friendliness_spark": "red",
    "wind_power_data_values": "-54 41 24 -15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
    "solar_power_data_values": "41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54",
    "demand_power_data_values": "24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41",
    "fossil_fuels_power_data_values": "15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24",
    "nuclear_power_data_values": "61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15",
    "batteries_power_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
    "hydro_power_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
    "grid_surplus_data_values": "54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61"
};

export default DATA;


//global.fetch = jest.fn(() => Promise.resolve({
    //json: () => Promise.resolve(DATA)
//}));