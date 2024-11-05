"use client";

import { useI18N } from "@/core/i18n/i18n-provider";

import { Box, Typography } from "@mui/material";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import { t } from "@/core/i18n/i18n";
import { PublicLayout } from "../components/layouts/public-layout";

export default function Page() {
  const { lang } = useI18N();

  const dataList = t("privacy_policy_data_content2_list", lang).split(",");
  const dataUsageList = t("privacy_policy_data_usage_list", lang).split(",");
  const policyList = t("privacy_policy_RGPD_list", lang).split(",");
  const dataRetentionList = t(
    "privacy_policy_data_retention_values",
    lang
  ).split(",");

  return (
    <PublicLayout privacyPolicy>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
        style={{
          margin: "8rem 2rem",
        }}
      >
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
            {t("privacy_policy_title", lang)}
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
            marginBottom="1rem"
          >
            {t("privacy_policy_title_intro", lang)}
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="black"
            fontFamily="Plus Jakarta Sans"
          >
            {t("privacy_policy_intro", lang)}
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
            marginBottom="1rem"
          >
            {t("privacy_policy_data_title", lang)}
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="black"
            fontFamily="Plus Jakarta Sans"
          >
            {t("privacy_policy_data_content", lang)}
          </Typography>
        </Box>
        {/* DATA COLLECTION */}
        <Box display="flex" flexDirection="row" height="100%" width="100%">
          <Typography
            fontSize="14px"
            fontWeight={700}
            color="black"
            fontFamily="Plus Jakarta Sans"
            marginBottom="1rem"
          >
            {t("privacy_policy_data_content1_title", lang)}
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="black"
            fontFamily="Plus Jakarta Sans"
          >
            {t("privacy_policy_data_content1_values", lang)}
          </Typography>
        </Box>
        {/* DATA COLLECTION */}
        <Box display="flex" flexDirection="column" height="100%" width="100%">
          <Typography
            fontSize="14px"
            fontWeight={700}
            color="black"
            fontFamily="Plus Jakarta Sans"
            marginBottom="1rem"
          >
            {t("privacy_policy_data_content2_title", lang)}
          </Typography>
          <List
            marker="disc"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}
          >
            {dataList.map((item, index) => (
              <ListItem key={index}>
                <Typography
                  fontSize="14px"
                  fontWeight={500}
                  color="black"
                  fontFamily="Plus Jakarta Sans"
                >
                  {item}
                </Typography>
              </ListItem>
            ))}
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
            marginBottom="1rem"
          >
            {t("privacy_policy_data_usage_title", lang)}
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="black"
            fontFamily="Plus Jakarta Sans"
          >
            {t("privacy_policy_data_usage_values", lang)}
          </Typography>
          <List marker="disc">
            {dataUsageList.map((item, index) => (
              <ListItem key={index}>
                <Typography
                  fontSize="14px"
                  fontWeight={500}
                  color="black"
                  fontFamily="Plus Jakarta Sans"
                >
                  {item}
                </Typography>
              </ListItem>
            ))}
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
            marginBottom="1rem"
          >
            {t("privacy_policy_data_sharing_title", lang)}
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="black"
            fontFamily="Plus Jakarta Sans"
          >
            {t("privacy_policy_data_sharing_values", lang)}
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
            marginBottom="1rem"
          >
            {t("privacy_policy_data_security_title", lang)}
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="black"
            fontFamily="Plus Jakarta Sans"
          >
            {t("privacy_policy_data_security_values", lang)}
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
            marginBottom="1rem"
          >
            {t("privacy_policy_RGPD_title", lang)}
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="black"
            fontFamily="Plus Jakarta Sans"
          >
            {t("privacy_policy_RGPD_values", lang)}
          </Typography>
          <List marker="disc">
            {policyList.map((item, index) => (
              <ListItem key={index}>
                <Typography
                  fontSize="14px"
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
            fontSize="14px"
            fontWeight={500}
            color="black"
            fontFamily="Plus Jakarta Sans"
          >
            {t("privacy_policy_RGPD_end", lang)}
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
            marginBottom="1rem"
          >
            {t("privacy_policy_data_retention_title", lang)}
          </Typography>
          <List>
            {dataRetentionList.map((item, index) => (
              <ListItem key={index}>
                <Typography
                  fontSize="14px"
                  fontWeight={500}
                  color="black"
                  fontFamily="Plus Jakarta Sans"
                >
                  {item}
                </Typography>
              </ListItem>
            ))}
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
            marginBottom="1rem"
          >
            {t("privacy_policy_modification_title", lang)}
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="black"
            fontFamily="Plus Jakarta Sans"
          >
            {t("privacy_policy_modification_values", lang)}
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
            marginBottom="1rem"
          >
            {t("privacy_policy_contact", lang)}
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="black"
            fontFamily="Plus Jakarta Sans"
          >
            {t("privacy_policy_values", lang)}
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={700}
            color="black"
            fontFamily="Plus Jakarta Sans"
          >
            {t("privacy_policy_contact_email", lang)}
          </Typography>
        </Box>
      </Box>
    </PublicLayout>
  );
}
