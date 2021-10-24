import React from "react";
import useTheme from "@mui/styles/useTheme";
import PageContainer from "../../containers/page.container";
import TextContainer from "../../containers/text.container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import DownloadLink from "../../components/DownloadLink/download-link.component";
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
      {/* Resume header */}
      <TextContainer justify={{ xl: "flex-start" }}>
        <Typography variant="h1">Résumé</Typography>
        {/* Download links */}
        <TextContainer
          direction={{ xl: "row" }}
          justify={{ xl: "space-evenly" }}
          align={{ xl: "flex-start" }}
          padding={{ xl: "0" }}
        >
          {links.documents.map((document) => (
            <DownloadLink
              variant="h6"
              key={document.name}
              to={document.filepath}
              download={document.name}
              target="_blank"
            >
              {`Download as ${document.type}`}
            </DownloadLink>
          ))}
        </TextContainer>

        <Divider flexItem />

        {/* Personal info */}
        <TextContainer>
          <Typography variant="h2">Matthew Layton</Typography>
        </TextContainer>

        {/* Profile */}
        <TextContainer align={{ xl: "flex-start" }}>
          <Typography variant="h4" component="h3" align="left" sx={{ pb: 2 }}>
            Profile
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            {profile}
          </Typography>
        </TextContainer>

        <Divider flexItem />

        {/* Skills */}
        <TextContainer align={{ xl: "flex-start" }}>
          <Typography variant="h4" component="h3" align="left" sx={{ pb: 2 }}>
            Skills
          </Typography>
          {skills.map((skillset) => (
            <React.Fragment key={skillset.category}>
              <Typography
                align="left"
                variant="overline"
                sx={{ textTransform: "uppercase", fontSize: "1.1rem" }}
              >
                {skillset.category}
              </Typography>
              <Typography
                align="left"
                variant="body1"
                sx={{ marginLeft: spacing(4) }}
              >
                {skillset.skills.join("; ")}
              </Typography>
            </React.Fragment>
          ))}
        </TextContainer>

        <Divider flexItem />

        {/* Experience */}

        <TextContainer align={{ xl: "flex-start" }}>
          <Typography variant="h4" component="h3" align="left" sx={{ pb: 2 }}>
            Experience
          </Typography>
          <StyledList>
            {experience.map((job) => (
              <StyledListItem key={job.jobTitle} alignItems="flex-start">
                <Typography
                  align="left"
                  sx={{ textTransform: "uppercase", color: palette.grey[700] }}
                >
                  {job.dates}
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  sx={{
                    color: palette.success.main,
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  {job.jobTitle}
                </Typography>
                <Typography align="left" sx={{ color: palette.grey[700] }}>
                  {job.company}
                </Typography>
                <StyledList>
                  {job.responsibilities.map((responsibility, index) => (
                    <StyledListItem key={index} alignItems="flex-start">
                      {responsibility}
                    </StyledListItem>
                  ))}
                </StyledList>
              </StyledListItem>
            ))}
          </StyledList>
        </TextContainer>

        <Divider flexItem />

        {/* Education */}

        <TextContainer align={{ xl: "flex-start" }}>
          <Typography variant="h4" component="h3" align="left" sx={{ pb: 2 }}>
            Education
          </Typography>
          <StyledList>
            {education.map((org) => (
              <StyledListItem key={org.organization} alignItems="flex-start">
                <Typography
                  variant="h6"
                  sx={{
                    textTransform: "uppercase",
                    color: palette.success.main,
                    fontWeight: 700,
                  }}
                >
                  {org.organization}
                </Typography>
                <StyledList>
                  {org.courses.map((course) => (
                    <StyledListItem key={course.name} alignItems="flex-start">
                      <Typography
                        sx={{
                          textTransform: "uppercase",
                          color: palette.grey[700],
                        }}
                      >
                        {course.name}
                      </Typography>
                      <Typography>{course.instructor}</Typography>
                      <Typography>{course.status}</Typography>
                    </StyledListItem>
                  ))}
                </StyledList>
              </StyledListItem>
            ))}
          </StyledList>
        </TextContainer>
      </TextContainer>
    </PageContainer>
  );
};

export default Resume;
