import React from "react";
import { Col, Row } from "react-bootstrap";
const CustomerReview = (props) => {
    const { name, id } = props.review;
    return (
        <Col>
            <h3>{name}</h3>
        </Col>
    )
}
export default CustomerReview;