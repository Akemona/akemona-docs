import { defineConfig } from "vocs";
import { sidebar } from "./sidebar";

export default defineConfig({
  rootDir: ".",
  title: "Akemona",
  ogImageUrl: null as any,
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
  theme: {
    accentColor: {
      light: "#4f46e5",
      dark: "#c7d2fe",
    },
  },
  topNav: [{ text: "Akemona", link: "https://akemona.com" }],
});
