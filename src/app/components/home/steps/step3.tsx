import { StepParagraph } from "@/core/components/home/step-paragraph";
import { Translation } from "@/core/i18n/i18n";
import { Paragraph } from "@/core/ui/typography";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Step3: React.FC<{
  i18n: Translation;
}> = ({ i18n }) => {
  const t = (key: keyof Translation) => i18n[key];
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", md: "1fr 44px 1fr" }}
      alignItems="center"
      gap={{
        xs: 2,
        md: 4,
      }}
      padding={{
        xs: "0",
        md: "0 2rem 2rem 2rem",
      }}
    >
      <Box
        width={{
          xs: "90%",
          md: "100%",
        }}
        margin="auto"
      >
        <Image
          src="/images/step3.png"
          alt="health-datas-image"
          width={645}
          height={588}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
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
          bottom={0}
          sx={{
            backgroundColor: "#36709B",
            zIndex: 2,
          }}
        />
        <Box
          height="98%"
          width="30px"
          position="relative"
          sx={{
            backgroundColor: "white",
            zIndex: 1,
          }}
        />
      </Box>

      <StepParagraph step={3} title={t("home_step3_title")}>
        <Paragraph fontSize={{ xs: "12px", md: "1rem" }}>
          {t("home_step3_text1")}
          <span style={{ color: "rgba(54, 112, 155, 1)", fontWeight: "bold" }}>
            {t("home_step3_text_color1")}
          </span>
          {t("home_step3_text2")}
          <span style={{ color: "rgba(54, 112, 155, 1)", fontWeight: "bold" }}>
            {t("home_step3_text_color2")}
          </span>
        </Paragraph>
      </StepParagraph>
    </Box>
  );
};
