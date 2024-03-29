"use client";
import { Translation } from "@/core/i18n/i18n";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import { AppStoreLink, GooglePlayLink } from "../buttons";

const HeaderStyle = makeStyles((theme: string) => ({
  header: {
    background:
      "linear-gradient(to bottom, rgba(52,111,153,1) 0%, rgba(58,132,207,1) 24%, rgba(154,171,236,1) 59%, #7487CF 100%)",
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
    },
  },
}));

export const Hero: React.FC<{
  i18n: Translation;
}> = ({ i18n }) => {
  const t = (key: keyof Translation) => i18n[key];
  const styles = HeaderStyle("light");

  return (
    <Box
      id="hero"
      display={{
        xs: "flex",
        md: "grid",
      }}
      gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
      flexDirection="column"
      alignItems="center"
      gap={{
        xs: "0",
        md: "2rem",
      }}
      padding={{
        xs: "0rem",
        md: "2rem",
      }}
      height="100vh"
      className={styles.header}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems={{
          xs: "center",
          md: "flex-start",
        }}
        textAlign={{
          xs: "center",
          md: "left",
        }}
        justifyContent="center"
        gap={4}
        width={{
          xs: "90%",
          md: "80%",
        }}
        margin="auto"
        marginTop={{ xs: "10rem", md: "auto" }}
      >
        <Typography
          fontSize={{ xs: "24px", md: "40px" }}
          fontWeight={700}
          color="white"
          fontFamily="Plus Jakarta Sans"
        >
          {t("home_hero_title")}
        </Typography>
        <Typography fontSize="1rem" color="white">
          {t("home_hero_text")}
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          gap={{
            xs: "1rem",
            md: "2rem",
          }}
        >
          <AppStoreLink />
          <GooglePlayLink />
        </Box>
      </Box>
      <Box
        width={{ xs: "70%", md: "auto" }}
        height={{ xs: "auto", md: "85%" }}
        margin="auto"
      >
        <Image
          src="/images/hero-phone.png"
          alt="hero-image"
          width={500}
          height={500}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
    </Box>
  );
};
