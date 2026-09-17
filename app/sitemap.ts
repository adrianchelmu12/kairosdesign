import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kairosdesign.ro";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/politica-de-confidentialitate`,
      lastModified: new Date("2026-09-17"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/termeni-si-conditii`,
      lastModified: new Date("2026-09-17"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
