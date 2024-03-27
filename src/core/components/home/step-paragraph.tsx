import { Box, Typography } from "@mui/material";
import React from "react";

export const StepParagraph: React.FC<{
  step: number;
  title: string;
  children: React.ReactNode;
}> = ({ step, title, children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
      gap={4}
      width="80%"
      height="80%"
      margin="auto"
    >
      <Box
        display="flex"
        alignItems="center"
        borderRadius="20px"
        padding="0.5rem 2rem"
        sx={{
          backgroundColor: "#394792",
        }}
      >
        <Typography
          fontWeight={700}
          sx={{
            color: "#9CAAF0",
          }}
        >
          Step {step}
        </Typography>
      </Box>
      <Typography
        fontSize={{ xs: "20px", md: "40px" }}
        fontWeight={700}
        color="rgba(54, 112, 155, 1)"
        //   fontFamily="Jua"
        sx={{
          lineHeight: "1",
        }}
      >
        {title}
      </Typography>

      {children}
    </Box>
  );
};
