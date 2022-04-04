import React from "react";
import './CustomerReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'
import { Card, Col, Row } from "react-bootstrap";
const CustomerReview = (props) => {
    const { name, review } = props.review;
    return (
        <Col>
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body className="text-start">
                    <div className="font-icon">
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </div>
                    <Card.Title className="my-2">{name}</Card.Title>
                    <Card.Text>{review}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default CustomerReview;





{/* <Col className="text-start">
            <div className="font-icon">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </div>
            <h5>{name}</h5>
            <p>{review}</p>
        </Col> */}