const EnableDisableInfoPanel = () => {
    const doesInfoPanelDataExistBoolean = JSON.parse(localStorage.getItem("info_tab_data")) === null;
    const infoButton = document.getElementById("section_header_info_logo");

    if (doesInfoPanelDataExistBoolean === true ) {

        infoButton.style.display = "none";
    } else {
        infoButton.style.display = "block";
    }
}

export default EnableDisableInfoPanel;