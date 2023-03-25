import React from "react";
import "../../css/components/infoPanel.css";

import X from "../../images/Black-X.png";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Stack from "react-bootstrap/Stack";


import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";

function InfoPanel({ changeStatePanelActivated, infoPanelData }) {
  //map infoPanelData logic so that information is added to each tab
  //and so that the eventKey matches between the question panel
  //and the answer panel

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
        className="desktop-body_column2_tab-pane"
      >
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

  const mapAccordionItems = (infoData) => {
    return infoData.map((data) => (
      <Accordion.Item eventKey={data.id} key={data.the_simple_answer}>
        <Accordion.Header>
          <p className="accordion_panel-title">{data.question}</p>
        </Accordion.Header>
        <Accordion.Body className="accordion-body">
          <p className="accordion-body_title">{data.question}?</p>

          <p className="accordion-body_text">{data.the_simple_answer}</p>

          <p className="accordion-body_title">How does GTS approach this?</p>

          <p className="accordion-body_text">{data.the_gts_answer}</p>

          <p className="accordion-body_title">What's Happening In Detail?</p>

          <p className="accordion-body_text">{data.the_complex_answer}</p>
        </Accordion.Body>
      </Accordion.Item>
    ));
  };

  return (
    <div className="info-panel" data-testid="info_wrapper">
      <div className="info-panel_title-section">
           <img
                className="info-panel_exit-button"
                data-testid="info_wrapper_exit_img"
                src={X}
                onClick={changeStatePanelActivated}
              />
           
      </div>

      {/* Split these into two separate componenets ?? */}

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

      <div className="info-panel_phone-body">
        <Accordion>{mapAccordionItems(infoPanelData)}</Accordion>
      </div>

      <div className="info-panel-bottom">
      </div>
    </div>
  );
}

export default InfoPanel;

InfoPanel.propTypes = {
  changeStatePanelActivated: PropTypes.func.isRequired,

  infoPanelData: PropTypes.json,
};
