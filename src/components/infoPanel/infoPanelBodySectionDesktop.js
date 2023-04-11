import React from 'react';

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import "../../css/components/infoPanel/infoPanelBodySectionDesktop.css";


function InfoPanelBodySectionDesktop({infoPanelData}) {

    const firstInfoPanel = infoPanelData[0].id.toString();

    const mapNavItemQuestionDesktop = (infoData) => {

        return infoData.map((data) => (

            <Nav.Item key={data.id}>
                <Nav.Link eventKey={data.id}>
                <p className="desktop-body_column1_panel-text">{data.question}</p>
                </Nav.Link>
            </Nav.Item>

        ));

    };

    const mapNavItemAnswerDesktop = (infoData) => {

        return infoData.map((data) => (

            <Tab.Pane
                eventKey={data.id}
                key={data.question}
                className="desktop-body_column2_tab-pane">
                <p className="desktop-body_column2_panel-title">{data.question}</p>
                <p className="desktop-body_column2_panel-text">
                {data.the_simple_answer}
                {data.the_complex_answer}
                {data.the_gts_answer}
                </p>
                <p className="desktop-body_column2_panel-title">
                How does GTS approach this?
                </p>
                <p className="desktop-body_column2_panel-text">
                {data.the_simple_answer}
                {data.the_complex_answer}
                {data.the_gts_answer}
                </p>
                <p className="desktop-body_column2_panel-title">
                What's happening in detail{" "}
                </p>
                <p className="desktop-body_column2_panel-text">
                {data.the_simple_answer}
                {data.the_complex_answer}
                {data.the_gts_answer}
                </p>
            </Tab.Pane>
        ));
    };


    return (
        <div className="info-panel_desktop-body">
            <Tab.Container id="left-tabs-example" defaultActiveKey={firstInfoPanel}>
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
                    {mapNavItemQuestionDesktop(infoPanelData)}
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

                    {mapNavItemAnswerDesktop(infoPanelData)}
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
        </div>
    );
}

export default InfoPanelBodySectionDesktop;