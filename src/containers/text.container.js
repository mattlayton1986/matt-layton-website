import React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";

const StyledTextContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: ${({ textalign }) => textalign};
  width: ${({ width }) => width || "100%"};
  padding: ${({ theme, padding }) => padding || theme.spacing(4, 4)};
  margin: ${({ theme, margin }) => margin || theme.spacing(4)};
`;

const TextContainer = ({ children, ...otherProps }) => (
  <StyledTextContainer {...otherProps}>{children}</StyledTextContainer>
);

export default TextContainer;
