import React from "react";
import './CustomerReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'
import { Card, Col } from "react-bootstrap";
const CustomerReview = (props) => {
    const { name, review } = props.review;
    return (
        <Col>
            <Card>
                <Card.Body className="text-start">
                    <div className="font-icon">
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </div>
                    <Card.Title className="my-2">{name}</Card.Title>
                    <Card.Text title={review}>{review.length > 190 ? review.slice(0, 190) + '...' : review}</Card.Text>
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