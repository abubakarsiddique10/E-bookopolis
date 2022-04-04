import React from "react";
import { Container, Row } from "react-bootstrap";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4 mt-4">
                    {
                        reviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </Row>
            </Container>
        </div>
    )
}
export default Reviews;