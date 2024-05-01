import React from "react";
import "./PreviewContentCard.scss";
import { Card } from "@mui/material";

function PreviewContentCard({ title, onSeeAllClick, children }) {
  return (
    <div className="preview-card">
      <div className="preview-card-title">
        <p className="poppins-medium">{title}</p>
        <a href="" onClick={onSeeAllClick}>
          See all
        </a>
      </div>
      <Card variant="outlined" className="card">
        {children}
      </Card>
    </div>
  );
}

export default PreviewContentCard;
