import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import "./Menu.scss";

function Menu({ label, data, selectedIndex }) {
  return (
    <div className="menu">
      {label && <p className="poppins-medium">{label}</p>}
      {data ? (
        <List className="menu-list">
          {data.map((li, index) => (
            <ListItem key={index} disablePadding disableGutters>
              <ListItemButton
                type="secondary"
                disableGutters
                selected={selectedIndex == index}
              >
                <ListItemIcon
                  className={`menu-item-icon ${
                    selectedIndex == index ? "menu-item-selected" : ""
                  }`}
                >
                  {li?.icon}
                </ListItemIcon>
                <ListItemText
                  primary={li?.label}
                  className="poppins-semibold menu-item-text"
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : null}
    </div>
  );
}

export default Menu;
