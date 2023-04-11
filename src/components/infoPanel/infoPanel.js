import React from "react";
import "../../css/components/infoPanel.css";

import PropTypes from "prop-types";

import InfoPanelTitleSection from "./infoPanelTitleSection";
import InfoPanelBodySectionDesktop from "./infoPanelBodySectionDesktop";
import InfoPanelBodySectionMobile from "./infoPanelBodySectionMobile";
import InfoPanelFooterSection from "./infoPanelFooterSection";


function InfoPanel({ changeStatePanelActivated, infoPanelData }) {
  //map infoPanelData logic so that information is added to each tab
  //and so that the eventKey matches between the question panel
  //and the answer panel


  return (
    <div className="info-panel" data-testid="info_wrapper">

      {/* Height of Title + Body + Footer = 100vh */}
      <InfoPanelTitleSection changeStatePanelActivated={changeStatePanelActivated}/>

      {/* display change at 768px page width */}
      <InfoPanelBodySectionDesktop infoPanelData={infoPanelData} />

      {/* display change at 768px page width */}
      <InfoPanelBodySectionMobile infoPanelData={infoPanelData} />

      <InfoPanelFooterSection/>
    </div>
  );
}

export default InfoPanel;

InfoPanel.propTypes = {
  changeStatePanelActivated: PropTypes.func.isRequired,
  infoPanelData: PropTypes.json,
};
