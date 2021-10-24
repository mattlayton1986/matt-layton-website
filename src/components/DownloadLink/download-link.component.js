import React from "react";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const DownloadLink = ({ children, ...linkProps }) => (
  <Link component={RouterLink} {...linkProps} underline="none">
    {children}
  </Link>
);

export default DownloadLink;
