import React from "react";
import TextContainer from "./text.container";
import Typography from "@mui/material/Typography";
import Organization from "./organization.container";
import { StyledList, StyledListItem } from "../styles/reusable.components";

const Education = ({ education }) => (
  <TextContainer align={{ xl: "flex-start" }}>
    <Typography variant="h4" component="h3" align="left" sx={{ pb: 2 }}>
      Education
    </Typography>
    <StyledList>
      {education.map((org) => (
        <Organization org={org} />
      ))}
    </StyledList>
  </TextContainer>
);

export default Education;
