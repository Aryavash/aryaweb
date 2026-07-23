import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// Posts are plain Markdown files in content/blog. The filename becomes the
// URL slug (e.g. content/blog/mijn-eerste-post.md -> /blog/mijn-eerste-post).
// Files starting with "_" (like _TEMPLATE.md) are ignored.
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd from frontmatter
};

export type Post = PostMeta & { html: string };

function readPostFile(file: string): { meta: PostMeta; content: string } {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: String(data.date ?? ""),
    },
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => readPostFile(f).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const file = `${slug}.md`;
  if (
    slug.startsWith("_") ||
    slug.includes("/") ||
    slug.includes("\\") ||
    slug.includes("..") ||
    !fs.existsSync(path.join(BLOG_DIR, file))
  ) {
    return null;
  }
  const { meta, content } = readPostFile(file);
  const html = marked.parse(content, { async: false }) as string;
  return { ...meta, html };
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("nl-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
