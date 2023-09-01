import React from 'react';
import X from "../../images/Black-X.png";
import "../../css/components/infoPanel/infoPanelTitleSection.css";

function InfoPanelTitleSection({changeStatePanelActivated}) {
    return (
        <div className="info-panel_title-section">
           <img
                className="info-panel_exit-button"
                data-testid="info_wrapper_exit_img"
                src={X}
                onClick={changeStatePanelActivated}
                
              />
           
      </div>
    );
}

export default InfoPanelTitleSection;