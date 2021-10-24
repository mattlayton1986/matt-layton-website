import React from "react";
import useTheme from "@mui/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import PageContainer from "../../containers/page.container";
import TextContainer from "../../containers/text.container";
import Avatar from "../../components/Avatar/avatar.component";
import AnimatedTypography from "../../components/AnimatedTypography/animated-typography.component";
import Typography from "@mui/material/Typography";

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const {
    spacing,
    transitions: { easing },
  } = theme;

  const h1TextProps = {
    variant: matches ? "h4" : "h1",
    align: "center",
  };

  const h2TextProps = {
    variant: matches ? "h6" : "h4",
    component: "h2",
    align: "center",
  };

  const contentTextProps = {
    variant: matches ? "body2" : "h6",
    align: "center",
    sx: { mt: 4 },
  };

  const h1Text = "Matthew Layton";

  const h2Text = "Front End Developer | Trainer | Problem Solver";

  const contentText = `I'm a software engineer based in Chicago. I specialize in building beautiful, scalable front-end applications with JavaScript, React, and other Web technologies. I currently build global e-commerce experiences at cleverbridge.`;

  return (
    <PageContainer maxWidth="xl" justify={{ xl: "space-around" }}>
      <Avatar size={{ md: "100", xl: "300" }} />
      <TextContainer
        id="hero-text"
        maxWidth="false"
        width={{ xl: "65%", md: "100%" }}
        padding={{ xl: spacing(20, 4), md: spacing(2) }}
        margin={{ md: spacing(2) }}
      >
        {/* Matthew Layton */}
        {matches ? (
          <Typography {...h1TextProps}>{h1Text}</Typography>
        ) : (
          <AnimatedTypography
            slide={{
              direction: "down",
              easing: easing.easeOut,
              timeout: 600,
              appear: true,
              in: true,
            }}
            typography={h1TextProps}
          >
            {h1Text}
          </AnimatedTypography>
        )}

        {/* Front End Developer | Trainer | Problem Solver */}
        {matches ? (
          <Typography {...h2TextProps}>{h2Text}</Typography>
        ) : (
          <AnimatedTypography
            slide={{
              direction: "left",
              easing: easing.easeInOut,
              timeout: 800,
              appear: true,
              in: true,
            }}
            typography={h2TextProps}
          >
            {h2Text}
          </AnimatedTypography>
        )}

        {/* Intro paragraph */}
        {matches ? (
          <Typography {...contentTextProps}>{contentText}</Typography>
        ) : (
          <AnimatedTypography
            slide={{
              direction: "up",
              easing: easing.easeOut,
              timeout: 600,
              appear: true,
              in: true,
            }}
            typography={contentTextProps}
          >
            {contentText}
          </AnimatedTypography>
        )}
      </TextContainer>
    </PageContainer>
  );
};

export default Home;
