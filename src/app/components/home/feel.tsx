import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const FeelView: React.FC = () => {
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
            width: "60%",
          }}
        >
          Tell him how do you feel today
        </Typography>
        <Typography
          fontSize="21"
          color="white"
          sx={{
            textAlign: "center",
            width: "60%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi
          odio, porta aliquet pretium in, molestie id leo.
        </Typography>
      </Box>
      <img
        src="/images/feel.png"
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
