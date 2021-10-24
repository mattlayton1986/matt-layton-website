import React from "react";
import Container from "@mui/material/Container";
import avatar from "../../assets/avatar.png";
import styled from "@emotion/styled";

const imageContainerStyles = {
  width: "auto",
};

const StyledImage = styled("img")(({ theme, size }) => ({
  maxWidth: `${size.xl}px` || "500px",
  
  [theme.breakpoints.down("md")]: {
    maxWidth: `${size.md}px` || "300px",
  },
}));

const Avatar = ({ size }) => {
  return (
    <Container id="avatar" maxWidth="false" sx={imageContainerStyles}>
      <StyledImage src={avatar} alt="Avatar of Matt Layton" size={size} />
    </Container>
  );
};

export default Avatar;


/**
 * Props
 * size: { xl: String, md: String }, 
 *        default: md: "300px", xl: "500px"; 
 *        max width of image
 */