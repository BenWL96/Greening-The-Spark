import React from 'react';

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import "../../css/components/infoPanel/infoPanelBodySectionDesktop.css";


function InfoPanelBodySectionDesktopNoData() {



    return (
        <div className="info-panel_desktop-body">
            <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
            <Row>
                <Col
                md={3}
                style={{
                    backgroundColor: "black",
                    height: "76vh",
                    overflow: "scroll",
                    borderRadius: "25px",
                }}
                className="desktop-body_column1"
                >
                <Nav variant="pills" className="flex-column">
                <Nav.Item key={0}>
                <Nav.Link eventKey={0}>
                <p className="desktop-body_column1_panel-text"></p>
                </Nav.Link>
            </Nav.Item>
                </Nav>
                </Col>
                <Col
                md={9}
                className="desktop-body_column2"
                style={{
                    height: "76vh",
                    overflow: "scroll",
                    position: "top",
                    borderRadius: "25px",
                }}
                >
                <Tab.Content>
                    {/* //mapNavItemAnswerDesktop goes here !! */}

                    <Tab.Pane
                eventKey={0}
                key={0}
                className="desktop-body_column2_tab-pane">
                <p className="desktop-body_column2_panel-title"></p>
                <p className="desktop-body_column2_panel-text">
       

                </p>
                <hr className="separator"/>
                <p className="desktop-body_column2_panel-title">
           
                </p>
                <p className="desktop-body_column2_panel-text">
               
                </p>
                <hr className="separator"/>
                <p className="desktop-body_column2_panel-title">
            
                </p>
                <p className="desktop-body_column2_panel-text">
            
                </p>
            </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
        </div>
    );
}

export default InfoPanelBodySectionDesktopNoData;