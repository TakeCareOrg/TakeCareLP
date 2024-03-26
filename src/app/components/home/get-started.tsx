"use client";
import { Translation } from "@/core/i18n/i18n";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { AppStoreLink, GooglePlayLink } from "../buttons";

export const GetStarted: React.FC<{
  i18n: Translation;
}> = ({ i18n }) => {
  const t = (key: keyof Translation) => i18n[key];

  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
      alignItems="center"
      width="98%"
      margin="auto"
      sx={{
        background: 'url("/images/get-started-bg.png") center no-repeat',
        backgroundSize: "cover",
        borderRadius: "30px",
      }}
    >
      <Image
        src="/images/get-started.png"
        alt="hero-image"
        width={500}
        height={500}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        gap={4}
        width="90%"
        margin="auto"
      >
        <Typography
          fontSize="55px"
          fontWeight={700}
          color="white"
          fontFamily="Jua"
        >
          {t("home_get_started_title")}
        </Typography>
        <Typography fontSize="1rem" color="white">
          {t("home_get_started_text")}
        </Typography>
        <Box display="flex" gap={4}>
          <AppStoreLink />
          <GooglePlayLink />
        </Box>
      </Box>
    </Box>
  );
};
