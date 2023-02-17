import datetime

date = datetime.datetime.today().strftime('%Y-%m-%d')
time = datetime.datetime.today().strftime('%H:%M:%S')

working_post_data = {

    "date": date,
    "time": time,

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

    "surplus_comment": 23,
    "shortfall_comment": 16,
    "storage_discrepancy_comment": 1,
    "efficiency_score_comment": 51,
    "average_CO2_comment": 1,
    "average_cost_comment": 51,

    "efficiency_spark": "red",
    "economy_spark": "red",
    "eco_friendliness_spark": "red",

    "wind_power_data_values":
        "-54 41 24 -15 61 54 41 24 15 61 54 41 "
        "24 15 61 54 41 24 15 61 54 41 24 15 61",
    "solar_power_data_values":
        "41 24 15 61 54 41 24 15 61 54 41 24 15 "
        "61 54 41 24 15 61 54 41 24 15 61 54",
    "demand_power_data_values":
        "24 15 61 54 41 24 15 61 54 41 24 15 61 "
        "54 41 24 15 61 54 41 24 15 61 54 41",

    "fossil_fuels_power_data_values":
        "15 61 54 41 24 15 61 54 41 24 15 61 54 "
        "41 24 15 61 54 41 24 15 61 54 41 24",
    "nuclear_power_data_values":
        "61 54 41 24 15 61 54 41 24 15 61 54 41 "
        "24 15 61 54 41 24 15 61 54 41 24 15",

    "batteries_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "hydro_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "grid_surplus_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61"
}

failing_post_data = {

    "date": date + "d",
    "time": time,

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

    "surplus_comment": 23,
    "shortfall_comment": 16,
    "storage_discrepancy_comment": 1,
    "efficiency_score_comment": 51,
    "average_CO2_comment": 1,
    "average_cost_comment": 51,

    "efficiency_spark": "red",
    "economy_spark": "red",
    "eco_friendliness_spark": "red",

    "wind_power_data_values":
        "-54 41 24 -15 61 54 41 24 15 61 54 41 "
        "24 15 61 54 41 24 15 61 54 41 24 15 61",
    "solar_power_data_values":
        "41 24 15 61 54 41 24 15 61 54 41 24 15 "
        "61 54 41 24 15 61 54 41 24 15 61 54",
    "demand_power_data_values":
        "24 15 61 54 41 24 15 61 54 41 24 15 61 "
        "54 41 24 15 61 54 41 24 15 61 54 41",

    "fossil_fuels_power_data_values":
        "15 61 54 41 24 15 61 54 41 24 15 61 54 "
        "41 24 15 61 54 41 24 15 61 54 41 24",
    "nuclear_power_data_values":
        "61 54 41 24 15 61 54 41 24 15 61 54 41 "
        "24 15 61 54 41 24 15 61 54 41 24 15",

    "batteries_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "hydro_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "grid_surplus_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61"
}


