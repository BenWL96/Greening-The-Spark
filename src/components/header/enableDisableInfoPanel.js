const EnableDisableInfoPanel = () => {


  setTimeout(() => {
    const infoPanelDataDoesNotExistBoolean = JSON.parse(localStorage.getItem("info_tab_data")) === null;

     //Fetch id of wrapper from infoIconModel
  const infoButton = document.getElementById("section_header_info_logo");

  if (infoPanelDataDoesNotExistBoolean === true) {
    console.log("Data doesn't exists; hide info button icon");
    infoButton.style.display = "none";
    infoButton.style.cursor = "not-allowed";
  } else {
    console.log("Data exists; show info button icon");
    infoButton.style.display = "block";
    infoButton.style.cursor = "allowed";
  }

  
}, 1000);


 


   
};

export default EnableDisableInfoPanel;
