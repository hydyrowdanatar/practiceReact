import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../App";
import { getLanguageValue } from "../../core/utils";

const HeroCard = (props) => {
    const {appLanguage} = useContext(AppContext);
   const {item} = props;
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6">{getLanguageValue('title', item, appLanguage)}</Typography>

          <img src={item.image} alt={"hero-card-image"} style={{width:'50%', height:'100px', objectFit:'contain'}}></img>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HeroCard;
