import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Transcribely Docs</span>,
  /* project: { */
  /*   link: 'https://github.com/shuding/nextra-docs-template', */
  /* }, */
  /* chat: { */
  /*   link: "https://discord.com", */
  /* }, */
  /* docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template', */
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
