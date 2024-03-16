import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
      alignItems="center"
      gap={4}
      padding="2rem"
      sx={{
        background:
          "linear-gradient(180deg, rgba(52, 111, 153, 1) 0%, rgba(120, 137, 210, 1) 100%)",
        height: "100vh",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
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
          Meet Andrew, the Friend who is Always by your side for your health !
        </Typography>
        <Typography fontSize="1rem" color="white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi
          odio, porta aliquet pretium in, molestie id leo. Sed velit felis,
          fermentum eget est nec, dapibus viverra dolor. In hac
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
