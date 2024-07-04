import { AddCircleOutlineOutlined } from "@mui/icons-material";
import React from "react";
import "./EditableCard.scss";
import { Divider, IconButton } from "@mui/material";
import Button from "../reusable/button/Button";

function EditableCard({ cardTitle, onAdd, data }) {
  return (
    <div className="editable-card">
      <div className="title">
        <p className="poppins-medium">{cardTitle}</p>
        <IconButton>
          <AddCircleOutlineOutlined />
        </IconButton>
      </div>
      {data?.map((i, index) => (
        <div key={index} className="listitem">
            <div className="content">
              <div>
                <p className="poppins-semibold">{i.title}</p>
                <p className="poppins-light">{i.subTitle}</p>
              </div>
              <Button variant={"cta"} label={"Delete"} />
            </div>
          <Divider />
        </div>
      ))}
      <br/>
      <br/>
    </div>
  );
}

export default EditableCard;
