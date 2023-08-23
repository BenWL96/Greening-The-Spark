import React from "react";
import "../../css/components/landingPage.css";
import LandingPageImage from "../../images/landingPageImage.png";
import ArrowRight from "../../images/landingPage/arrowRightBlock.png";
import ArrowRightHorizontal from "../../images/landingPage/arrowRightBlockHorizontal.png";
import ArrowRightHorizontalThin from "../../images/landingPage/arrowRightBlockHorizontalThin.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import PropTypes from "prop-types";
import { motion } from "framer-motion";


function LandingPage({ alterStateLandingPageActivated }) {
  return (
    <div className="landing-page">
      <div className="landing-page_wrapper">
        {/*<Stack direction="horizontal" gap={4}>
          <div className="stack1">
            <motion.img
              className="landing-page_img"
              src={LandingPageImage}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                duration: 2,
                delay: 0,
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
          <div className="stack2">
            <motion.img
              className="scroll-icon"
              src={ArrowRight}
              onClick={alterStateLandingPageActivated}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                duration: 2,
                delay: 0,
              }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
            </Stack>*/}

        <Row className="landing-page_row">
          <Col
            direction="horizontal"
            xs={12}
            sm={9}
            md={9}
            lg={9}
            className="landing-page_col"
          >
            <motion.img
              className="landing-page_img"
              alt="landing-Page-img"
              onClick={alterStateLandingPageActivated}
              src={LandingPageImage}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                duration: 2,
                delay: 0,
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            />

          </Col>
          <Col
            direction="horizontal"
            xs={12}
            sm={3}
            md={3}
            lg={3}
            className="landing-page_col"
          >
            <motion.img
              className="scroll-icon"
              src={ArrowRight}
              onClick={alterStateLandingPageActivated}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                duration: 2,
                delay: 0,
              }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.img
              className="scroll-icon-thin"
              src={ArrowRightHorizontalThin}
              onClick={alterStateLandingPageActivated}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                duration: 2,
                delay: 0,
              }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            />
          </Col>
        </Row>


        <Row className="landing-page_row">
          <Col
            direction="horizontal"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className="landing-page_col"
          >
            <a class="more-info-anchor" href="https://www.greening-the-spark.com/" target="_blank" rel="noopener noreferrer">
            <div className="coloured-square-1">
              <p className="landing-page_text">More Info</p>
            </div>
            </a>
          </Col>
          
        </Row>



      </div>
    </div>
  );
}

export default LandingPage;


LandingPage.propTypes = {
  alterStateLandingPageActivated: PropTypes.func.isRequired,
};
