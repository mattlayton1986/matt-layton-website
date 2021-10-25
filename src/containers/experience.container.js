import React from "react";
import useTheme from "@mui/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextContainer from "./text.container";
import Typography from "@mui/material/Typography";
import { StyledList } from "../styles/reusable.components";
import ExperienceItem from "./experience-item.container";

const Experience = ({ experience }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <TextContainer
      align={{ xl: "flex-start" }}
      margin={{ md: "0" }}
      padding={{ md: theme.spacing(2, 0) }}
    >
      <Typography
        variant={matches ? "h5" : "h4"}
        component="h3"
        align="left"
        sx={{ pb: 2 }}
      >
        Experience
      </Typography>
      <StyledList disablePadding={matches}>
        {experience.map((job) => (
          <ExperienceItem key={job.jobTitle} job={job} />
        ))}
      </StyledList>
    </TextContainer>
  );
};

export default Experience;
