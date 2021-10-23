import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import {
  iconContainerStyles,
  textContainerStyles,
  socialsContainerStyles,
  socialsIconStyles,
} from "./nav-menu.styled";
import links from "../../data/links";

const NavMenu = ({ anchorEl, open, handleClose }) => (
  <Menu
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    anchorOrigin={{
      horizontal: "left",
      vertical: "center",
    }}
    transformOrigin={{
      horizontal: "right",
      vertical: "center",
    }}
  >
    <MenuList>
      {links.mainNav.map((link) => {
        let IconComponent = link.icon;
        return (
          <Link
            key={link.name}
            component={RouterLink}
            to={link.route}
            underline="none"
            color="gray"
            onClick={handleClose}
          >
            <MenuItem>
              <ListItemIcon sx={iconContainerStyles}>
                <IconComponent fontSize="medium" />
              </ListItemIcon>
              <ListItemText
                sx={textContainerStyles}
                primaryTypographyProps={{
                  variant: "h6",
                }}
              >
                {link.name}
              </ListItemText>
            </MenuItem>
          </Link>
        );
      })}
    </MenuList>
    <Divider />
    <MenuList sx={socialsContainerStyles}>
      {links.socialNav.map((link) => {
        let IconComponent = link.icon;
        return (
          <Link
            key={link.name}
            href={link.url}
            title={`${link.name}: ${link.username}`}
            rel="noopener"
            target="_blank"
            onClick={handleClose}
          >
            <ListItemIcon sx={socialsIconStyles}>
              <IconComponent fontSize="large" />
            </ListItemIcon>
          </Link>
        );
      })}
    </MenuList>
  </Menu>
);

export default NavMenu;
