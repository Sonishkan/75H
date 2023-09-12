/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function Examples() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("../../assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
        <h1 className="title">
          Discover the Benifits
        </h1>
        <Row>
          <Col sm="6">

              <img
                alt="..."
                className="img-raised"
                src={require("../../assets/img/benifits/1.png")}
              />
            
          </Col>
          
          <Col sm="6">
              <img
                alt="..."
                className="img-raised"
                src={require("../../assets/img/benifits/2.png")}
              />
          </Col>
          
        </Row>
        <span className="space-50" />
        <Row>
          <Col sm="6">
            <img
              alt="..."
              className="img-raised"
              src={require("../../assets/img/benifits/3.png")}
          />
          </Col>

          <Col sm="6">
            <img
              alt="..."
              className="img-raised"
              src={require("../../assets/img/benifits/4.png")}
          />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
