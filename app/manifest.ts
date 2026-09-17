import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kairos — Agenție de Web Design, Branding & Web Development",
    short_name: "Kairos",
    description:
      "Transformăm viziuni ambițioase în experiențe digitale memorabile. Web design avansat, branding strategic și dezvoltare web ultra-performantă.",
    start_url: "/",
    display: "standalone",
    background_color: "#1f2421",
    theme_color: "#1f2421",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

