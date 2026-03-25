import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://novarunnerbinding.com",
      lastModified: new Date(),
    },
  ];
}