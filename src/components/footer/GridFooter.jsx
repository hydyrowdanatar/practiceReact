import { Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const GridFooter = () => {
  const { t } = useTranslation();

  const ancor_tags = [
    {
      id: 1,
      content: t("footer.home"),
    },
    {
      id: 2,
      content: t("footer.home-menu"),
    },
    {
      id: 3,
      content: t("footer.home"),
    },
    {
      id: 4,
      content: t("footer.home-menu"),
    },
  ];
  return (
    <Stack sx={{ textAlign: "center" }}>
      <Typography variant="h5">{t("footer.home")}</Typography>
      {ancor_tags.map((it, i) => {
        return (
          <a
            href=""
            key={i}
            style={{
              color: "#fff",
              textDecoration: "none",
              marginTop: "10px",
              fontFamily: "sans-serif",
            }}
          >
            {it.content}
          </a>
        );
      })}
    </Stack>
  );
};

export default GridFooter;
