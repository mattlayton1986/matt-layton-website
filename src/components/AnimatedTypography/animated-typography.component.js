import React from "react";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const StyledAnimatedTypography = styled(Container)`
  text-align: ${({ textalign }) => textalign};
`;

/**
 *  This component combines a MUI <Slide> animation component with a MUI
 *  <Typography> element for reusable animated text. Custom styles can be
 *  provided via props and used on the StyledAnimatedTypography wrapper.
 * @param {slide} object prop containing all MUI props for <Slide>
 * @param {typography} object prop containing all MUI props for <Typography>
 * @param {otherProps} object prop containing all other props that will be
 * passed into <StyledAnimatedTypography> for custom styling
 * @returns React Component
 */
const AnimatedTypography = ({ slide, typography, children, ...otherProps }) => (
  <StyledAnimatedTypography {...otherProps}>
    <Slide {...slide}>
      <Typography {...typography}>{children}</Typography>
    </Slide>
  </StyledAnimatedTypography>
);

export default AnimatedTypography;
