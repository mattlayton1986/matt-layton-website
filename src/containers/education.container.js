import React from "react";
import useTheme from "@mui/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextContainer from "./text.container";
import Typography from "@mui/material/Typography";
import Organization from "./organization.container";
import { StyledList } from "../styles/reusable.components";

const Education = ({ education }) => {
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
        Education
      </Typography>
      <StyledList disablePadding={matches}>
        {education.map((org) => (
          <Organization key={org.organization} org={org} />
        ))}
      </StyledList>
    </TextContainer>
  );
};

export default Education;
