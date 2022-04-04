import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'
import { Card, Col } from "react-bootstrap";
const Review = (props) => {
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
                    <Card.Text title={review}>{review.length > 190 ? review.slice(0, 190) + '...' : review}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default Review;