import React, { useContext } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AppContext } from "../../App";
import { Language } from "../../core/constant";
import i18next from 'i18next'


const SelectLanguage = () => {
  const { appLanguage, setAppLanguage } = useContext(AppContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function chageLanguage(lng) {
    setAppLanguage(lng);
    i18next.changeLanguage(lng)
    window.localStorage.setItem('language', lng)
    handleClose()
  }
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {appLanguage}
      </Button>
      <Menu
        id="basic-menu"
        disableScrollLock
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => chageLanguage(Language.TURKMEN)}>TURKMEN</MenuItem>
        <MenuItem onClick={() => chageLanguage(Language.ENGLISH)}>ENGLISH</MenuItem>
      </Menu>
    </div>
  );
};

export default SelectLanguage;
