import React from 'react';
import "../../css/components/infoPanel/infoPanelBodySectionMobile.css";


import Accordion from "react-bootstrap/Accordion";


function InfoPanelBodySectionMobileNoData() {


    return (
        <div className="info-panel_phone-body">
            <Accordion.Item eventKey={0} key={0}>
                <Accordion.Header>
                <p className="accordion_panel-title"></p>
                </Accordion.Header>
                <Accordion.Body className="accordion-body">
                <p className="accordion-body_title"></p>

                
                <p className="accordion-body_text"></p>
            
                <hr className="separator"/>


                <p className="accordion-body_title"></p>
        
                <p className="accordion-body_text"></p>

                <hr className="separator"/>

                
                <p className="accordion-body_title"></p>
        
                <p className="accordion-body_text"></p>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
}

export default InfoPanelBodySectionMobileNoData;