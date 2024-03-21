"use client";
import { Translation } from "@/core/i18n/i18n";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";

const HeaderStyle = makeStyles((theme: string) => ({
  header: {
background: "linear-gradient(to bottom, rgba(52,111,153,1) 0%, rgba(58,132,207,1) 24%, rgba(154,171,236,1) 59%, #7487CF 100%)",
    height: "100vh",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    animation: `$gradient 10s infinite alternate`,
    backgroundSize: "400% 400%",
  },
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "0% 100%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    }
  },
}));

export const Hero: React.FC<{
  i18n: Translation;
}> = ({ i18n }) => {
  const t = (key: keyof Translation) => i18n[key];
  const styles = HeaderStyle("light");

  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
      alignItems="center"
      gap={4}
      padding="2rem"
      className={styles.header}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        gap={4}
        width="80%"
        margin="auto"
      >
        <Typography
          fontSize="40px"
          fontWeight={700}
          color="white"
          fontFamily="Jua"
        >
          {t("home_hero_title")}
        </Typography>
        <Typography fontSize="1rem" color="white">
          {t("home_hero_text")}
        </Typography>
        <Box display="flex" gap={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              padding: "1rem 2rem",
              borderRadius: "10px",
              border: "none",
              boxShadow: "none",
              color: "black",
            }}
          >
            App Store
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              padding: "1rem 2rem",
              borderRadius: "10px",
              border: "none",
              boxShadow: "none",
              color: "black",
            }}
          >
            Google Play
          </Button>
        </Box>
      </Box>

      <Image
        src="/images/hero-phone.png"
        alt="hero-image"
        width={500}
        height={500}
        style={{
          width: "auto !important",
          height: "85% !important",
        }}
      />
    </Box>
  );
};
