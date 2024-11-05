"use client";

import React from "react";
import { Box } from "@mui/material";
import { Step1 } from "./steps/step1";
import { Step2 } from "./steps/step2";
import { Step3 } from "./steps/step3";


export const StepContainer: React.FC = () => {
  return (
    <Box
      id="steps"
      display="grid"
      gap={{
        xs: "4rem",
        md: "0rem",
      }}
    >

      <Step1 />
      <Step2 />
      <Step3 />

    </Box>
  );
};
