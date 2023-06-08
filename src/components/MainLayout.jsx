import React from "react";
import { Outlet } from "react-router-dom";
import Spacer from "./common/Spacer";

import Navbar from "./Navbar";
import { Box, Container } from "@mui/material";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />

      <Spacer space={6} />

      <div>
        <Outlet />
      </div>
      <Spacer space={2} />

      <Box sx={{ width: "100%", bgcolor: "#000", color: "#fff", pt: 2, pb: 2 }}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </div>
  );
};

export default MainLayout;
