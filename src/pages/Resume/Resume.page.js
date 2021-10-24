import React from "react";
import useTheme from "@mui/styles/useTheme";
import PageContainer from "../../containers/page.container";
import TextContainer from "../../containers/text.container";
import DownloadLinks from "../../containers/download-links.container";
import Profile from "../../containers/profile.container";
import Skills from "../../containers/skills.container";
import Experience from "../../containers/experience.container";
import Education from "../../containers/education.container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import links from "../../data/links";
import resume from "../../data/resume";
import styled from "@emotion/styled";

const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
`;

const StyledListItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
`;

const Resume = () => {
  const theme = useTheme();
  const { palette, spacing } = theme;
  const { profile, experience, education, skills } = resume;

  return (
    <PageContainer
      maxWidth="lg"
      direction={{ xl: "column" }}
      justify={{ xl: "flex-start" }}
    >
      <TextContainer justify={{ xl: "flex-start" }}>
        {/* Resume header */}
        <Typography variant="h1">Résumé</Typography>
        {/* Download links */}
        <DownloadLinks documents={links.documents} />

        <Divider flexItem />

        {/* Personal info */}
        <TextContainer>
          <Typography variant="h2">Matthew Layton</Typography>
        </TextContainer>

        {/* Profile */}
        <Profile profile={profile} />

        <Divider flexItem />

        {/* Skills */}
        <Skills skills={skills} />

        <Divider flexItem />

        {/* Experience */}

        <Experience experience={experience} />

        <Divider flexItem />

        {/* Education */}
        <Education education={education} />
      </TextContainer>
    </PageContainer>
  );
};

export default Resume;
