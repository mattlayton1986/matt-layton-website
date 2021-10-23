import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.dark,
  "&:hover, &:active": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const MenuButton = ({ handleClick }) => (
  <StyledIconButton aria-label="main-menu" size="large" onClick={handleClick}>
    <MenuIcon fontSize="large" />
  </StyledIconButton>
);

export default MenuButton;
