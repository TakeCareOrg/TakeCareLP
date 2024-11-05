import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Lang } from "@/core/types";
import { LangSelect } from "./lang-select";

export const Navbar: React.FC<{
  langs?: Lang[];
  privacyPolicy?: boolean;
}> = ({ langs, privacyPolicy = false }) => {

  return (
    <AppBar
      position="absolute"
      sx={{
        background: privacyPolicy ? "#7387CE" : "transparent",
        animation: `$gradient 10s infinite alternate`,
        boxShadow: "none",
        top: 0,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Toolbar
          disableGutters={true}
          sx={{
            width: { xs: "100%", md: "85%" },
            margin: "auto",
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            gap={2}
            width="100%"
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <Image
                src="/images/logo.png"
                alt="logo"
                width={75}
                height={46}
                style={{
                  height: "auto !important",
                }}
              />
              <Typography
                fontWeight={700}
                fontFamily="Plus Jakarta Sans"
                fontSize="2rem"
                sx={{ color: "white", display: { xs: "none", md: "block" } }}
              >
                TakeCareAI
              </Typography>
            </Link>

            <LangSelect options={langs} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
