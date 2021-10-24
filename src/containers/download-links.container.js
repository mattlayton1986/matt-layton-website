import React from "react";
import TextContainer from "./text.container";
import DownloadLink from "../components/DownloadLink/download-link.component";
import styled from "@emotion/styled";

const DownloadLinks = ({ documents }) => (
  <TextContainer
    direction={{ xl: "row" }}
    justify={{ xl: "space-evenly" }}
    padding={{ xl: "0" }}
  >
    {documents.map((document) => (
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
);

export default DownloadLinks;
