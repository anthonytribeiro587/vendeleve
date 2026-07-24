export const SITE_NAME = "VendeLeve";
export const SITE_TAGLINE = "Gestão simples para pequenas lojas";
export const SITE_DESCRIPTION =
  "Organize clientes, produtos, estoque, vendas, parcelas e vencimentos com o VendeLeve, um sistema simples para consultoras, revendedoras e pequenas lojas.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://vendeleve.vercel.app";

export const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

export const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Recursos", href: "#recursos" },
  { label: "Telas", href: "#telas" },
  { label: "Para quem é", href: "#publico" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;
