"use client";

import { useCallback, useMemo } from "react";
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Typography,
  styled,
} from "@mui/material";
import { AvailableLang, Lang, availableLangs } from "@/app/types";
import { useEnv } from "@/app/providers/env-provider";
import { useI18N } from "@/app/i18n/i18n-provider";
import LanguageIcon from "@mui/icons-material/Language";

export const LangSelect: React.FC<{
  options?: Lang[];
  onChange?: (_value: AvailableLang) => void;
  sx?: SxProps;
}> = ({ options = [], onChange, sx = {} }) => {
  const { locale, setLocale } = useI18N();
  const { langs } = useEnv();

  const langOptions = useMemo(
    () => (options.length > 0 ? options : langs.map((l) => availableLangs[l])),
    [options, langs]
  );

  const handleChange = useCallback(
    (e: SelectChangeEvent<unknown>) => {
      const locale = e.target.value as AvailableLang;

      onChange?.(locale);
      setLocale(locale);
    },
    [onChange, setLocale]
  );

  if (!locale) {
    return null;
  }

  return (
    <Box
      sx={{
        color: "white",
        textTransform: "none",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem",
        border: "1px solid white",
        borderRadius: "10px",
      }}
    >
      <LanguageIcon />
      <StyledSelect
        id="lang-select"
        value={locale}
        onChange={handleChange}
        inputProps={{
          MenuProps: {
            MenuListProps: {
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "red !important",
            color: "white",
          },
          ...sx,
        }}
      >
        {langOptions.map((lang) => (
          <MenuItem
            key={`lang-select-${lang.code}`}
            value={lang.code}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Typography
              color="white"
              fontSize="1rem"
              fontWeight={400}
              component="p"
            >
              {`${lang.name} / ${lang.flag}`}
            </Typography>
          </MenuItem>
        ))}
      </StyledSelect>
    </Box>
  );
};

export const StyledSelect = styled(Select)({
  "& fieldset": {
    border: "none",
  },
  "& .MuiSelect-select": {
    padding: "0.5rem!important",
    border: "none",
    transition: "all 0.15s ease-in",
  },
  "& .MuiSelect-select:hover": {
    border: "none",
  },
  "& .MuiSelect-icon": {
    display: "none",
  },
  "& .MuiSelect-root": {
    backgroundColor: "red",
  },
  // paper
  "& .MuiPopover-paper": {
    backgroundColor: "red !important",
    color: "white",
  },
});
