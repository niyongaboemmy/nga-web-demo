"use client";

import { ReactNode, useEffect } from "react";
import i18n from "../i18n";

interface I18nProviderProps {
  children: ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Get saved language from localStorage and initialize i18n with it
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
  }, []);

  return <>{children}</>;
}
