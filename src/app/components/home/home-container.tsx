import { PublicLayout } from "../layouts/public-layout";
import { Box } from "@mui/material";
import React from "react";
import { Hero } from "./hero";
import { HereForYou } from "./here-for-you";
import { HealthDatas } from "./health-datas";

export default function HomeContainer() {
  return (
    <PublicLayout>
      <Box display="grid" gap={{ xs: "4rem", md: "8rem" }}>
        <Hero />
        <HereForYou />
        <HealthDatas />
      </Box>
    </PublicLayout>
  );
}
