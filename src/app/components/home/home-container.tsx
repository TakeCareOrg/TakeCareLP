"use client";

import { PublicLayout } from "../layouts/public-layout";
import { Box } from "@mui/material";
import React from "react";
import { Hero } from "./hero";
import { HereForYou } from "./here-for-you";
import { HealthDatas } from "./health-datas";
import { FeelView } from "./feel";
import { Lang } from "@/core/types";
import { useI18N } from "@/core/i18n/i18n-provider";
import { getTranslations } from "@/core/i18n/i18n";
import { StepContainer } from "./steps-container";
import { GetStarted } from "./get-started";

export default function HomeContainer({ langs }: { langs: Lang[] }) {
  const { locale } = useI18N();
  const i18n = getTranslations(locale);

  return (
    <PublicLayout langs={langs}>
      <Box display="grid" gap={{ xs: "4rem", md: "8rem" }}>
        <Hero i18n={i18n} />
        <HereForYou i18n={i18n} />
        <HealthDatas i18n={i18n} />
        <FeelView i18n={i18n} />
        <StepContainer i18n={i18n} />
        <GetStarted i18n={i18n} />
      </Box>
    </PublicLayout>
  );
}
