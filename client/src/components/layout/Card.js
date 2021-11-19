import React from "react";
import { ReviewAccordion } from "../reviews/ReviewAccordion";
import styled from "styled-components";
import ProfileImage from "../layout/ProfileImage";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";
import {
  DangerButton,
  PlainLink,
  PrimaryButton,
  SecondaryButton,
  StyledLink,
} from "../../utils/styledComponents";

import { Text, PrimaryText } from "../../utils/styledComponents";

import {
  Badge,
  Button,
  Card,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import formatDate from "../../utils/formatDate";

const StyledButton = styled(Button)`
  border: 2px solid #41a0b3;
  color: #41a0b3;
`;

export const ProfileItemCard = ({
  name,
  avatar,
  bio,
  status,
  school,
  location,
  link,
}) => {
  return (
    <>
      <>
        <Card
          style={{
            margin: "0.5rem 0rem 0.5rem 0rem",
            border: "2px #41A0B3 solid",
          }}
        >
          <Card.Header
            style={{
              backgroundColor: "#D7E8EB",
            }}
          >
            {" "}
            <div className="d-flex flex-column align-items-center">
              {avatar ? (
                <ProfileImage imageSize="6rem" image={avatar} />
              ) : (
                <ProfileImage imageSize="6rem" name={name} />
              )}

              <Text size="1.5rem" weight="600">
                {name}
              </Text>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <h5>
                <i
                  className="fas fa-graduation-cap"
                  style={{ color: "#41a0b3" }}
                />
                {"  "}
                <Text size="1.3rem" weight="600">
                  {status}
                </Text>
              </h5>

              <h5>
                <i className="fas fa-school" style={{ color: "#41a0b3" }} />
                {"  "}
                <Text size="1.3rem" weight="600">
                  {school && school}
                </Text>
              </h5>
            </Card.Text>
            <Card.Text>
              <Text size="1.2rem" weight="600">
                {bio && bio}
              </Text>
            </Card.Text>

            <Card.Text className="d-flex justify-content-end">
              <h5>
                <i className="fas fa-map-marker" style={{ color: "#41a0b3" }} />{" "}
                &nbsp;
                <Text size="1.3rem" weight="600">
                  {location}{" "}
                </Text>
              </h5>
            </Card.Text>
            <Card.Text className="d-flex justify-content-end">
              <PlainLink to={link}>
                <PrimaryButton>View Profile</PrimaryButton>
              </PlainLink>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    </>
  );
};

export const ReviewItemCard = ({
  name,
  emoticon,
  school,
  location,
  comments,
  rating,
  date,
  link,
}) => {
  return (
    <>
      <Card
        style={{
          margin: "0.5rem 0rem 0.5rem 0rem",
          border: "2px #41A0B3 solid",
        }}
      >
        <Card.Header
          style={{
            backgroundColor: "#D7E8EB",
          }}
        >
          {" "}
          <Container className="d-flex justify-content-center">
            <Image style={{ width: "50%" }} src={emoticon} roundedCircle />
          </Container>
        </Card.Header>
        <Card.Body style={{ padding: "1rem 2rem 1rem 2rem" }}>
          {/* Name school */}

          <Card.Text>
            <Text size="1.3rem" weight="600">
              {school}
            </Text>
          </Card.Text>
          {/* Location */}
          <Card.Text className="d-flex justify-content-end">
            <h5>
              <i className="fas fa-map-marker" style={{ color: "#41a0b3" }} />{" "}
              &nbsp;
              <Text size="1.3rem" weight="600">
                {location}{" "}
              </Text>
            </h5>
          </Card.Text>

          {/* Teaser of review */}
          <Card.Text>
            <Text size="1.2rem" weight="600">
              {comments ? (
                <>{comments.slice(0, 100)} ...</>
              ) : (
                "This review has no comments"
              )}
            </Text>
          </Card.Text>
          {/* Rating */}
          <Card.Text className="d-flex justify-content-end">
            <h5>
              <i className="fas fa-star" style={{ color: "#41a0b3" }} /> &nbsp;
              <Text size="1.3rem" weight="600">
                Score: {rating}
              </Text>
            </h5>
          </Card.Text>
          {/* Posted by, on */}
          <Card.Text className="d-flex flex-column">
            <Text size="1rem" weight="600">
              <i className="fas fa-user" style={{ color: "#41a0b3" }} /> &nbsp;
              Posted by: {name}
            </Text>
            <Text size="1rem" weight="600">
              <i className="fas fa-calendar-alt" style={{ color: "#41a0b3" }} />{" "}
              &nbsp; On: {date}
            </Text>
          </Card.Text>

          <Container>
            <PlainLink to={link} className="d-grid">
              <PrimaryButton fontSize="1.2rem">Read</PrimaryButton>
            </PlainLink>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export const ReviewCard = ({
  review: {
    name,
    date,
    formData: {
      emoticon,
      duration,
      employmentstatus,
      rating,
      location,
      school,
      schooltype,
    },
    formData,
  },
}) => {
  const averageRating = (
    (rating.balance + rating.workplace + rating.management + rating.benefits) /
    4
  ).toFixed(1);

  const ratingStars = (score) => {
    let stars = [];
    for (let step = 0; step < score; step++) {
      stars.push(<i class="far fa-star" />);
    }

    return stars;
  };

  return (
    <>
      <Card
        style={{
          margin: "2rem 0rem 2rem 0rem",
          border: "0.15rem #41A0B3 solid",
        }}
      >
        <Card.Header
          style={{
            backgroundColor: "#D7E8EB",
          }}
        >
          {" "}
          <div className="d-flex flex-column align-items-center">
            <Text size="2.2rem" weight="600">
              {school}
            </Text>
            <Text size="1.5rem" weight="400">
              {schooltype} in <strong>{location}</strong>
            </Text>
            <Container>
              <Row className=" py-2 d-flex justify-content-center">
                <Col lg={3} sm={4} xs={4}>
                  <Image
                    src={emoticon}
                    roundedCircle
                    style={{ maxWidth: "90%" }}
                  />
                </Col>
              </Row>
            </Container>
            <Text size="2rem" weight="400">
              {ratingStars(Math.floor(averageRating))} ({averageRating})
            </Text>
            <Container fluid className="d-flex justify-content-around py-3">
              <Text size="1.5rem" weight="400">
                Posted by: {name}
              </Text>

              <Text size="1.5rem" weight="400">
                Posted on: {formatDate(date)}
              </Text>
            </Container>

            <Text size="1.5rem" color="red" className="text-center py-3">
              {name} worked / has been working {employmentstatus} at this school
              for {duration}
            </Text>
          </div>
        </Card.Header>
        <Card.Body>
          <ReviewAccordion formData={formData} />
        </Card.Body>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});

export const PostItemCard = connect(mapStateToProps, {
  addLike,
  removeLike,
  deletePost,
})(
  ({
    id,
    auth,
    user,
    name,
    likes,
    comments,
    date,
    text,
    linkToUser,
    linkToPost,
    addLike,
    removeLike,
    deletePost,
    showActions,
  }) => {
    return (
      <Card
        style={{
          margin: "0.5rem 0rem 0.5rem 0rem",
          border: "0.1rem #41A0B3 solid",
        }}
      >
        <Card.Header>
          <Container>
            <Row>
              <Col className="d-md-flex d-none align-items-center" md={1}>
                <ProfileImage name={name && name} />
                {"   "}
              </Col>
              <Col
                md={11}
                className="d-flex flex-column justify-content-center"
              >
                <StyledLink color="#41a0b3" weight="600" to={linkToUser}>
                  <Text line="1" size="1.5rem">
                    {name}
                  </Text>
                </StyledLink>
                <Text line="1" size="1rem" weight="400" color="grey">
                  EAL teacher
                </Text>
              </Col>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body className="px-3">
          <Card.Text>
            <Text size="1.2rem" weight="400">
              {text}
            </Text>
          </Card.Text>

          <Card.Text className="d-flex justify-content-end">
            <Text size="1.2rem" color="grey">
              Posted on: {formatDate(date)}
            </Text>
          </Card.Text>
        </Card.Body>
        {showActions && (
          <Card.Footer
            className=""
            style={{
              backgroundColor: "#D7E8EB",
            }}
          >
            <Card.Text className="d-flex justify-content-end">
              <PrimaryButton onClick={() => addLike(id)}>
                <i class="fas fa-thumbs-up" /> Like (
                {likes.length > 0 && likes.length})
              </PrimaryButton>
              &nbsp;
              <PrimaryButton onClick={() => removeLike(id)}>
                <i class="fas fa-thumbs-down" /> Unlike
              </PrimaryButton>
              &nbsp;
              <StyledLink to={linkToPost}>
                <PrimaryButton>
                  <i class="fas fa-comments" /> Discussion{" "}
                  {comments && comments.length > 0 && <> ({comments.length})</>}
                </PrimaryButton>
              </StyledLink>
              &nbsp;
              {!auth.loading && user === auth.user._id && (
                <DangerButton onClick={() => deletePost(id)}>
                  <i class="fas fa-trash-alt" /> Delete
                </DangerButton>
              )}
            </Card.Text>
          </Card.Footer>
        )}
      </Card>
    );
  }
);
