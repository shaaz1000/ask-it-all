import React from "react";
import Drawer from "@mui/material/Drawer";

function DashboardMenu({ anchor, children, className, sx, isOpen, setOpen }) {
  return (
    <div className="dashboard-menu">
      <Drawer
        open={isOpen}
        anchor={anchor}
        className={className}
        onClose={() => setOpen(false)}
        sx={sx}
      >
        {children}
      </Drawer>
    </div>
  );
}

export default DashboardMenu;
