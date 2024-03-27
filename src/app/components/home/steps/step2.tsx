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
      <StepParagraph
        step={2}
        title="Synchronize your health data from your phone "
      >
        <Paragraph fontSize={{ xs: "12px", md: "1rem" }}>
          At TakeCare, we’re committed to delivering personalized advice and
          top-notch service. To ensure we provide you with the best possible
          guidance, we kindly request that you synchronize our application with
          the health app integrated on your phone (such as Samsung Health or
          Apple Health).
        </Paragraph>
        <Paragraph fontSize={{ xs: "12px", md: "1rem" }}>
          By doing so, we’ll have access to your health data, allowing us to
          tailor our recommendations specifically to your needs. Your well-being
          is our priority, and this synchronization ensures a seamless
          experience.
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
