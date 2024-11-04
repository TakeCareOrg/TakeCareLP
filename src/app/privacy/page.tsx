"use client";

import { useI18N } from "@/core/i18n/i18n-provider";
import { Translation, getTranslations } from "@/core/i18n/i18n";
import { Box, Typography } from "@mui/material";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";

export default function Page() {
  const { locale } = useI18N();
  const i18n = getTranslations("en");
  const t = (key: keyof Translation) => i18n[key];
  return (
    <>
      {/* TITLTE */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
      >
        <Typography
          fontSize={{ xs: "24px", md: "40px" }}
          fontWeight={700}
          color="black"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_title")}
        </Typography>
      </Box>
      {/* INTRO */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100%"
        width="100%"
      >
        <Typography
          fontSize={{ xs: "24px", md: "24px" }}
          fontWeight={700}
          color="black"
          textAlign="center"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_title_intro")}
        </Typography>
        <Typography
          fontSize={{ xs: "14px", md: "14px" }}
          fontWeight={500}
          color="black"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_intro")}
        </Typography>
      </Box>
      <br />
      {/* DATA COLLECTION */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100%"
        width="100%"
      >
        <Typography
          fontSize={{ xs: "24px", md: "24px" }}
          fontWeight={700}
          color="black"
          textAlign="center"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_data_title")}
        </Typography>
        <Typography
          fontSize={{ xs: "14px", md: "14px" }}
          fontWeight={500}
          color="black"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_data_content")}
        </Typography>
      </Box>
      {/* DATA COLLECTION */}
      <Box display="flex" flexDirection="row" height="100%" width="100%">
        <Typography
          fontSize={{ xs: "14px", md: "14px" }}
          fontWeight={700}
          color="black"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_data_content1_title")}
        </Typography>
        <Typography
          fontSize={{ xs: "14px", md: "14px" }}
          fontWeight={500}
          color="black"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_data_content1_values")}
        </Typography>
      </Box>
      {/* DATA COLLECTION */}
      <Box display="flex" flexDirection="column" height="100%" width="100%">
        <Typography
          fontSize={{ xs: "14px", md: "14px" }}
          fontWeight={700}
          color="black"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_data_content2_title")}
        </Typography>
        <List marker="disc">
          {(t("privacy_policy_data_content2_list") as string[]).map(
            (item, index) => (
              <ListItem key={index}>
                <Typography
                  fontSize={{ xs: "14px", md: "14px" }}
                  fontWeight={500}
                  color="black"
                  fontFamily="Plus Jakarta Sans"
                >
                  {item}
                </Typography>
              </ListItem>
            )
          )}
        </List>
      </Box>
      <br />
      {/* DATA USAGE */}
      <Box display="flex" flexDirection="column" height="100%" width="100%">
        <Typography
          fontSize={{ xs: "24px", md: "24px" }}
          fontWeight={700}
          color="black"
          fontFamily="Plus Jakarta Sans"
          textAlign="center"
        >
          {t("privacy_policy_data_usage_title")}
        </Typography>
        <Typography
          fontSize={{ xs: "14px", md: "14px" }}
          fontWeight={500}
          color="black"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_data_usage_values")}
        </Typography>
        <List marker="disc">
          {(t("privacy_policy_data_usage_list") as string[]).map(
            (item, index) => (
              <ListItem key={index}>
                <Typography
                  fontSize={{ xs: "14px", md: "14px" }}
                  fontWeight={500}
                  color="black"
                  fontFamily="Plus Jakarta Sans"
                >
                  {item}
                </Typography>
              </ListItem>
            )
          )}
        </List>
      </Box>
      <br />
      {/* DATA SHARING */}
      <Box display="flex" flexDirection="column" height="100%" width="100%">
        <Typography
          fontSize={{ xs: "24px", md: "24px" }}
          fontWeight={700}
          color="black"
          fontFamily="Plus Jakarta Sans"
          textAlign="center"
        >
          {t("privacy_policy_data_sharing_title")}
        </Typography>
        <Typography
          fontSize={{ xs: "14px", md: "14px" }}
          fontWeight={500}
          color="black"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_data_sharing_values")}
        </Typography>
      </Box>
      <br />
      {/* DATA SECURITY */}
      <Box display="flex" flexDirection="column" height="100%" width="100%">
        <Typography
          fontSize={{ xs: "24px", md: "24px" }}
          fontWeight={700}
          color="black"
          fontFamily="Plus Jakarta Sans"
          textAlign="center"
        >
          {t("privacy_policy_data_security_title")}
        </Typography>
        <Typography
          fontSize={{ xs: "14px", md: "14px" }}
          fontWeight={500}
          color="black"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_data_security_values")}
        </Typography>
      </Box>
      <br />
      {/* GDPR */}
      <Box display="flex" flexDirection="column" height="100%" width="100%">
        <Typography
          fontSize={{ xs: "24px", md: "24px" }}
          fontWeight={700}
          color="black"
          fontFamily="Plus Jakarta Sans"
          textAlign="center"
        >
          {t("privacy_policy_RGPD_title")}
        </Typography>
        <Typography
          fontSize={{ xs: "14px", md: "14px" }}
          fontWeight={500}
          color="black"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_RGPD_values")}
        </Typography>
        <List marker="disc">
          {(t("privacy_policy_RGPD_list") as string[]).map((item, index) => (
            <ListItem key={index}>
              <Typography
                fontSize={{ xs: "14px", md: "14px" }}
                fontWeight={500}
                color="black"
                fontFamily="Plus Jakarta Sans"
              >
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
        <Typography
          fontSize={{ xs: "14px", md: "14px" }}
          fontWeight={500}
          color="black"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_RGPD_end")}
        </Typography>
      </Box>
      <br />
      {/* DATA RETENTION */}
      <Box display="flex" flexDirection="column" height="100%" width="100%">
        <Typography
          fontSize={{ xs: "24px", md: "24px" }}
          fontWeight={700}
          color="black"
          fontFamily="Plus Jakarta Sans"
          textAlign="center"
        >
          {t("privacy_policy_data_retention_title")}
        </Typography>
        <List>
          {(t("privacy_policy_data_retention_values") as string[]).map(
            (item, index) => (
              <ListItem key={index}>
                <Typography
                  fontSize={{ xs: "14px", md: "14px" }}
                  fontWeight={500}
                  color="black"
                  fontFamily="Plus Jakarta Sans"
                >
                  {item}
                </Typography>
              </ListItem>
            )
          )}
        </List>
      </Box>
      <br />
      {/* CHANGE PRIVACY */}
      <Box display="flex" flexDirection="column" height="100%" width="100%">
        <Typography
          fontSize={{ xs: "24px", md: "24px" }}
          fontWeight={700}
          color="black"
          fontFamily="Plus Jakarta Sans"
          textAlign="center"
        >
          {t("privacy_policy_modification_title")}
        </Typography>
        <Typography
          fontSize={{ xs: "14px", md: "14px" }}
          fontWeight={500}
          color="black"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_modification_values")}
        </Typography>
      </Box>
      <br />
      {/* CONTACT */}
      <Box display="flex" flexDirection="column" height="100%" width="100%">
        <Typography
          fontSize={{ xs: "24px", md: "24px" }}
          fontWeight={700}
          color="black"
          fontFamily="Plus Jakarta Sans"
          textAlign="center"
        >
          {t("privacy_policy_contact")}
        </Typography>
        <Typography
          fontSize={{ xs: "14px", md: "14px" }}
          fontWeight={500}
          color="black"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_values")}
        </Typography>
        <Typography
          fontSize={{ xs: "14px", md: "14px" }}
          fontWeight={700}
          color="black"
          fontFamily="Plus Jakarta Sans"
        >
          {t("privacy_policy_contact_email")}
        </Typography>
      </Box>
    </>
  );
}
