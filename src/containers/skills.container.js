import React from "react";
import TextContainer from "./text.container";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const StyledCategory = styled(Typography)`
  text-transform: uppercase;
  font-size: 1.1rem;
`;

const StyledSkillsets = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(4),
}));

const Skills = ({ skills }) => (
  <TextContainer align={{ xl: "flex-start" }}>
    <Typography variant="h4" component="h3" align="left" sx={{ pb: 2 }}>
      Skills
    </Typography>
    {skills.map((skillset) => (
      <React.Fragment key={skillset.category}>
        <StyledCategory align="left" variant="overline">
          {skillset.category}
        </StyledCategory>
        <StyledSkillsets align="left" variant="body1">
          {skillset.skills.join(", ")}
        </StyledSkillsets>
      </React.Fragment>
    ))}
  </TextContainer>
);

export default Skills;
