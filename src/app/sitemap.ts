import type { MetadataRoute } from "next";
import { getAllPosts } from "../lib/blog";

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
    "/blog",
    "/over-mij",
    "/contact",
    "/privacy",
    "/voorwaarden",
  ];
  const pages = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
  const posts = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }));
  return [...pages, ...posts];
}
