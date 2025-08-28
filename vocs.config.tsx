// import * as React from "react";
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
  head() {
    const gtagScript = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GTM-NQXRVQ2');
      `;
    return (
      <>
        <script src="https://www.googletagmanager.com/gtag/js?id=GTM-NQXRVQ2" async />
        <script dangerouslySetInnerHTML={{ __html: gtagScript }} />
      </>
    );
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
