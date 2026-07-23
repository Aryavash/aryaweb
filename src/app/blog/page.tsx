import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../../components/icons";
import { formatPostDate, getAllPosts } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Praktische tips over websites, online zichtbaarheid en groei voor lokale ondernemingen in België.",
};

export default function Blog() {
  const posts = getAllPosts();
  return (
    <>
      <section className="page-hero section-pad">
        <p className="section-kicker" data-reveal="1">
          BLOG
        </p>
        <h1 data-reveal="1">
          Inzichten voor
          <br />
          <em>lokale zaken.</em>
        </h1>
        <p data-reveal="1">
          Praktische tips over websites, online zichtbaarheid en groei — zonder
          jargon.
        </p>
      </section>
      <section className="section-pad list-section">
        <div className="blog-list">
          {posts.length === 0 ? (
            <p className="blog-empty">Binnenkort verschijnt hier het eerste artikel.</p>
          ) : (
            posts.map((post, i) => (
              <Link
                className="blog-row"
                data-reveal="1"
                data-index={i}
                href={`/blog/${post.slug}`}
                key={post.slug}
              >
                <span className="blog-date">{formatPostDate(post.date)}</span>
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
                <ArrowUpRight />
              </Link>
            ))
          )}
        </div>
      </section>
      <section className="cta-section section-pad">
        <p data-reveal="1">Liever meteen advies voor uw zaak?</p>
        <h2 data-reveal="1">
          We bekijken het
          <br />
          <em>samen.</em>
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
