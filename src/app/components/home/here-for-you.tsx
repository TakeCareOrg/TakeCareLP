
import { t } from "@/core/i18n/i18n";
import { useI18N } from "@/core/i18n/i18n-provider";
import { Paragraph } from "@/core/ui/typography";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const HereForYou: React.FC = () => {
  const { lang } = useI18N();

  return (
    <Box
      id="ia"
      display={{
        xs: "flex",
        md: "grid",
      }}
      gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
      flexDirection="column-reverse"
      alignItems="center"
      gap={4}
      padding={{
        xs: "0",
        md: "2rem",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        gap={4}
        width={{
          xs: "90%",
          md: "70%",
        }}
        margin="auto"
      >
        <Typography
          fontSize={{ xs: "20px", md: "40px" }}
          fontWeight={700}
          color="rgba(54, 112, 155, 1)"
          fontFamily="Plus Jakarta Sans"
          sx={{
            lineHeight: "1",
          }}
        >

          {t("home_here_for_you_title", lang)}
        </Typography>
        <Paragraph fontSize={{ xs: "12px", md: "1rem" }}>
          {t("home_here_for_you_text1", lang)}
          <span style={{ color: "rgba(54, 112, 155, 1)", fontWeight: "bold" }}>
            {t("home_here_for_you_text_color1", lang)}
          </span>
          {t("home_here_for_you_text2", lang)}
          <span style={{ color: "rgba(54, 112, 155, 1)", fontWeight: "bold" }}>
            {t("home_here_for_you_text_color2", lang)}
          </span>
          {t("home_here_for_you_text3", lang)}
          <span style={{ color: "rgba(54, 112, 155, 1)", fontWeight: "bold" }}>
            {t("home_here_for_you_text_color3", lang)}
          </span>
          {t("home_here_for_you_text4", lang)}

        </Paragraph>
      </Box>

      <Box width="90%" height="auto" margin="auto">
        <Image
          src="/images/here-for-you.png"
          alt="here-for-you-image"
          width={645}
          height={463}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
};
