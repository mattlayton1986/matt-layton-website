import React from "react";
import useTheme from "@mui/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextContainer from "./text.container";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const StyledCategory = styled(Typography)`
  text-transform: uppercase;
  font-size: 1.1rem;
`;

const StyledSkillsets = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    marginLeft: theme.spacing(2),
  },
}));

const Skills = ({ skills }) => {
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
        Skills
      </Typography>
      {skills.map((skillset) => (
        <TextContainer
          key={skillset.category}
          align={{ xl: "left", md: "left" }}
          margin={{ md: "0" }}
          padding={{ md: "0" }}
        >
          <StyledCategory align="left" variant="overline">
            {skillset.category}
          </StyledCategory>
          {matches ? (
            skillset.skills.map((skill) => (
              <StyledSkillsets key={skill} align="left" variant="body1">
                {skill}
              </StyledSkillsets>
            ))
          ) : (
            <StyledSkillsets align="left" variant="body1">
              {skillset.skills.join(", ")}
            </StyledSkillsets>
          )}
        </TextContainer>
      ))}
    </TextContainer>
  );
};

export default Skills;
