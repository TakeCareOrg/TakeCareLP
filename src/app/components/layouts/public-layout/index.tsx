import { Box } from "@mui/material";
import Navbar from "./navbar";
import { Footer } from "./footer";
import { AvailableLocale } from "@/core/i18n/i18n";
import { Lang } from "@/core/types";

export const PublicLayout: React.FC<{
  locale?: AvailableLocale;
  langs?: Lang[];
  children: React.ReactNode;
}> = ({ locale, langs, children }) => {
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
        backgroundColor: "white",
        scrollBehavior: "smooth",
      }}
    >
      <Box
        className="public-layout-container"
        margin="auto"
        display="grid"
        gap={{ xs: "4rem", md: "8rem" }}
      >
        <Navbar locale={locale} langs={langs} />
        <Box>{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
};
