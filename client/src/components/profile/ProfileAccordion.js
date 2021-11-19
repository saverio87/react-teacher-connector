import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Accordion from "react-bootstrap/Accordion";
import formatDate from "../../utils/formatDate";
import styled from "styled-components";

const ProfileAccordion = ({
  profile: {
    bio,
    experience,
    education,
    social,
    user: { name, avatar },
  },
}) => {
  const Text = styled.p`
    color: #41a0b3;
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};
    font-family: "Raleway";
  `;

  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <Text size="24px" weight="400">
            My bio
          </Text>
        </Accordion.Header>
        <Accordion.Body>{bio}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <Text size="24px" weight="400">
            Experiences
          </Text>
        </Accordion.Header>
        <Accordion.Body>
          {experience.length > 0 ? (
            <>
              {experience.map((experience) => (
                <div>
                  <h3>{experience.school}</h3>
                  <p>
                    {formatDate(experience.from)} to{" "}
                    {experience.to ? formatDate(experience.to) : "now"}
                  </p>
                  <p>
                    <strong>Position: </strong>
                    {experience.title}
                  </p>
                  <p>
                    <strong>Description: </strong>
                    {experience.description}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <h5> No experience credentials</h5>
          )}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <Text size="24px" weight="400">
            Education
          </Text>
        </Accordion.Header>
        <Accordion.Body>
          {education.length > 0 ? (
            <>
              {education.map((education) => (
                <div>
                  <h3>{education.school}</h3>
                  <p>
                    {formatDate(education.from)} to{" "}
                    {education.to ? formatDate(education.to) : "Now"}
                  </p>
                  <p>
                    <strong>Degree: </strong> {education.degree}
                  </p>
                  <p>
                    <strong>Field of study: </strong> {education.fieldofstudy}
                  </p>
                  <p>
                    <strong>Description: </strong> {education.description}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <h5> No education credentials</h5>
          )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

ProfileAccordion.propTypes = {
  //profile: PropTypes.object.isRequired,
};

export default ProfileAccordion;
