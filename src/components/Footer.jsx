import { Grid, Stack } from "@mui/material";
import React from "react";
import GridFooter from "./footer/GridFooter";

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={6} md={3}>
        <GridFooter />
      </Grid>
      <Grid item xs={6} sm={6} md={3}>
        <GridFooter />
      </Grid>
      <Grid item xs={6} sm={6} md={3}>
        <GridFooter />
      </Grid>
      <Grid item xs={6} sm={6} md={3}>
        <GridFooter />
      </Grid>
    </Grid>
  );
};

export default Footer;
