import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Cards.css";

function Cards({ title, subtitle }) {
  return (
    <Card className="Card-container">
      <Card.Body className="Card-body">
        <Card.Title className="Card-Title">{title}</Card.Title>
        <Card.Subtitle className="Card-Text">{subtitle}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default Cards;
