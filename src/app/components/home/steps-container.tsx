"use client";

import React from "react";
import { Box } from "@mui/material";
import { Translation } from "@/core/i18n/i18n";
import { Step1 } from "./steps/step1";
import { Step2 } from "./steps/step2";
import { Step3 } from "./steps/step3";

export const StepContainer: React.FC<{
  i18n: Translation;
}> = ({ i18n }) => {
  return (
    <Box display="grid" gap={0}>
      <Step1 i18n={i18n} />
      <Step2 i18n={i18n} />
      <Step3 i18n={i18n} />
    </Box>
  );
};