malicious_post_data = {

    "date": date,
    "time": time,

    "difficulty": "easy",

    "demand": -23,
    "wind": -23,
    "solar": 42,
    "fossil_fuels": -62,
    "nuclear": 64,

    "fossil_fuels_utilisation_percentage": 0,
    "nuclear_fuels_utilisation_percentage": 99,

    "surplus": "<script>alert('hello')</script>",
    "shortfall": 16,
    "initial_stored": 45,
    "final_stored": 25,
    "storage_discrepancy": 1,
    "efficiency_score": 51,

    "total_CO2_tonnes": 62,
    "total_cost_million_pounds": 54,
    "average_CO2_tonnes_per_gwh": 62,
    "average_cost_million_pounds_per_gwh": 72,

    "surplus_comment": 23,
    "shortfall_comment": 16,
    "storage_discrepancy_comment": 1,
    "efficiency_score_comment": 51,
    "average_CO2_comment": 1,
    "average_cost_comment": 51,

    "efficiency_spark": "red",
    "economy_spark": "red",
    "eco_friendliness_spark": "red",

    "wind_power_data_values":
        "-54 '<script>alert('hello')</script>' "
        "24 -15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61 54 41 24 15 61",
    "solar_power_data_values":
        "41 24 15 61 54 41 24 15 61 54 41 24 15 "
        "61 '<script>alert('hello')</script>' 41 24 15 61 54 41 24 15 61 54",
    "demand_power_data_values":
        "24 15 61 54 41 24 15 61 54 41 24 15 61 "
        "54 41 24 15 61 54 41 24 15 61 54 41",

    "fossil_fuels_power_data_values":
        "15 61 54 41 24 15 61 54 41 24 15 61 54 "
        "41 24 15 61 54 41 24 15 61 54 41 24",
    "nuclear_power_data_values":
        "61 54 41 24 15 61 54 41 24 15 61 54 41 "
        "24 15 61 54 41 24 15 61 54 41 24 15",

    "batteries_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "hydro_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "grid_surplus_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61"
}

time_change = datetime.timedelta(minutes=75)
new_time = datetime.datetime.today() + time_change
time_2 = new_time.strftime('%H:%M:%S')

post_data_fossil_nuclear_at_100 = {

    "date": date,
    "time": time_2,

    "difficulty": "easy",

    "demand": -23,
    "wind": -23,
    "solar": 42,
    "fossil_fuels": -62,
    "nuclear": 64,

    "fossil_fuels_utilisation_percentage": 100,
    "nuclear_fuels_utilisation_percentage": 100,

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

    "surplus_comment": 23,
    "shortfall_comment": 16,
    "storage_discrepancy_comment": 1,
    "efficiency_score_comment": 51,
    "average_CO2_comment": 1,
    "average_cost_comment": 51,

    "efficiency_spark": "red",
    "economy_spark": "red",
    "eco_friendliness_spark": "red",

    "wind_power_data_values":
        "-54 41 24 -15 61 54 41 24 15 61 54 41 "
        "24 15 61 54 41 24 15 61 54 41 24 15 61",
    "solar_power_data_values":
        "41 24 15 61 54 41 24 15 61 54 41 24 15 "
        "61 54 41 24 15 61 54 41 24 15 61 54",
    "demand_power_data_values":
        "24 15 61 54 41 24 15 61 54 41 24 15 61 "
        "54 41 24 15 61 54 41 24 15 61 54 41",

    "fossil_fuels_power_data_values":
        "15 61 54 41 24 15 61 54 41 24 15 61 54 "
        "41 24 15 61 54 41 24 15 61 54 41 24",
    "nuclear_power_data_values":
        "61 54 41 24 15 61 54 41 24 15 61 54 41 "
        "24 15 61 54 41 24 15 61 54 41 24 15",

    "batteries_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "hydro_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "grid_surplus_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61"
}


time_change = datetime.timedelta(minutes=75)
new_time_2 = new_time + time_change
time_3 = new_time_2.strftime('%H:%M:%S')

post_data_fossil_nuclear_at_0 = {

    "date": date,
    "time": time_3,

    "difficulty": "easy",

    "demand": -23,
    "wind": -23,
    "solar": 42,
    "fossil_fuels": -62,
    "nuclear": 64,

    "fossil_fuels_utilisation_percentage": 100,
    "nuclear_fuels_utilisation_percentage": 100,

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

    "surplus_comment": 23,
    "shortfall_comment": 16,
    "storage_discrepancy_comment": 1,
    "efficiency_score_comment": 51,
    "average_CO2_comment": 1,
    "average_cost_comment": 51,

    "efficiency_spark": "red",
    "economy_spark": "red",
    "eco_friendliness_spark": "red",

    "wind_power_data_values":
        "-54 41 24 -15 61 54 41 24 15 61 54 41 "
        "24 15 61 54 41 24 15 61 54 41 24 15 61",
    "solar_power_data_values":
        "41 24 15 61 54 41 24 15 61 54 41 24 15 "
        "61 54 41 24 15 61 54 41 24 15 61 54",
    "demand_power_data_values":
        "24 15 61 54 41 24 15 61 54 41 24 15 61 "
        "54 41 24 15 61 54 41 24 15 61 54 41",

    "fossil_fuels_power_data_values":
        "15 61 54 41 24 15 61 54 41 24 15 61 54 "
        "41 24 15 61 54 41 24 15 61 54 41 24",
    "nuclear_power_data_values":
        "61 54 41 24 15 61 54 41 24 15 61 54 41 "
        "24 15 61 54 41 24 15 61 54 41 24 15",

    "batteries_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "hydro_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "grid_surplus_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61"
}


