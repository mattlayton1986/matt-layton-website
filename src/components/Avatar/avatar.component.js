import React from "react";
import Container from "@mui/material/Container";
import avatar from "../../assets/avatar.png";
import styled from "@emotion/styled";

const imageContainerStyles = {
  width: "auto",
};

const StyledImage = styled.img`
  max-width: ${({ size }) => size + "px"};
`;

const Avatar = ({ size }) => (
  <Container id="avatar" maxWidth="false" sx={imageContainerStyles}>
    <StyledImage src={avatar} alt="Avatar of Matt Layton" size={size} />
  </Container>
);

export default Avatar;
