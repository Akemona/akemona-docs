import { defineConfig } from "vocs/config";
import { sidebar } from "./sidebar";

// Production by default; the dev2 deploy sets DOCS_BASE_URL to its own domain.
const baseUrl = process.env.DOCS_BASE_URL ?? "https://docs.akemona.com";

// Google Analytics (gtag). Injected into every page's <head> via the `head`
// config — `head.script` appends both the async loader and the inline init.
// Vocs emits head tags in both <head> and the top of <body>; React dedupes the
// src-based loader but not inline scripts, so the init guards on a flag to fire
// `config` exactly once (avoids double-counting page views).
const GTM_ID = "GTM-NQXRVQ2";
const gtagInit = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
if (!window.__gtagInit) {
  window.__gtagInit = true;
  gtag('js', new Date());
  gtag('config', '${GTM_ID}');
}`;

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
  head: {
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`,
        async: true,
      },
      { innerHTML: gtagInit },
    ],
  },
});
