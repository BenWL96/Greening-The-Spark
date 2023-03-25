import React, { useEffect, useState } from "react";
import "../../css/components/header.css";
import Logo from "../../images/gts_logo.png";
import InfoPanel from "../infoPanel/infoPanel";
import Stack from "react-bootstrap/Stack";
import InfoIconModel from "../infoIconModel/infoIconModel";
import InfoPanelScrollingLogic from "./infoPanelScrollingLogic";
import EnableDisableInfoPanel from "./enableDisableInfoPanel";
import PropTypes from "prop-types";

function Header({ infoPanelData, models, dataIsSetTrigger}) {
  const [infoPanelActivated, setInfoPanelActivated] = useState(false);

  const infoPanelScrollingLogicController = () => {
    InfoPanelScrollingLogic({ infoPanelActivated });
  };

  const changeStatePanelActivated = () => {
    if (infoPanelActivated == false) {
      console.log("info panel has been activated");
      console.log("so change state to true");
      setInfoPanelActivated(true);
    } else {
      console.log("info panel has been activated");
      console.log("so change state to false");
      setInfoPanelActivated(false);
    }

    infoPanelScrollingLogicController();
  };

  useEffect(() => {
    console.log("EnableDisableInfoPanel triggered");
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
          data-testid="section_header"
        >
          <Stack direction="horizontal" gap={3}>
            <div>
              <img
                className="section-header_logo"
                href="https://www.cornucopia.co.uk/gts/"
                target="_blank"
                data-testid="section_header_logo"
                src={Logo}
                alt="gts-logo"
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

  dataIsSetTrigger: PropTypes.func.isRequired
};
