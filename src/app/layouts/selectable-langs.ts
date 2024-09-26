import { AvailableLang, availableLangs } from "../types";

export const selectableLangs = Object.keys(availableLangs)
  .filter(
    (code) =>
      (process.env?.APP_LANGS || "fr,en").split?.(",").indexOf(code) > -1
  )
  .map((code) => availableLangs[code as AvailableLang]);
