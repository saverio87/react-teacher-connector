import React from "react";
import Accordion from "react-bootstrap/Accordion";
import formatDate from "../../utils/formatDate";
import styled from "styled-components";
import { PrimaryText, Text } from "../../utils/styledComponents";
import { Spinner } from "react-bootstrap";

export const ReviewAccordion = ({
  formData: {
    salary,
    perks,
    visahelp,
    career,
    accommodation,
    advice,
    comments,
    cons,

    legalexpenses,

    pros,
    rating,
    recommend,
  },
}) => {
  const ratingStars = (score) => {
    let stars = [];
    for (let step = 0; step < score; step++) {
      stars.push(
        <>
          <Text size="2rem">
            <i class="far fa-star" />
          </Text>
          &nbsp;
        </>
      );
    }

    return stars;
  };

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <PrimaryText size="1.5rem" weight="400">
              Salary and Benefits{" "}
            </PrimaryText>
          </Accordion.Header>
          <Accordion.Body>
            <div className="d-flex flex-column">
              <PrimaryText size="1.2rem" weight="400">
                What is the average monthly salary for teachers?
              </PrimaryText>
              <Text size="1.2rem" weight="400">
                {salary && salary}
              </Text>
              <PrimaryText size="1.2rem" weight="400">
                Which of the following perks and benefits does the school offer?
              </PrimaryText>
              <Text size="1.2rem" weight="400">
                {perks && perks.map((perk) => <li>{perk}</li>)}
              </Text>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <PrimaryText size="1.5rem" weight="400">
              School Support
            </PrimaryText>
          </Accordion.Header>
          <Accordion.Body>
            <div className="d-flex flex-column">
              <PrimaryText size="1.2rem" weight="400">
                Did the school offer assistance with getting a Z visa and a work
                permit?{" "}
              </PrimaryText>
              <Text size="1.2rem" weight="400">
                {visahelp && visahelp}
              </Text>
              <PrimaryText size="1.2rem" weight="400">
                Did the school bear the cost of legal expenses?
              </PrimaryText>
              <Text size="1.2rem" weight="400">
                {legalexpenses && legalexpenses}
              </Text>
              <PrimaryText size="1.2rem" weight="400">
                Did the school offer assistance finding suitable accommodation?
              </PrimaryText>
              <Text size="1.2rem" weight="400">
                {accommodation && accommodation}
              </Text>
              <PrimaryText size="1.2rem" weight="400">
                Did the school offer opportunities for advancement and
                promotion?
              </PrimaryText>
              <Text size="1.2rem" weight="400">
                {career && career}
              </Text>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <PrimaryText size="1.5rem" weight="400">
              Rating
            </PrimaryText>
          </Accordion.Header>
          <Accordion.Body>
            <div className="d-flex flex-column">
              <PrimaryText size="1.2rem" weight="400">
                Work/Life balance
              </PrimaryText>
              <Text size="1.2rem" weight="400">
                {rating && ratingStars(rating.balance)}
              </Text>
              <PrimaryText size="1.2rem" weight="400">
                Work environment
              </PrimaryText>
              <Text size="1.2rem" weight="400">
                {rating && ratingStars(rating.workplace)}
              </Text>
              <PrimaryText size="1.2rem" weight="400">
                Management
              </PrimaryText>
              <Text size="1.2rem" weight="400">
                {rating && ratingStars(rating.management)}
              </Text>
              <PrimaryText size="1.2rem" weight="400">
                Benefits and perks
              </PrimaryText>
              <Text size="1.2rem" weight="400">
                {rating && ratingStars(rating.benefits)}
              </Text>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <PrimaryText size="24px" weight="400">
              Comments
            </PrimaryText>
          </Accordion.Header>
          <Accordion.Body>
            <div className="d-flex flex-column">
              <PrimaryText size="1.2rem" weight="400">
                What are the pros of working for this school?
              </PrimaryText>
              <Text size="1.2rem" weight="400">
                {pros && pros}
              </Text>
              <PrimaryText size="1.2rem" weight="400">
                What are the cons of working for this school?
              </PrimaryText>
              <Text size="1.2rem" weight="400">
                {cons && cons}
              </Text>
              <PrimaryText size="1.2rem" weight="400">
                Leave your comments on the school below - feel free to write at
                length
              </PrimaryText>
              <Text size="1.2rem" weight="400">
                {comments && comments}
              </Text>
              <PrimaryText size="1.2rem" weight="400">
                Would you recommend working here to a friend?
              </PrimaryText>
              <Text size="1.2rem" weight="400">
                {recommend && recommend}
              </Text>
              <PrimaryText size="1.2rem" weight="400">
                Do you have any advice for the management?
              </PrimaryText>
              <Text size="1.2rem" weight="400">
                {advice && advice}
              </Text>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
