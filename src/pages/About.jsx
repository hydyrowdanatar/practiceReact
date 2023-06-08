import {
  Card,
  Container,
  useTheme,
  useMediaQuery,
  Skeleton,
  Grid,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Spacer from "../components/common/Spacer";

const About = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.only("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  function getCard() {
    if (isDesktop) {
      return {
        width: "25%",
        height: "100px",
      };
    } else if (isTablet) {
      return {
        width: "50%",
        height: "200px",
      };
    }
    return {
      width: "100%",
      height: "350px",
    };
  }

  const MySkeleton = () => {
    return (
      <div style={{ width: "100%" }}>
        <Skeleton variant="rounded" sx={{ width: "100%", height: "100px" }} />
        <Spacer space={1} />
        <Skeleton variant="rounded" sx={{ width: "50%", height: "10px" }} />
      </div>
    );
  };
  return (
    <div>
      <Container>
        <Card
          sx={{ width: getCard().width, bgcolor: "orange", height: "50px" }}
        >
          {getCard().width}
        </Card>

        <Spacer space={2} />

        <Card sx={{ height: getCard().height, bgcolor: "red", width: "100%" }}>
          {getCard().height}
        </Card>

        <Spacer space={2} />

        <Grid container spacing={2}>
          {new Array(30).fill(0).map((i, j) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={`grid-${j}`}>
                <MySkeleton />
              </Grid>
            );
          })}
        </Grid>

        <Spacer space={2} />
      </Container>
    </div>
  );
};

export default About;
