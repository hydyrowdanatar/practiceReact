import { Container } from "@mui/material";
import React from "react";
import Spacer from "../components/common/Spacer";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Container fixed>
        <Hero />
        <Spacer space={2} />
      </Container>
    </div>
  );
};

export default Home;
