import { defineConfig } from "vocs/config";
import { sidebar } from "./sidebar";

// Production by default; the dev2 deploy sets DOCS_BASE_URL to its own domain.
const baseUrl = process.env.DOCS_BASE_URL ?? "https://docs.akemona.com";

export default defineConfig({
  title: "Akemona",
  baseUrl,
  sidebar,
  iconUrl: "/favicon.ico",
  logoUrl: {
    light: "/images/app-logo-light.svg",
    dark: "/images/app-logo-dark.svg",
  },
  socials: [
    {
      icon: "github",
      link: "https://github.com/akemona",
    },
    {
      icon: "x",
      link: "https://x.com/AkemonaInc",
    },
  ],
  accentColor: "light-dark(#4f46e5, #c7d2fe)",
  topNav: [{ text: "Akemona", link: "https://akemona.com" }],
  renderStrategy: "full-static",
});
