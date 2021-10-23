import React from "react";
import Container from "@mui/material/Container";
import MenuButton from "../MenuButton/menu-button.component";
import NavMenu from "../NavMenu/nav-menu.component";

const containerStyles = {
  background: "transparent",
  display: "flex",
  justifyContent: "flex-end",
  zIndex: "appBar",
  position: "fixed",
  py: 3, // Padding top/bottom (y axis)
};

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (evt) => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = (evt) => {
    setAnchorEl(null);
  };

  return (
    <Container component="header" maxWidth="false" sx={containerStyles}>
      <MenuButton handleClick={handleClick} />
      <NavMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Header;
