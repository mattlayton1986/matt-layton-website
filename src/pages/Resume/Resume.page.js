import React from "react";
import useTheme from "@mui/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import PageContainer from "../../containers/page.container";
import TextContainer from "../../containers/text.container";
import DownloadLinks from "../../containers/download-links.container";
import Profile from "../../containers/profile.container";
import Skills from "../../containers/skills.container";
import Experience from "../../containers/experience.container";
import Education from "../../containers/education.container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import links from "../../data/links";
import resume from "../../data/resume";

const Resume = () => {
  const theme = useTheme();
  const { spacing } = theme;
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { profile, experience, education, skills } = resume;

  return (
    <PageContainer
      maxWidth="lg"
      direction={{ xl: "column" }}
      justify={{ xl: "flex-start" }}
    >
      <TextContainer justify={{ xl: "flex-start" }}>
        {/* Resume header */}
        <Typography variant={matches ? "h2" : "h1"} component="h1">
          Résumé
        </Typography>
        {/* Download links */}
        <DownloadLinks documents={links.documents} />

        <Divider flexItem />

        {/* Personal info */}
        <TextContainer margin={{ md: "0" }} padding={{ md: spacing(2, 0) }}>
          <Typography variant={matches ? "h4" : "h2"} component="h2">
            Matthew Layton
          </Typography>
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
