import { Translation } from "@/core/i18n/i18n";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
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
      padding={{
        xs: "0rem",
        md: "2rem",
      }}
      sx={{
        background:
          "radial-gradient(rgba(111, 129, 200, 0.6), rgba(55, 75, 162, 1));",
        minHeight: {
          xs: "400px",
          md: "600px",
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={4}
        width={{
          xs: "95%",
          md: "80%",
        }}
        margin="auto"
      >
        <Typography
          fontSize={{
            xs: "35px",
            md: "65px",
          }}
          fontWeight={700}
          color="white"
          fontFamily="Plus Jakarta Sans"
          sx={{
            textAlign: "center",
            width: {
              xs: "95%",
              md: "70%",
            },
          }}
        >
          {t("home_feeling_title")}
        </Typography>
        <Typography
          fontSize={{
            xs: "16px",
            md: "21px",
          }}
          color="white"
          sx={{
            textAlign: "center",
            width: {
              xs: "100%",
              md: "60%",
            },
          }}
        >
          {t("home_feeling_text")}
        </Typography>
      </Box>

      <Box
        position="absolute"
        top="10%"
        bottom="10%"
        height="80%"
        width="90%"
        margin="auto"
        display={{
          xs: "none",
          md: "block",
        }}
      >
        <Image
          src="/images/feel.png"
          alt="feel-image"
          width={645}
          height={523}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};
