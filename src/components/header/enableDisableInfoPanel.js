const EnableDisableInfoPanel = () => {

  const doesInfoPanelDataExistBoolean =
    JSON.parse(localStorage.getItem("info_tab_data")) === null;
  
    //Fetch id of wrapper from infoIconModel
  const infoButton = document.getElementById("section_header_info_logo");

  if (doesInfoPanelDataExistBoolean === true) {
    console.log("Data doesn't exists; hide info button icon");
    infoButton.style.display = "none";
  } else {
    console.log("Data exists; show info button icon");
    infoButton.style.display = "block";
  }
};

export default EnableDisableInfoPanel;
