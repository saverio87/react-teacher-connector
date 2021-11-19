import React from "react";
import styled from "styled-components";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Text = (props) => {
  const StyledText = styled.span`
    color: ${(props) => props.color};
    line-height: ${(props) => props.line};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};
    font-family: "Raleway";
  `;
  return <StyledText {...props}>{props.children}</StyledText>;
};

export const PrimaryText = (props) => {
  const StyledText = styled.span`
    color: #41a0b3;
    line-height: ${(props) => props.line};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};
    font-family: "Raleway";
  `;
  return <StyledText {...props}>{props.children}</StyledText>;
};

export const PrimaryOutlineButton = (props) => {
  const StyledButton = styled(Button)`
    background-color: white;
    border: 0.15rem solid #41a0b3;
    text-decoration: none;
    font-weight: 300;
    font-size: ${(props) => props.fontSize};
    color: #41a0b3;
    &:hover {
      border: 0.1rem solid #41a0b3;
      background-color: #41a0b3;
      color: white;
    }
  `;
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export const PrimaryButton = (props) => {
  const StyledButton = styled(Button)`
    background-color: #d7e8eb;
    border: 0.15rem solid #41a0b3;
    text-decoration: none;
    font-weight: 300;
    font-size: ${(props) => props.fontSize};
    color: #41a0b3;
    &:hover {
      border: 0.15rem solid #41a0b3;
      background-color: white;
      color: #41a0b3;
    }
  `;
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export const EditButton = (props) => {
  const StyledButton = styled(Button)`
    background-color: #ffc666;
    border: 0.15rem solid #f29704;
    text-decoration: none;
    font-weight: 300;
    font-size: ${(props) => props.fontSize};
    color: #f29704;
    &:hover {
      border: 0.15rem solid #f29704;
      background-color: #f29704;
      color: white;
    }
  `;
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export const SecondaryButton = (props) => {
  const StyledButton = styled(Button)`
    background-color: lightgrey;
    border: 0.15rem solid #3f4c4f;
    text-decoration: none;
    font-weight: 300;
    font-size: ${(props) => props.fontSize};
    color: #3f4c4f;
    &:hover {
      border: 0.15rem solid #3f4c4f;
      background-color: #3f4c4f;
      color: lightgrey;
    }
  `;

  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export const SuccessButton = (props) => {
  const StyledButton = styled(Button)`
    background-color: green;
    border: 0.15rem solid darkgreen;
    text-decoration: none;
    font-weight: 300;
    font-size: ${(props) => props.fontSize};
    color: white;
    &:hover {
      border: 0.15rem solid darkgreen;
      background-color: darkgreen;
      color: white;
    }
  `;
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
export const DangerButton = (props) => {
  const StyledButton = styled(Button)`
    background-color: white;
    border: 0.15rem solid red;
    text-decoration: none;
    font-weight: 300;
    font-size: ${(props) => props.fontSize};
    color: red;
    &:hover {
      border: 0.1rem solid red;
      background-color: red;
      color: white;
    }
  `;
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export const StyledLink = (props) => {
  const MyLink = styled(Link)`
    text-decoration: none;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-family: "Raleway";
  `;

  return <MyLink {...props}>{props.children}</MyLink>;
};

export const PlainLink = (props) => {
  const MyLink = styled(Link)`
    text-decoration: none;
  `;

  return <MyLink {...props}>{props.children}</MyLink>;
};

export const Header = (props) => {
  return (
    <Container className="my-3">
      <Card
        className="text-center"
        style={{
          border: "0.15rem solid #41a0b3",
          backgroundColor: "#D7E8EB",
          minWidth: "60%",
          padding: "1rem",
        }}
      >
        {props.children}
      </Card>
    </Container>
  );
};

// #41a0b3
