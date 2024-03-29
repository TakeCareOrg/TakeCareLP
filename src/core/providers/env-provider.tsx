"use client";

import { createContext, useContext, useMemo } from "react";
import { EnvConfig } from "../types";

export const EnvContext = createContext({} as EnvConfig);

export const EnvProvider: React.FC<{
  config: string;
  children: React.ReactNode;
}> = ({ config, children }) => {
  const data = useMemo(() => JSON.parse(config), [config]);

  return (
    <EnvContext.Provider
      value={{
        appUrl: data.APP_URL || "",
        apiHost: data.API_HOST || "",
        contactEmail: data.CONTACT_EMAIL || "",
        contactPhone: data.APP_CONTACT_PHONE || "",
        langs: (data.APP_LANGS || "").split(","),
      }}
    >
      {children}
    </EnvContext.Provider>
  );
};

export const useEnv = () => useContext(EnvContext);
