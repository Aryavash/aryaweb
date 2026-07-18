import type { MetadataRoute } from "next";

const siteUrl = "https://www.aryaweb.be";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/portfolio", "/pricing", "/about", "/contact"];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
