import { Box } from "@mui/material";
import Navbar from "./navbar";
import { Footer } from "./footer";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const PublicLayout: React.FC<
  PropsWithChildren & {
    privacyPolicy?: boolean;
  }
> = ({ children, privacyPolicy }) => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      width="100vw"
      height="100vh"
      overflow="auto"
      className="thin-scrollbar"
      sx={{
        backgroundColor: "#EEEEEE",
        scrollBehavior: "smooth",
      }}
    >
      <Box
        className="public-layout-container"
        margin="auto"
        display="grid"
        gap={{ xs: "4rem", md: "8rem" }}
      >
        <Navbar privacyPolicy={privacyPolicy} />
        <Box display="grid" gap={{ xs: "4rem", md: "8rem" }}>
          {children}
        </Box>
        <Footer />
      </Box>
      <Link
        href="#hero"
        style={{
          textDecoration: "none",
          backgroundColor: "white",
          padding: "0.9rem 1rem",
          borderRadius: "100px",
          border: "none",
          color: "black",
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
        }}
      >
        ↑
      </Link>
    </Box>
  );
};
