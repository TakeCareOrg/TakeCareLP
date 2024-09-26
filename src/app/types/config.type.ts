import { AvailableLang } from "./lang.types";

export interface EnvConfig {
  appUrl: string;
  apiHost: string;
  contactEmail: string;
  contactPhone: string;
  langs: AvailableLang[];
}
