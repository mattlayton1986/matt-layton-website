import React from "react";
import { useTheme } from "@mui/styles";
import PageContainer from "../../containers/page.container";
import TextContainer from "../../containers/text.container";
import Avatar from "../../components/Avatar/avatar.component";
import AnimatedTypography from "../../components/AnimatedTypography/animated-typography.component";
import Link from "@mui/material/Link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Home = () => {
  const theme = useTheme();
  const { easing } = theme.transitions;

  return (
    <PageContainer maxWidth="xl" justify="space-around" align="center">
      <Avatar size="300" />
      <TextContainer
        id="hero-text"
        maxWidth="false"
        textalign="left"
        width="65%"
        padding={theme.spacing(20, 4)}
      >
        <AnimatedTypography
          slide={{
            direction: "down",
            easing: easing.easeOut,
            timeout: 600,
            appear: true,
            in: true,
          }}
          typography={{ variant: "h1" }}
          textalign="center"
        >
          Matthew Layton
        </AnimatedTypography>

        <AnimatedTypography
          slide={{
            direction: "left",
            easing: easing.easeInOut,
            timeout: 800,
            appear: true,
            in: true,
          }}
          typography={{ variant: "h4", component: "h2" }}
          textalign="center"
        >
          Front End Developer | Trainer | Mentor
        </AnimatedTypography>

        <AnimatedTypography
          slide={{
            direction: "up",
            easing: easing.easeOut,
            timeout: 600,
            appear: true,
            in: true,
          }}
          typography={{ variant: "h6", sx: { mt: 4 } }}
        >
          I'm a software engineer based in Chicago. I specialize in building
          beautiful, scalable front-end applications with JavaScript, React, and
          other Web technologies. I currently build global e-commerce
          experiences at{" "}
          <Link
            href="https://www.cleverbridge.com"
            target="_blank"
            rel="noopener"
          >
            cleverbridge <OpenInNewIcon fontSize="small" />
          </Link>
          .
        </AnimatedTypography>
      </TextContainer>
    </PageContainer>
  );
};

export default Home;
