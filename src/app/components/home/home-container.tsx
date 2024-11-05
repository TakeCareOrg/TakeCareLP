"use client";

import { PublicLayout } from "../layouts/public-layout";
import { Box } from "@mui/material";
import React from "react";
import { Hero } from "./hero";
import { HereForYou } from "./here-for-you";
import { HealthDatas } from "./health-datas";
import { FeelView } from "./feel";
import { Lang } from "@/core/types";
import { StepContainer } from "./steps-container";
import { GetStarted } from "./get-started";

export default function HomeContainer() {
  return (
    <PublicLayout>
      <Box display="grid" gap={{ xs: "4rem", md: "8rem" }}>
        <Hero />
        <HereForYou />
        <HealthDatas />
        <FeelView />
        <StepContainer />
        <GetStarted />
      </Box>
    </PublicLayout>
  );
}
