import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const HereForYou: React.FC = () => {
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
          He’s here for you
        </Typography>
        <Typography
          fontSize="1rem"
          color="rgba(148, 148, 148, 1)"
          fontWeight={300}
          sx={{
            lineHeight: "2.5",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi
          odio, porta aliquet pretium in, molestie id leo. Sed velit felis,
          fermentum eget est nec, dapibus viverra dolor. In hac Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Maecenas mi odio, porta
          aliquet pretium in, molestie id leo. Sed velit felis, fermentum eget
          est nec, dapibus viverra dolor. In hac
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
