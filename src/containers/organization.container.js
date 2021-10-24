import React from "react";
import {
  StyledList,
  StyledListItem,
  StyledHighlight,
  StyledSecondary,
} from "../styles/reusable.components";
import { Typography } from "@mui/material";

const Organization = ({ org }) => (
  <StyledListItem alignItems="flex-start">
    <StyledHighlight variant="h6">{org.organization}</StyledHighlight>
    <StyledList>
      {org.courses.map((course) => (
        <StyledListItem key={course.name} alignItems="flex-start">
          <StyledSecondary>{course.name}</StyledSecondary>
          <Typography>{course.instructor}</Typography>
          <Typography>{course.status}</Typography>
        </StyledListItem>
      ))}
    </StyledList>
  </StyledListItem>
);

export default Organization;
