import React from 'react';
import "../../css/components/infoPanel/infoPanelBodySectionMobile.css";


import Accordion from "react-bootstrap/Accordion";


function InfoPanelBodySectionMobile({infoPanelData}) {

    const mapAccordionItems = (infoPanelData) => {

        return infoPanelData.map((data) => (

            <Accordion.Item eventKey={data.id} key={data.the_simple_answer}>
                <Accordion.Header>
                <p className="accordion_panel-title">{data.question}</p>
                </Accordion.Header>
                <Accordion.Body className="accordion-body">
                <p className="accordion-body_title">{data.question}?</p>

                
                <p className="accordion-body_text">{data.the_simple_answer}</p>
            
                <hr className="separator"/>


                <p className="accordion-body_title">How does GTS approach this?</p>
        
                <p className="accordion-body_text">{data.the_gts_answer}</p>

                <hr className="separator"/>

                
                <p className="accordion-body_title">What's Happening In Detail?</p>
        
                <p className="accordion-body_text">{data.the_complex_answer}</p>
                </Accordion.Body>
            </Accordion.Item>
            ));
      };


    return (
        <div className="info-panel_phone-body">
            <Accordion>{mapAccordionItems(infoPanelData)}</Accordion>
        </div>
    );
}

export default InfoPanelBodySectionMobile;