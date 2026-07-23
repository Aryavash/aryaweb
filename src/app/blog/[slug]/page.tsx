import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "../../../components/icons";
import { formatPostDate, getAllPosts, getPost } from "../../../lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog" };
  return { title: post.title, description: post.description };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="page-hero section-pad post-hero">
        <p className="section-kicker" data-reveal="1">
          BLOG / {formatPostDate(post.date)}
        </p>
        <h1 data-reveal="1">{post.title}</h1>
        <p data-reveal="1">{post.description}</p>
        <Link className="text-link line-link" data-reveal="1" href="/blog">
          ← Alle artikels
        </Link>
      </section>
      <section className="section-pad post-section">
        <article
          className="post-body"
          data-reveal="1"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </section>
      <section className="cta-section section-pad">
        <p data-reveal="1">Herkenbaar voor uw zaak?</p>
        <h2 data-reveal="1">
          Laten we er iets
          <br />
          <em>aan doen.</em>
        </h2>
        <Link
          className="button button-dark"
          data-reveal="1"
          data-magnet="pill"
          href="/contact"
        >
          Gratis kennismaking <ArrowUpRight />
        </Link>
      </section>
    </>
  );
}
