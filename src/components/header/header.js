import React, { useEffect, useState } from "react";
import "../../css/components/header.css";
import Logo from "../../images/gts_logo.png";
import InfoPanel from "../infoPanel/infoPanel";
import Stack from "react-bootstrap/Stack";
import InfoIconModel from "../infoIconModel/infoIconModel";
import InfoPanelScrollingLogic from "./infoPanelScrollingLogic";
import EnableDisableInfoPanel from "./enableDisableInfoPanel";
import PropTypes from "prop-types";

function Header({ infoPanelData, models, dataIsSetTrigger, alterStateLandingPageActivated}) {
  const [infoPanelActivated, setInfoPanelActivated] = useState(false);

  const infoPanelScrollingLogicController = () => {
    InfoPanelScrollingLogic({ infoPanelActivated });
  };

  const changeStatePanelActivated = () => {

    if (infoPanelActivated == false) {

      // Info panel has been activated
      // Change State to true.
      setInfoPanelActivated(true);

    } else {

      // Info panel has been deactivated 
      // so change state to false
      setInfoPanelActivated(false);

    }

    // ?
    infoPanelScrollingLogicController();
  };

  useEffect(() => {

    // On page load check localstorage
    // Display 3d info icon if data exists.
    EnableDisableInfoPanel();

  }, [dataIsSetTrigger]);

  return (
    <div>
      {infoPanelActivated ? (
        <InfoPanel
          changeStatePanelActivated={changeStatePanelActivated}
          infoPanelData={infoPanelData}
        />
      ) : (

        
        <section
          className="section section-header"
        >
          {/* Place the code starting from section section-header in it's own component. */}

          <Stack direction="horizontal" gap={3}>
            <div>
              <img
                className="section-header_logo"
                href="https://www.cornucopia.co.uk/gts/"
                target="_blank"
                src={Logo}
                alt="gts-logo"
                onClick={alterStateLandingPageActivated}
              />
            </div>
            <div className="ms-auto"></div>
            <div />
            <div>
              <InfoIconModel
                changeStatePanelActivated={changeStatePanelActivated}
                models={models}
              />
            </div>
          </Stack>
        </section>
      )}
    </div>
  );
}

export default Header;

/* json proptype returning undfined */

Header.propTypes = {

  infoPanelData: PropTypes.oneOfType([
    PropTypes.json,
    PropTypes.number
  ]),
  models: PropTypes.oneOfType([
    PropTypes.json,
    PropTypes.number
  ]),

  alterStateLandingPageActivated: PropTypes.func.isRequired,

  dataIsSetTrigger: PropTypes.func.isRequired
};
