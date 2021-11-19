import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ReviewItem from "./ReviewItem";

import { getReviews } from "../../actions/review";
import styled from "styled-components";

import {
  Badge,
  Button,
  Card,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import {
  Header,
  PlainLink,
  SecondaryButton,
  Text,
} from "../../utils/styledComponents";

const Reviews = ({ getReviews, review: { reviews, loading } }) => {
  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Header>
        <Text color="#41a0b3" size="2rem">
          School Reviews
        </Text>
        <p class="lead">Genuine reviews left by fellow teachers</p>
      </Header>

      <Container fluid>
        <Row>
          {reviews.map((review) => (
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
              <ReviewItem key={review._id} review={review} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

Reviews.propTypes = {
  getReviews: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  review: state.review,
});

export default connect(mapStateToProps, { getReviews })(Reviews);
