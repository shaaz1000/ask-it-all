import React from "react";
import Avatar from "@mui/material/Avatar";
import "./_Header.scss";
import SearchField from "../reusable/searchField/SearchField";
import Button from "../reusable/button/Button";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../utils/constants";
import Select from "../reusable/select/plainSelect/Select";

function Header() {
  let navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(LOGIN);
  };

  return (
    <div className="Header">
      <Avatar src="" sx={{ width: 30, height: 30 }} />
      <div className="headerGroup">
        <SearchField placeholder={"Search..."} />
        <Select />
        <Button width={"25%"} label="Log in" onClick={handleLoginClick} />
      </div>
    </div>
  );
}

export default Header;
