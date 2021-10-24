import React from "react";
import TextContainer from "./text.container";
import Typography from "@mui/material/Typography";
import { StyledList } from "../styles/reusable.components";
import ExperienceItem from "./experience-item.container";

const Experience = ({ experience }) => (
  <TextContainer align={{ xl: "flex-start" }}>
    <Typography variant="h4" component="h3" align="left" sx={{ pb: 2 }}>
      Experience
    </Typography>
    <StyledList>
      {experience.map((job) => (
        <ExperienceItem job={job} />
      ))}
    </StyledList>
  </TextContainer>
);

export default Experience;
