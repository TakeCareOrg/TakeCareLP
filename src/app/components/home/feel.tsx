import { Translation } from "@/core/i18n/i18n";
import { Box, Typography } from "@mui/material";
import React from "react";

export const FeelView: React.FC<{
  i18n: Translation;
}> = ({ i18n }) => {
  const t = (key: keyof Translation) => i18n[key];
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      padding="2rem"
      sx={{
        background:
          "radial-gradient(rgba(111, 129, 200, 0.6), rgba(55, 75, 162, 1));",
        minHeight: "600px",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={4}
        width="80%"
        margin="auto"
      >
        <Typography
          fontSize="65px"
          fontWeight={700}
          color="white"
          fontFamily="Jua"
          sx={{
            textAlign: "center",
            width: "70%",
          }}
        >
          {t("home_feeling_title")}
        </Typography>
        <Typography
          fontSize="21"
          color="white"
          sx={{
            textAlign: "center",
            width: "60%",
          }}
        >
          {t("home_feeling_text")}
        </Typography>
      </Box>
      <img
        src="/images/feel.png"
        alt="feel-image"
        style={{
          position: "absolute",
          top: "10%",
          bottom: "10%",
          height: "80%",
          width: "90%",
          margin: "auto",
        }}
      />
    </Box>
  );
};
