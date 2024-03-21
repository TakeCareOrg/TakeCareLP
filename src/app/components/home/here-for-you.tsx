import { Translation } from "@/core/i18n/i18n";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const HereForYou: React.FC<{
  i18n: Translation;
}> = ({ i18n }) => {
  const t = (key: keyof Translation) => i18n[key];
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
      alignItems="center"
      gap={4}
      padding="2rem"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        gap={4}
        width="70%"
        margin="auto"
      >
        <Typography
          fontSize="40px"
          fontWeight={700}
          color="rgba(54, 112, 155, 1)"
          fontFamily="Jua"
          sx={{
            lineHeight: "1",
          }}
        >
          {t("home_here_for_you_title")}
        </Typography>
        <Typography
          fontSize="1rem"
          color="rgba(148, 148, 148, 1)"
          fontWeight={300}
          sx={{
            lineHeight: "2.5",
          }}
        >
          {t("home_here_for_you_text1")}
          <span style={{ color: "rgba(54, 112, 155, 1)", fontWeight: "bold" }}>
            {t("home_here_for_you_text_color1")}
          </span>
          {t("home_here_for_you_text2")}
          <span style={{ color: "rgba(54, 112, 155, 1)", fontWeight: "bold" }}>
            {t("home_here_for_you_text_color2")}
          </span>
          {t("home_here_for_you_text3")}
          <span style={{ color: "rgba(54, 112, 155, 1)", fontWeight: "bold" }}>
            {t("home_here_for_you_text_color3")}
          </span>
          {t("home_here_for_you_text4")}
        </Typography>
      </Box>

      <Image
        src="/images/here-for-you.png"
        alt="here-for-you-image"
        width={645}
        height={463}
      />
    </Box>
  );
};
