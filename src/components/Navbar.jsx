import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import SelectLanguage from "./navbar/SelectLanguage";
import "./navbar.css";
import { MenuButton, OnlyDesktop } from "./mui-styled";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation();

  const navigator = useNavigate();
  return (
    <div>
      <div
        style={{ position: "fixed", top: 0, width: "100%" }}
        className="app-navbar"
      >
        <Container>
          <Stack
            sx={{ width: "100%", pt: 2, pb: 2 }}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h4">Logo</Typography>

            <OnlyDesktop
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button onClick={() => navigator("/")}>{t("home_page")}</Button>
              <Button onClick={() => navigator("/about")}>
                {t("about_page")}
              </Button>
            </OnlyDesktop>

            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={1}
            >
              <SelectLanguage />
              <MenuButton>
                <MenuIcon />
              </MenuButton>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
