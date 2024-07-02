import React from "react";
import Drawer from "@mui/material/Drawer";

function DashboardMenu({ anchor, children, className, sx, isOpen, setOpen }) {
  return (
    <div className={`dashboard-menu ${className}`}>
      <Drawer variant="permanent" anchor={anchor} className={className}>
        {children}
      </Drawer>
    </div>
  );
}

export default DashboardMenu;
