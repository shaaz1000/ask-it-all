import React from "react";
import Drawer from "@mui/material/Drawer";

function DashboardMenu({ anchor, children, className, sx }) {
  return (
    <div className="dashboard-menu">
      <Drawer
        variant="permanent"
        anchor={anchor}
        className={className}
        sx={sx}
      >
        {children}
      </Drawer>
    </div>
  );
}

export default DashboardMenu;
