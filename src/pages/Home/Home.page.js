import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  homeContainerStyles,
  imageContainerStyles,
  heroTextContainerStyles,
  aboutMeStyles,
  StyledImage,
} from "./Home.styled";
import headshot from "../../assets/avatar.png";

const Home = () => (
  <Container maxWidth="xl" sx={homeContainerStyles}>
    <Container id="headshot" maxWidth="false" sx={imageContainerStyles}>
      <StyledImage src={headshot} alt="Avatar of Matt Layton" />
    </Container>

    <Container id="hero-text" maxWidth="false" sx={heroTextContainerStyles}>
      <Typography variant="h1">Matthew Layton</Typography>
      <Typography variant="h4" component="h2">
        Front End Developer | Trainer | Mentor
      </Typography>
      <Typography variant="h6" sx={aboutMeStyles}>
        I'm a software engineer based in Chicago. I specialize in building
        beautiful, scalable front-end applications with JavaScript, React, and
        other Web technologies. I currently build global e-commerce experiences
        at{" "}
        <Link
          href="https://www.cleverbridge.com"
          target="_blank"
          rel="noopener"
        >
          cleverbridge <OpenInNewIcon fontSize="small" />
        </Link>
        .
      </Typography>
    </Container>
  </Container>
);

export default Home;