post_data_fossil_nuclear_at_minus_one = {

    "date": date,
    "time": time,

    "difficulty": "easy",

    "demand": -23,
    "wind": -23,
    "solar": 42,
    "fossil_fuels": -62,
    "nuclear": 64,

    "fossil_fuels_utilisation_percentage": -1,
    "nuclear_fuels_utilisation_percentage": -1,

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

    "surplus_comment": 23,
    "shortfall_comment": 16,
    "storage_discrepancy_comment": 1,
    "efficiency_score_comment": 51,
    "average_CO2_comment": 1,
    "average_cost_comment": 51,

    "efficiency_spark": "red",
    "economy_spark": "red",
    "eco_friendliness_spark": "red",

    "wind_power_data_values":
        "-54 41 24 -15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "solar_power_data_values":
        "41 24 15 61 54 41 24 15 61 54 41 24 15 "
        "61 54 41 24 15 61 54 41 24 15 61 54",
    "demand_power_data_values":
        "24 15 61 54 41 24 15 61 54 41 24 15 61 "
        "54 41 24 15 61 54 41 24 15 61 54 41",

    "fossil_fuels_power_data_values":
        "15 61 54 41 24 15 61 54 41 24 15 61 54 "
        "41 24 15 61 54 41 24 15 61 54 41 24",
    "nuclear_power_data_values":
        "61 54 41 24 15 61 54 41 24 15 61 54 41 "
        "24 15 61 54 41 24 15 61 54 41 24 15",

    "batteries_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "hydro_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "grid_surplus_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 15 "
        "61 54 41 24 15 61 54 41 24 15 61"
}

post_data_fossil_nuclear_at_101 = {

    "date": date,
    "time": time,

    "difficulty": "easy",

    "demand": -23,
    "wind": -23,
    "solar": 42,
    "fossil_fuels": -62,
    "nuclear": 64,

    "fossil_fuels_utilisation_percentage": -1,
    "nuclear_fuels_utilisation_percentage": -1,

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


    "surplus_comment": 23,
    "shortfall_comment": 16,
    "storage_discrepancy_comment": 1,
    "efficiency_score_comment": 51,
    "average_CO2_comment": 1,
    "average_cost_comment": 51,

    "efficiency_spark": "red",
    "economy_spark": "red",
    "eco_friendliness_spark": "red",

    "wind_power_data_values":
        "-54 41 24 -15 61 54 41 24 15 61 54 41 "
        "24 15 61 54 41 24 15 61 54 41 24 15 61",
    "solar_power_data_values":
        "41 24 15 61 54 41 24 15 61 54 41 24 15 "
        "61 54 41 24 15 61 54 41 24 15 61 54",
    "demand_power_data_values":
        "24 15 61 54 41 24 15 61 54 41 24 15 61 "
        "54 41 24 15 61 54 41 24 15 61 54 41",

    "fossil_fuels_power_data_values":
        "15 61 54 41 24 15 61 54 41 24 15 61 54 "
        "41 24 15 61 54 41 24 15 61 54 41 24",
    "nuclear_power_data_values":
        "61 54 41 24 15 61 54 41 24 15 61 54 41 "
        "24 15 61 54 41 24 15 61 54 41 24 15",

    "batteries_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "hydro_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "grid_surplus_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61"
}

