import React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";

const StyledPageContainer = styled(Container)(
  ({ theme, direction, justify, align, bg }) => ({
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: direction?.xl || "row",
    justifyContent: justify?.xl || "center",
    alignItems: align?.xl || "center",
    backgroundColor: bg || "#fff",

    [theme.breakpoints.down("md")]: {
      flexDirection: direction?.md || "column",
      justifyContent: justify?.md || "center",
      alignItems: align?.md || "center",
    },
  })
);

const PageContainer = ({ children, ...otherProps }) => (
  <StyledPageContainer {...otherProps}>{children}</StyledPageContainer>
);

export default PageContainer;

/**
 * Props
 * direction: { md: String, xl: String},
 *                default: md: "column", xl: "row",
 *                sets flex direction of page container
 * 
 * justify: { md: String, xl: String },
 *                 default: "center"
 *                 justifies content along main axis
 * 
 * align: { md: String, xl: String },
 *             default: "center"
 *             aligns content along cross axis
 * bg: String,
 *      default: "#fff",
 *      sets page background color
 */