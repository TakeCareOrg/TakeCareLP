import { StepParagraph } from "@/core/components/home/step-paragraph";
import { Translation } from "@/core/i18n/i18n";
import { Paragraph } from "@/core/ui/typography";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Step2: React.FC<{
  i18n: Translation;
}> = ({ i18n }) => {
  const t = (key: keyof Translation) => i18n[key];
  return (
    <Box
      display={{
        xs: "flex",
        md: "grid",
      }}
      flexDirection="column-reverse"
      gridTemplateColumns={{ xs: "1fr", md: "1fr 44px 1fr" }}
      alignItems="center"
      gap={{
        xs: 2,
        md: 4,
      }}
      padding={{
        xs: "0",
        md: "0 2rem",
      }}
    >
      <StepParagraph step={2} title={t("home_step2_title")}>
        <Paragraph fontSize={{ xs: "12px", md: "1rem" }}>
          {t("home_step2_text1")}
          <span style={{ color: "rgba(54, 112, 155, 1)", fontWeight: "bold" }}>
            {t("home_step2_text_color1")}
          </span>
          {t("home_step2_text2")}
        </Paragraph>
        <Paragraph fontSize={{ xs: "12px", md: "1rem" }}>
          {t("home_step2_text3")}
          <span style={{ color: "rgba(54, 112, 155, 1)", fontWeight: "bold" }}>
            {t("home_step2_text_color2")}
          </span>
          {t("home_step2_text4")}
        </Paragraph>
      </StepParagraph>

      <Box
        height="100%"
        position="relative"
        display={{
          xs: "none",
          md: "flex",
        }}
        flexDirection="column"
        alignItems="center"
      >
        <Box
          height="44px"
          width="44px"
          borderRadius="100%"
          position="absolute"
          top="20%"
          sx={{
            backgroundColor: "#36709B",
            zIndex: 2,
          }}
        />
        <Box
          height="100%"
          width="30px"
          position="relative"
          sx={{
            backgroundColor: "white",
            zIndex: 1,
          }}
        />
      </Box>
      <Box
        width={{
          xs: "90%",
          md: "100%",
        }}
        margin="auto"
      >
        <Image
          src="/images/step2.png"
          alt="health-datas-image"
          width={645}
          height={588}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};
