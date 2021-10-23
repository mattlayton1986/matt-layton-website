import React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";

const StyledPageContainer = styled(Container)`
  width: 100vw;
  height: 100vh;
  display: flex;
  direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

const PageContainer = ({ children, ...otherProps }) => (
  <StyledPageContainer {...otherProps}>{children}</StyledPageContainer>
);

export default PageContainer;
