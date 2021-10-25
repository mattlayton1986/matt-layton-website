import React from "react";
import useTheme from "@mui/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import {
  StyledList,
  StyledListItem,
  StyledHighlight,
  StyledSecondary,
} from "../styles/reusable.components";
import styled from "@emotion/styled";

const StyledCompany = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[700],
}));

const ExperienceItem = ({ job }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledListItem alignItems="flex-start" disableGutters={matches}>
      <StyledSecondary align="left">{job.dates}</StyledSecondary>
      <StyledHighlight align="left" variant="h6">
        {job.jobTitle}
      </StyledHighlight>
      <StyledCompany align="left">{job.company}</StyledCompany>
      <StyledList>
        {job.responsibilities.map((responsibility, index) => (
          <StyledListItem
            key={index}
            alignItems="flex-start"
            disableGutters={matches}
          >
            {responsibility}
          </StyledListItem>
        ))}
      </StyledList>
    </StyledListItem>
  );
};

export default ExperienceItem;
