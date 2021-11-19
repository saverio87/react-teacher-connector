import React from "react";
import styled from "styled-components";
import { Image } from "react-bootstrap";
const { davatar } = require("davatar");

const ProfileImage = ({ image, size, imageSize, name, margin }) => {
  const imageData = davatar.generate({
    size: size,
    text: name,
    fontFamily: "Verdana",
    textColor: "#41a0b3",
    backgroundColor: "#D7E8EB",
  });
  return (
    <>
      <img
        style={{
          maxWidth: "80%",
          maxHeight: "80%",
          height: imageSize,
          width: imageSize,
          border: "0.2rem solid #41a0b3",
          borderRadius: "50%",
          //margin: "0.4rem 0rem 0.4rem 0rem",
          margin: margin,
        }}
        src={image ? image : imageData}
        alt="image"
      ></img>
    </>
  );
};

export default ProfileImage;
