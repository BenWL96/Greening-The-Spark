const ThreeModelsApiFetch = async () => {
  console.log("Fetching Info Panel Data");

  try {
    let res = await fetch("/api/v1/models/", {
      method: "GET",
    });
    let data = await res.json();

    if (res.status === 200) {
      console.log(data);

      //set local storage so fetch request doesn't
      //always
      return data;
    } else {
      console.log("Sorry but the fetch failed");
      return;
    }
  } catch (err) {
    console.log(err);
    return;
  }
};

export default ThreeModelsApiFetch;
