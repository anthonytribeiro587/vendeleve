import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VendeLeve",
    short_name: "VendeLeve",
    description: "Gestão simples para pequenas lojas",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf6",
    theme_color: "#d66b37",
    icons: [
      { src: "/brand/icon-vendeleve.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/brand/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },
    ],
  };
}
