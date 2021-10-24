import React from "react";
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

const ExperienceItem = ({ job }) => (
  <StyledListItem alignItems="flex-start">
    <StyledSecondary align="left">{job.dates}</StyledSecondary>
    <StyledHighlight align="left" variant="h6">
      {job.jobTitle}
    </StyledHighlight>
    <StyledCompany align="left">{job.company}</StyledCompany>
    <StyledList>
      {job.responsibilities.map((responsibility, index) => (
        <StyledListItem key={index} alignItems="flex-start">
          {responsibility}
        </StyledListItem>
      ))}
    </StyledList>
  </StyledListItem>
);

export default ExperienceItem;
