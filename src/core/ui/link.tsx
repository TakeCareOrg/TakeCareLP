import { styled } from "@mui/material";
import Link from "next/link";

export const StoreLink = styled(Link)({
  textDecoration: "none",
  color: "black",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem 1rem",
  borderRadius: "5px",
  backgroundColor: "white",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
});
