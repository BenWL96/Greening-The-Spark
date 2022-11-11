import React from 'react';
import '../css/components/infoTab.css';

import X from "../images/Black-X.png";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


import Accordion from 'react-bootstrap/Accordion';


function InfoTab({changeStatePanelActivated}) {

  return (

    <div className="info_wrapper" data-testid="info_wrapper">

      <div className="info_wrapper_nest_title">
      
        <br />
        <Row>
          <Col xs={9} sm={9} md={9}>
            <p className="info_wrapper_title">Info</p>
          </Col>
          <Col xs={1} sm={1} md={1}>
          <img className="info_wrapper_exit_img" data-testid="info_wrapper_exit_img" src={X} onClick={changeStatePanelActivated}/>
          </Col>
        </Row>
        <br />
      </div>
        <div className="info_wrapper_table_wrapper">

        <Tab.Container className="info_wrapper_table_wrapper_container" id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col md={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <p className="info_wrapper_table_wrapper_container_tab_col_1_link">
                    Where does our electricity come from?
                    </p>

                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <p className="info_wrapper_table_wrapper_container_tab_col_1_link">
                      How does electricity get to where it’s needed?
                    </p>
                      
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <p className="info_wrapper_table_wrapper_container_tab_col_1_link">
                      How are electricity supply and demand matched?
                    </p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                  <p className="info_wrapper_table_wrapper_container_tab_col_1_link">
                  How much of world energy consumption is electric?
                    </p>
                    
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">
                  <p className="info_wrapper_table_wrapper_container_tab_col_1_link">
                    How much electric power comes from each kind of source?
                    </p>
                    
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">
                    <p className="info_wrapper_table_wrapper_container_tab_col_1_link">
                    What is green electricity and how green is it?
                    </p>
                    
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh">
                  <p className="info_wrapper_table_wrapper_container_tab_col_1_link">
                  What are the relative costs of each type, both financially and in terms of environmental impact?
                    </p>
                   
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="eighth">
                  <p className="info_wrapper_table_wrapper_container_tab_col_1_link">
                  What types of electrical energy storage are there, how much is needed and what are their costs?
                    </p>
                    
                    </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={9} className="info_wrapper_table_wrapper_container_col_2">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p className="info_wrapper_table_wrapper_container_col_2_title">Where does our electricity come from?</p>
                  <p className="info_wrapper_table_wrapper_container_col_2_text">

                    
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <p className="info_wrapper_table_wrapper_container_col_2_title">How does electricity get to where it’s needed?</p>
                  <p className="info_wrapper_table_wrapper_container_col_2_text">

                    
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p className="info_wrapper_table_wrapper_container_col_2_title">How is electricity supply and demand matched?</p>
                  <p className="info_wrapper_table_wrapper_container_col_2_text">

                    
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <p className="info_wrapper_table_wrapper_container_col_2_title">How much electrical energy consumption is consumed worldwide?</p>
                  <p className="info_wrapper_table_wrapper_container_col_2_text">

                    
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <p className="info_wrapper_table_wrapper_container_col_2_title">What resources generate electric power?</p>
                  <p className="info_wrapper_table_wrapper_container_col_2_text">

                    
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <p className="info_wrapper_table_wrapper_container_col_2_title">What is green electricity?</p>
                  <p className="info_wrapper_table_wrapper_container_col_2_text">

                    
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <p className="info_wrapper_table_wrapper_container_col_2_title">What are the costs of producing energy</p>
                  <p className="info_wrapper_table_wrapper_container_col_2_text">

                  
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="eighth">
                  <p className="info_wrapper_table_wrapper_container_col_2_title">What types of electrical energy storage are there?</p>
                  <p className="info_wrapper_table_wrapper_container_col_2_text">

                    
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        </div>

        <div className="info_wrapper_phone_table_wrapper">

          <Accordion className="info_wrapper_phone_table_wrapper_accordion">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <p className="info_wrapper_phone_table_wrapper_title">
                  Where does our electricity come from?
                </p>
                </Accordion.Header>
              <Accordion.Body className="info_wrapper_phone_table_wrapper_body">

                <p className="info_wrapper_phone_table_wrapper_accordion_body_title">Where does our electricity come from?</p>


                <p className="info_wrapper_phone_table_wrapper_body_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <p className="info_wrapper_phone_table_wrapper_title">
                  How does electricity get to where it’s needed?
                </p>
              
              </Accordion.Header>
              <Accordion.Body className="info_wrapper_phone_table_wrapper_body">
                <p className="info_wrapper_phone_table_wrapper_accordion_body_title">How does electricity get to where it’s needed?</p>


                <p className="info_wrapper_phone_table_wrapper_body_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <p className="info_wrapper_phone_table_wrapper_title">
                  How are electricity supply and demand matched?
                </p>
              </Accordion.Header>
            <Accordion.Body className="info_wrapper_phone_table_wrapper_body">
                <p className="info_wrapper_phone_table_wrapper_accordion_body_title">How are electricity supply and demand matched?</p>


                <p className="info_wrapper_phone_table_wrapper_body_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <p className="info_wrapper_phone_table_wrapper_title">
                  How much of world energy consumption is electric?
               </p>   
            </Accordion.Header>
              <Accordion.Body className="info_wrapper_phone_table_wrapper_body">
                <p className="info_wrapper_phone_table_wrapper_accordion_body_title">How much of world energy consumption is electric?</p>


                <p className="info_wrapper_phone_table_wrapper_body_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <p className="info_wrapper_phone_table_wrapper_title">
                  How much electric power comes from each kind of source?
                </p>
              </Accordion.Header>
                
              <Accordion.Body className="info_wrapper_phone_table_wrapper_body">
                <p className="info_wrapper_phone_table_wrapper_accordion_body_title">How much electric power comes from each kind of source?</p>


                <p className="info_wrapper_phone_table_wrapper_body_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <p className="info_wrapper_phone_table_wrapper_title">
                  What is green electricity and how green is it?
                </p>
              </Accordion.Header>
              <Accordion.Body className="info_wrapper_phone_table_wrapper_body">
                <p className="info_wrapper_phone_table_wrapper_accordion_body_title">What is green electricity and how green is it?</p>


                <p className="info_wrapper_phone_table_wrapper_body_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <p className="info_wrapper_phone_table_wrapper_title">
                  What are the relative costs of each type, both financially and in terms of environmental impact?
                </p>
              </Accordion.Header>
              <Accordion.Body className="info_wrapper_phone_table_wrapper_body">
                <p className="info_wrapper_phone_table_wrapper_accordion_body_title">What are the relative costs of each type, both financially and in terms of environmental impact?</p>


                <p className="info_wrapper_phone_table_wrapper_body_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                <p className="info_wrapper_phone_table_wrapper_title">
                  What types of electrical energy storage are there, how much is needed and what are their costs?
                </p>
              
              </Accordion.Header>
                
              <Accordion.Body className="info_wrapper_phone_table_wrapper_body">
                <p className="info_wrapper_phone_table_wrapper_accordion_body_title">What types of electrical energy storage are there, how much is needed and what are their costs?</p>


                <p className="info_wrapper_phone_table_wrapper_body_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
    </div>

  );
}

export default InfoTab;