time_change = datetime.timedelta(minutes=75)
new_time_3 = new_time_2 + time_change
time_4 = new_time_3.strftime('%H:%M:%S')


working_post_data_fields_rearranged = {

    "date": date,
    "time": time_4,

    "difficulty": "easy",

    "fossil_fuels_utilisation_percentage": 0,
    "nuclear_fuels_utilisation_percentage": 99,

    "surplus": 23,
    "shortfall": 16,
    "initial_stored": 45,
    "final_stored": 25,
    "storage_discrepancy": 1,
    "efficiency_score": 51,

    "demand": -23,
    "wind": -23,
    "solar": 42,
    "fossil_fuels": -62,
    "nuclear": 64,

    "total_CO2_tonnes": 62,
    "total_cost_million_pounds": 54,
    "average_CO2_tonnes_per_gwh": 62,
    "average_cost_million_pounds_per_gwh": 72,

    "efficiency_spark": "red",
    "economy_spark": "red",
    "eco_friendliness_spark": "red",

    "wind_power_data_values":
        "-54 41 24 -15 61 54 41 24 15 61 54 41 "
        "24 15 61 54 41 24 15 61 54 41 24 15 61",
    "solar_power_data_values":
        "41 24 15 61 54 41 24 15 61 54 41 24 15 "
        "61 54 41 24 15 61 54 41 24 15 61 54",
    "demand_power_data_values":
        "24 15 61 54 41 24 15 61 54 41 24 15 61 "
        "54 41 24 15 61 54 41 24 15 61 54 41",

    "fossil_fuels_power_data_values":
        "15 61 54 41 24 15 61 54 41 24 15 61 54 "
        "41 24 15 61 54 41 24 15 61 54 41 24",
    "nuclear_power_data_values":
        "61 54 41 24 15 61 54 41 24 15 61 54 41 "
        "24 15 61 54 41 24 15 61 54 41 24 15",

    "batteries_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "hydro_power_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",
    "grid_surplus_data_values":
        "54 41 24 15 61 54 41 24 15 61 54 41 24 "
        "15 61 54 41 24 15 61 54 41 24 15 61",

    "surplus_comment": 23,
    "shortfall_comment": 16,
    "storage_discrepancy_comment": 1,
    "efficiency_score_comment": 51,
    "average_CO2_comment": 1,
    "average_cost_comment": 51,
}



info_data = {
    "id": 1,
    "question": "Info Panel Q1",
    "the_simple_answer": "answer 1",
    "the_gts_answer": "answer 2",
    "the_complex_answer": "answer 3"

}

info_data_2 = {
    "id": 2,
    "question": "Info Panel Q2",
    "the_simple_answer": "answer 1",
    "the_gts_answer": "answer 2",
    "the_complex_answer": "answer 3"

}


questionmark_data = {
    "demand_info": "relevant info",
    "wind_info": "relevant info",
    "solar_info": "relevant info",
    "fossil_fuels_info": "relevant info",
    "nuclear_info": "relevant info",
    "fossil_fuels_utilisation_percentage_info": "relevant info",
    "nuclear_fuels_utilisation_percentage_info": "relevant info",
    "surplus_info": "relevant info",
    "shortfall_info": "relevant info",
    "initial_stored_info": "relevant info",
    "final_stored_info": "relevant info",
    "storage_discrepancy_info": "relevant info",
    "efficiency_score_info": "relevant info",
    "total_CO2_tonnes_info": "relevant info",
    "total_cost_million_pounds_info": "relevant info",
    "average_CO2_tonnes_per_gwh_info": "relevant info",
    "average_cost_million_pounds_per_gwh_info": "relevant info"
}