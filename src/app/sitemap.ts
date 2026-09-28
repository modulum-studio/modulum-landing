import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: "https://modulumstudio.com", lastModified },
    { url: "https://modulumstudio.com/kompkit", lastModified },
    { url: "https://modulumstudio.com/privacy", lastModified },
  ];
}
