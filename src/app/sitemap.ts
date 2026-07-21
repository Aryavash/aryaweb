import type { MetadataRoute } from "next";

const siteUrl = "https://aryaweb.be";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/diensten",
    "/diensten/webdesign",
    "/diensten/websiteontwikkeling",
    "/diensten/seo",
    "/portfolio",
    "/tarieven",
    "/faq",
    "/over-mij",
    "/contact",
    "/privacy",
    "/voorwaarden",
  ];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
