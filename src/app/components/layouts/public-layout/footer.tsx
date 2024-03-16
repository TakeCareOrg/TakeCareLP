import { Box, Typography } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={{ xs: "90%", md: "1030px" }}
      margin="auto"
      marginBottom="5rem"
      gap={4}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="flex-start"
        width="100%"
        gap={{ xs: 4, md: 0 }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "row", md: "column" }}
          alignItems={{
            xs: "center",
            md: "flex-start",
          }}
          justifyContent="center"
          gap={2}
        >
          <Typography
            fontSize="20px"
            fontWeight={700}
            color="white"
            fontFamily="Hanson"
          >
            GOTTA <br />
            HODL ‘EM ALL
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          gap={2}
        >
          <Typography
            fontSize="20px"
            fontWeight={700}
            color="white"
            fontFamily="Hanson"
          >
            NAVIGATION
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          gap={2}
        >
          <Typography
            fontSize="20px"
            fontWeight={700}
            color="white"
            fontFamily="Hanson"
          >
            MORE
          </Typography>
        </Box>
      </Box>

      <Box
        height="1px"
        width="100%"
        sx={{
          background: "rgba(255, 255, 255, 0.5)",
        }}
      />
      <Typography
        fontSize="16px"
        fontWeight={300}
        color="white"
        sx={{
          opacity: 0.5,
        }}
      >
        © 2024 -EtherBeasts - All rights reserved
      </Typography>
    </Box>
  );
};
