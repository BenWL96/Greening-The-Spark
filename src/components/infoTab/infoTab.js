import React, {useState} from 'react';
import '../../css/components/infoTab.css';

import X from "../../images/Black-X.png";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Stack from 'react-bootstrap/Stack';

import Accordion from 'react-bootstrap/Accordion';


function InfoTab({changeStatePanelActivated, infoPanelData}) {

  //map infoPanelData logic so that information is added to each tab
  //and so that the eventKey matches between the question panel
  //and the answer panel

  const firstInfoPanel = infoPanelData[0].id.toString();


  const mapNavItemQuestionDesktop = (infoData) => {
    
    return infoData.map(data => 

        <Nav.Item key={data.id}>
          <Nav.Link eventKey={data.id}>
            <p className="info_wrapper_table_wrapper_container_tab_col_1_link"> 
              {data.question}
            </p>
            </Nav.Link>
      </Nav.Item> 
      
    )
  }

  const mapNavItemAnswerDesktop = (infoData) => {
    return infoData.map(data =>
      
        <Tab.Pane eventKey={data.id} key={data.question} className="info_wrapper_table_wrapper_container_col_2_tab_pane">
          <p className="info_wrapper_table_wrapper_container_col_2_title">{data.question}</p>
          <p className="info_wrapper_table_wrapper_container_col_2_text">

            {data.the_simple_answer}
            {data.the_complex_answer}
            {data.the_gts_answer}
          </p>
          <p className="info_wrapper_table_wrapper_container_col_2_title">How does GTS approach this?</p>
          <p className="info_wrapper_table_wrapper_container_col_2_text">

            {data.the_simple_answer}
            {data.the_complex_answer}
            {data.the_gts_answer}
          </p>
          <p className="info_wrapper_table_wrapper_container_col_2_title">What's happening in detail </p>
          <p className="info_wrapper_table_wrapper_container_col_2_text">

            {data.the_simple_answer}
            {data.the_complex_answer}
            {data.the_gts_answer}
          </p>
      </Tab.Pane>

      )
    }
  
  
  const mapAccordionItems = (infoData) => {
    return infoData.map(data =>
      
      <Accordion.Item eventKey={data.id} key={data.the_simple_answer}>
      <Accordion.Header>
        <p className="info_wrapper_phone_table_wrapper_title">
          {data.question}
        </p>
        </Accordion.Header>
      <Accordion.Body className="info_wrapper_phone_table_wrapper_body">

        <p className="info_wrapper_phone_table_wrapper_accordion_body_title">{data.question}?</p>


        <p className="info_wrapper_phone_table_wrapper_body_text">
            {data.the_simple_answer}
        </p>

        <p className="info_wrapper_phone_table_wrapper_accordion_body_title">How does GTS approach this?</p>

        <p className="info_wrapper_phone_table_wrapper_body_text">
            {data.the_gts_answer}
        </p>

        <p className="info_wrapper_phone_table_wrapper_accordion_body_title">What's Happening In Detail?</p>

        <p className="info_wrapper_phone_table_wrapper_body_text">
          
            {data.the_complex_answer}
          
        </p>
      </Accordion.Body>
    </Accordion.Item>

      )
    }




  return (

    <div className="info_wrapper" data-testid="info_wrapper">

      <div className="info_wrapper_nest_title">
      
        

        <Stack direction="horizontal" gap={3}>
          <div>
            <p className="info_wrapper_title">
              Info
            </p>
          </div>

          <div className="ms-auto"></div>
          <div>
            <img className="info_wrapper_exit_img" data-testid="info_wrapper_exit_img" src={X} onClick={changeStatePanelActivated}/>
          </div>
        </Stack>
        
     
        <br />
      </div>
      <div className="info_wrapper_table_wrapper">

        <Tab.Container className="info_wrapper_table_wrapper_container" id="left-tabs-example" defaultActiveKey={firstInfoPanel}>
          <Row>
            <Col md={3}  style={{backgroundColor: 'black', height: '78vh', overflow: 'scroll', borderRadius: '25px'}} className="info_wrapper_table_wrapper_container_col_1">
              
              <Nav variant="pills" className="flex-column">

                {mapNavItemQuestionDesktop(infoPanelData)}

              </Nav>
            </Col>
            <Col md={9} className="info_wrapper_table_wrapper_container_col_2" style={{height: '78vh', overflow: 'scroll', position: 'top', borderRadius: '25px'}}>
              <Tab.Content>

                {/* //mapNavItemAnswerDesktop goes here !! */}

                
                {mapNavItemAnswerDesktop(infoPanelData)}

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>

      <div className="info_wrapper_phone_table_wrapper">

        <Accordion className="info_wrapper_phone_table_wrapper_accordion">

          {mapAccordionItems(infoPanelData)}

        </Accordion>
      </div>
    </div>

  );
}

export default InfoTab;