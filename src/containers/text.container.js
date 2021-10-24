import React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";

const StyledTextContainer = styled(Container)(
  ({
    theme,
    flexDirection,
    justify,
    align,
    overflow,
    width,
    padding,
    margin,
  }) => ({
    display: "flex",
    flexDirection: flexDirection?.xl || "column",
    justifyContent: justify?.xl || "center",
    alignItems: align?.xl || "center",
    overflow: overflow || "hidden",
    width: width?.xl || "100%",
    padding: padding?.xl || theme.spacing(4),
    margin: margin?.xl || theme.spacing(4),

    [theme.breakpoints.down("md")]: {
      flexDirection: flexDirection?.md || "column",
      justifyContent: justify?.md || "center",
      alignItems: align?.md || "center",
      overflow: overflow || "hidden",
      width: width?.md || "100%",
      padding: padding?.md || theme.spacing(4),
      margin: margin?.md || theme.spacing(4),
    },
  })
);

const TextContainer = ({ children, ...otherProps }) => (
  <StyledTextContainer {...otherProps}>{children}</StyledTextContainer>
);

export default TextContainer;

/**
 * Props
 * flexDirection: { xl: String, md: String },
 *                default: "column",
 *                sets flex direction of text container
 * justifyContent: { xl: String, md: String },
 *                 default: "center"
 *                 justifies content along main axis
 * alignItems: { xl: String, md: String },
 *             default: "center",
 *             aligns content along cross axis
 * overflow: { xl: String, md: String },
 *            default: "hidden",
 *            controls text overflow on the container
 * width: { xl: String, md: String },
 *        default: "100%",
 *        controls width of text container
 * padding: { xl: return value of theme.spacing(), 
 *            md: return value oftheme.spacing() },
 *          default: theme.spacing(4),     // 32px
 *          controls padding around text container
 * margin: { xl: return value of theme.spacing(), 
 *           md: return value oftheme.spacing() },
 *         default: theme.spacing(4),
 *         controls margin around text container
 */