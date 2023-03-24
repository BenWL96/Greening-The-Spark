const infoPanelApiFetch = async () => {
  console.log("Fetching Info Panel Data");

  try {
    let res = await fetch("/api/v1/information-panel/", {
      method: "GET",
    });
    let data = await res.json();

    if (res.status === 200) {

      console.log(data);
      return data;

    } else {

      console.log("Sorry but the fetch failed");
      const data = 404;
      return data;

    }
  } catch (err) {

    console.log(err);
    const data = 500;
    return data;
    
  }
};

export default infoPanelApiFetch;
