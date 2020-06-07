import React from "react";

//style
import { Container, Row, Col } from "react-bootstrap";
import "./HompePage.scss";

export default function Hompage() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="box" lg="3 bg-primary">
          <div className="box-text">
            <h1 className="box-title">Hat</h1>
            <span className="shop-now">shop Now</span>
          </div>
        </Col>
        <Col className="box" lg="3 bg-danger">
          <div className="box-text">
            <h1 className="box-title">Hat</h1>
            <span className="shop-now">shop Now</span>
          </div>
        </Col>
        <Col className="box" lg="3 bg-warning">
          <div className="box-text">
            <h1 className="box-title">Hat</h1>
            <span className="shop-now">shop Now</span>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="box" lg="5 bg-success">
          <div className="box-text">
            <h1 className="box-title">Hat</h1>
            <span className="shop-now">shop Now</span>
          </div>
        </Col>
        <Col className="box" lg="5 bg-info">
          <div className="box-text">
            <h1 className="box-title">Hat</h1>
            <span className="shop-now">shop Now</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
