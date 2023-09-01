export const AssignInfoPanelDataToLocalStorage = (data, changeStateInfoPanelData) => {
    

    if (data) {
      
      console.log("Data has been fetched successfully");
      console.log("Set data to localstorage");

      localStorage.setItem("info_tab_data", JSON.stringify(data));

      console.log("Data has now been set to state");
      changeStateInfoPanelData(data);

      //Pass the information to the header and body
    } else {
      console.log("Something went wrong with the fetch, please try again");
    }
  };