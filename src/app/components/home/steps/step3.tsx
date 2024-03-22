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
      gap={4}
      padding="0 2rem 2rem 2rem"
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
      <Box
        height="100%"
        position="relative"
        display="flex"
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

      <StepParagraph
        step={3}
        title="Chat with our AI to get some advices and learn about yourself !"
      >
        <Paragraph>
          In order to provide the best possible advice on how to improve your
          health, Andrew the doc has been trained on a multitude of medical data
          !
        </Paragraph>
      </StepParagraph>
    </Box>
  );
};
