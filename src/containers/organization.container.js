import React from "react";
import useTheme from "@mui/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  StyledList,
  StyledListItem,
  StyledHighlight,
  StyledSecondary,
} from "../styles/reusable.components";
import { Typography } from "@mui/material";

const Organization = ({ org }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledListItem alignItems="flex-start" disableGutters={matches}>
      <StyledHighlight variant="h6">{org.organization}</StyledHighlight>
      <StyledList>
        {org.courses.map((course) => (
          <StyledListItem
            key={course.name}
            alignItems="flex-start"
            disableGutters={matches}
          >
            <StyledSecondary>{course.name}</StyledSecondary>
            <Typography>{course.instructor}</Typography>
            <Typography>{course.status}</Typography>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledListItem>
  );
};

export default Organization;
