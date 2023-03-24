const SimReportDetailApiFetch = async (input_game_id) => {
  try {
    let res = await fetch(
      "/api/v1/sim-reports/" + input_game_id + "/details/",
      {
        method: "GET",
      }
    );
    let json = await res.json();

    if (res.status === 200) {
      console.log(json);
      return json;
    } else {
      console.log("Game with Id " + input_game_id + " doesn't exist.");
      const json = 404;
      return json;
    }
  } catch (err) {
    console.log(err);
    const json = 500;
    return json;
  }
};

export default SimReportDetailApiFetch;
