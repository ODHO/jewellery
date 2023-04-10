import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
const Footer = () => {
  return (
    <Container
      fluid
      bgColor="light"
      className="text-center text-lg-start text-white"
    >
      {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div>
          <a href="" className="me-4 text-reset"></a>
          <a href="" className="me-4 text-reset"></a>
          <a href="" className="me-4 text-reset"></a>
          <a href="" className="me-4 text-reset"></a>
          <a href="" className="me-4 text-reset"></a>
          <a href="" className="me-4 text-reset"></a>
        </div>
      </section> */}

      <section className="">
        <Container className="text-left text-md-start mt-5 py-5">
          <Row className="mt-3">
            <Col md="4" lg="2" xl="2" className="mx-auto mb-md-0 mb-4">
              <div className="p-3">
                <Image src={require("../../Assets/logo.png")} />
              </div>
            </Col>
            <Col md="3" lg="3" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Shop</h6>
              <p>
                <a href="#!" className="text-reset">
                  Bibendumetos
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Pellentes
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Pellentes
                </a>
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Popular Search</h6>
              <p>
                <a href="#!" className="text-reset">
                  18K White Gold
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Rose Gold
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Wedding
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Jewelry
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Help</h6>
              <p>
                <a href="#!" className="text-reset">
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Privacy Policy
                </a>
              </p>
            </Col>

            <Col md="4" lg="2" xl="2" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
              <p>
                <a href="#!" className="text-reset">
                  12344567890
                </a>
              </p>
            </Col>
            <Col md="4" lg="2" xl="2" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Newsletter Sign Up
              </h6>
              <p className="text-sm">
                Sign up for new arrivals, offers, and more!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "#BF8635" }}>
        Copyright © 2023
        <a className="text-reset fw-bold"> Company name</a>
      </div>
    </Container>
  );
};

export default Footer;
