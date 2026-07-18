import type { MetadataRoute } from "next";

const siteUrl = "https://www.aryaweb.be";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/diensten",
    "/diensten/webdesign",
    "/diensten/websiteontwikkeling",
    "/diensten/seo",
    "/portfolio",
    "/tarieven",
    "/over-mij",
    "/contact",
    "/privacy",
  ];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
