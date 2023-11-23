import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Image alt="Logo" src="/white-logo.png" width="15" height="15" />
      <span>Transcribely Docs</span>
    </div>
  ),
  nextThemes: {
    defaultTheme: "dark",
    forcedTheme: "dark",
  },
  darkMode: true,
  footer: {
    text: (
      <div style={{ display: "flex", gap: "20px" }}>
        <span>Documentation for Transcribely</span>
        <span>
          <a
            style={{ fontWeight: "bold" }}
            href="https://shipvoid.com"
            target="_blank"
          >
            Buy this starter
          </a>
          .
        </span>
      </div>
    ),
  },
};

export default config;
