import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const verticalAlignment = {
  display: "flex",
  flexDirection: "column",
};

export const StyledList = styled(List)`
  ${verticalAlignment}
`;

export const StyledListItem = styled(ListItem)`
  ${verticalAlignment}
`;

export const StyledHighlight = styled(Typography)(({ theme }) => ({
  color: theme.palette.success.main,
  fontWeight: 700,
}));

export const StyledSecondary = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  color: theme.palette.grey[700],
}));
