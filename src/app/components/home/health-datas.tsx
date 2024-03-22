import { Translation } from "@/core/i18n/i18n";
import { Paragraph } from "@/core/ui/typography";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const HealthDatas: React.FC<{
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
      <Image
        src="/images/health-datas.png"
        alt="health-datas-image"
        width={645}
        height={523}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        gap={2}
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
          {t("home_training_title")}
        </Typography>
        <Paragraph>
          {t("home_training_text1")}
          <span style={{ color: "rgba(54, 112, 155, 1)", fontWeight: "bold" }}>
            {t("home_training_text_color1")}
          </span>
          {t("home_training_text2")}
          <span style={{ color: "rgba(54, 112, 155, 1)", fontWeight: "bold" }}>
            {t("home_training_text_color2")}
          </span>
          {t("home_training_text3")}
        </Paragraph>
      </Box>
    </Box>
  );
};
