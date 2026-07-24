import type { Metadata, Viewport } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "sistema para pequenas lojas",
    "sistema para consultoras",
    "controle de vendas",
    "controle de parcelas",
    "cadastro de clientes",
    "controle de estoque",
    "sistema para revendedoras",
    "gestão de vendas",
    "vencimentos",
    "vendas parceladas",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: "VendeLeve" }],
  creator: "VendeLeve",
  publisher: "VendeLeve",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/brand/favicon.svg",
    apple: "/brand/icon-vendeleve.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "VendeLeve - Gestão simples para pequenas lojas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/twitter-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#d66b37",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
