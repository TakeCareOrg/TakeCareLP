import AppleIcon from "@/core/assets/svg/apple";
import GooglePlayIcon from "@/core/assets/svg/google-play";
import { StoreLink } from "@/core/ui/link";
import { Box, Typography } from "@mui/material";

export const AppStoreLink = () => {
  return (
    <StoreLink href="https://apps.apple.com/us/app/" target="_blank">
      <AppleIcon />

      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Box fontWeight={200} fontSize="0.75rem">
          Download from
        </Box>
        <Typography fontWeight={700} fontSize="1rem">
          App store
        </Typography>
      </Box>
    </StoreLink>
  );
};

export const GooglePlayLink = () => {
  return (
    <StoreLink href="https://play.google.com/store/apps/" target="_blank">
      <GooglePlayIcon />

      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Box fontWeight={200} fontSize="0.75rem">
          Download from
        </Box>
        <Typography fontWeight={700} fontSize="1rem">
          Google Play
        </Typography>
      </Box>
    </StoreLink>
  );
};
