import { Grid } from "@mui/material";
import React from "react";
import data from "../assets/data.json.json";
import HeroCard from "./card/HeroCard";

const Hero = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {data.map((it, i) => {
          return (
            <Grid item key={i} xs={6} sm={4} md={3}>
              <HeroCard item={it}/>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Hero;
