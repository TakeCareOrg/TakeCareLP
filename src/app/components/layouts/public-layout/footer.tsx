import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      {
        title: "Home",
        url: "#hero",
      },
      {
        title: "Andrew",
        url: "#ia",
      },
      {
        title: "Steps",
        url: "#steps",
      },
    ],
  },
  {
    title: "Others",
    links: [
      {
        title: "Terms of Service",
        url: "/terms",
      },
      {
        title: "Privacy Policy",
        url: "/policy",
      },
      {
        title: "Contact Us",
        url: "/contact",
      },
    ],
  },
  {
    title: "TakeCare App",
    links: [
      {
        title: "App Store",
        url: "https://www.apple.com/ios/app-store/",
      },
      {
        title: "Google Play",
        url: "https://play.google.com/store",
      },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <Box
      width="100%"
      height="655px"
      position="relative"
      display="grid"
      gridTemplateColumns={{ xs: "1fr", md: "auto 1fr" }}
      sx={{
        background: "url('/images/footer-bg.png') center no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        display={{
          xs: "none",
          md: "block",
        }}
        marginTop="auto"
        height="90%"
        width="auto"
      >
        <Image
          src="/images/footer.png"
          alt="footer"
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        gap={{
          xs: 4,
          md: 8,
        }}
        width="80%"
        margin="auto"
        height="100%"
      >
        <Typography
          fontSize={{
            xs: "30px",
            md: "55px",
          }}
          fontWeight={700}
          color="white"
          fontFamily="Jua"
        >
          TakeCare
        </Typography>
        <Typography
          fontSize={{
            xs: "21px",
            md: "39px",
          }}
          fontWeight={700}
          color="white"
          fontFamily="Jua"
        >
          Lorem ipsum dolor si amet, consectetur
        </Typography>
        <Box
          display="flex"
          flexDirection={{
            xs: "column",
            md: "row",
          }}
          alignItems="flex-start"
          justifyContent={{
            xs: "center",
            md: "space-between",
          }}
          gap={{
            xs: 4,
            md: 0,
          }}
          width="80%"
        >
          {footerLinks.map((link) => (
            <Box
              key={link.title}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap={{
                xs: 1,
                md: 2,
              }}
            >
              <Typography color="white" fontSize="20px" fontWeight={500}>
                {link.title}
              </Typography>
              {link.links.map((l) => (
                <TypographyFooter key={l.title}>
                  <Link
                    href={l.url}
                    target={l.url.startsWith("#") ? "_self" : "_blank"}
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    {l.title}
                  </Link>
                </TypographyFooter>
              ))}
            </Box>
          ))}
        </Box>
        <Typography
          color="white"
          fontSize="12px"
          sx={{
            opacity: 0.7,
          }}
        >
          © 2024 TakeCare. All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

const TypographyFooter: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Box color={"white"} fontSize={"1rem"} fontWeight={200}>
      {children}
    </Box>
  );
};
