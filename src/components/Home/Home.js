import React from "react";
import './Home.css';
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import useReviews from "../../hooks/useReviews";
import CustomerReview from "../CustomerReview/CustomerReview";
const Home = () => {
    const [reviews, setReviews] = useReviews();
    console.log(reviews)
    return (
        <div>
            <Container className="mt-5 border">
                <Row className="d-flex align-items-center">
                    <Col className="text-start">
                        <h1 className="home-title">Get Your New Book Collections</h1>
                        <p className="home-info">If you’re looking for great value second hand books, then World of Books is the place for you.
                            As you may already know, we aren’t like other online book stores. For starters, we don’t believe that books should only
                            be read once, or have a single owner.</p>
                        <Button className="home-btn">Explore More</Button>
                    </Col>
                    <Col className="ms-4">
                        <Image style={{ width: '600px' }} src="https://www.bookbaby.com/Images/novel-thumb-pocket-soft.png"></Image>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <Row className="row-cols-3">
                    {
                        reviews.map(review => <CustomerReview key={review.id} review={review}></CustomerReview>)
                    }
                </Row>
            </Container>
        </div>
    )
}
export default Home;

