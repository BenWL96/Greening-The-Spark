const Api = async (input_game_id) => {

    try {
        let res = await fetch("/api/v1/sim-reports/" + input_game_id + "/details/", {
        method: "GET",
        });
        let json = await res.json();

        if (res.status === 200) {
            console.log(json);
            return json;
        }else {
            console.log("sorry but the fetch failed");
            return;
        }

        } catch (err) {
            console.log(err);
            return;
        } 
    }

export default Api;