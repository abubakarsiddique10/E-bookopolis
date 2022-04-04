import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const Blogs = () => {
    return (
        <div>
            <Container className="mt-3">
                <Row xs={1} md={1} lg={2} className="g-4">
                    <Col className="text-start fs-5">
                        <h3>What is Semantics HTML?</h3>
                        <p>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a P tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.<br />
                            Examples of semantic HTML tags include:
                            Header tags &lt;h1&gt;&nbsp;through &lt;h6&gt;
                        </p>
                    </Col>
                    <Col className="text-start fs-5">
                        <h3>Difference between block and inline elements?</h3>
                        <ul>
                            <h5>Block Elements</h5>
                            <li>A block-level element always starts on a new line, and the browsers automatically add some space before and after the element.</li>
                            <li>A block-level element always takes up the full width available</li>
                            <li>Block Elements: div, p, header etc.</li>
                        </ul>
                        <ul>
                            <h5>Inline Elements</h5>
                            <li>An inline element does not start on a new line</li>
                            <li>An inline element only takes up as much width as necessary.</li>
                            <li>Block Elements: sapn, button, small etc.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Blogs;