import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";

export const Navbar: React.FC = () => {
  return (
    <AppBar
      position="absolute"
      sx={{
        background: "transparent",
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
                fontFamily="Jua"
                fontSize="2rem"
                sx={{ color: "white" }}
              >
                TakeCare
              </Typography>
            </Link>

            <Button
              variant="outlined"
              color="inherit"
              sx={{
                color: "white",
                textTransform: "none",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                border: "1px solid white",
                borderRadius: "10px",
              }}
            >
              <LanguageIcon />
              English
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
