import type { Sidebar } from "vocs";

export const sidebar = {
  "/": [
    {
      text: "Introduction",
      items: [
        { text: "Tokenization Cloud", link: "/introduction" },
        { text: "FAQ", link: "/faq" },
        { text: "Issuer Hub", link: "/issuer-hub" },
        { text: "Admin Portal", link: "/admin-portal" },
        { text: "Investor Portal", link: "/investor-portal" },
        { text: "Escrow Manager", link: "/escrow-manager" },
        { text: "KYC/AML Integration", link: "/kyc-aml-integration" },
        { text: "Secure Payments", link: "/secure-payments" },
        { text: "OnchainTA", link: "/onchainta" },
        { text: "Technical Support", link: "/technical-support" },
      ],
    },
    {
      text: "Platforms",
      items: [
        { text: "Akemona Core", link: "/platforms/akemona-core" },
        { text: "Akemona Cloud", link: "/platforms/akemona-cloud" },
        { text: "Akemona Enterprise", link: "/platforms/akemona-enterprise" },
        { text: "Akemona Launchpad", link: "/platforms/funding-portal" },
        { text: "AI FlowBook", link: "/platforms/flowbook" },
      ],
    },
  ],
} as const satisfies Sidebar;
