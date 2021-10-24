import React from "react";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";

/**
 *  This component combines a MUI <Slide> animation component with a MUI
 *  <Typography> element for reusable animated text. Custom styles can be
 *  provided via props and used on the Container wrapper.
 * @param {slide} object prop containing all MUI props for <Slide>
 * @param {typography} object prop containing all MUI props for <Typography>
 * @param {otherProps} object prop containing all other props that will be
 * passed into <Container> for custom styling
 * @returns React Component
 */
const AnimatedTypography = ({ slide, typography, children, ...otherProps }) => (
  <Container {...otherProps}>
    <Slide {...slide}>
      <Typography {...typography}>{children}</Typography>
    </Slide>
  </Container>
);

export default AnimatedTypography;
