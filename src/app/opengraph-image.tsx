import { ImageResponse } from "next/og";

export const alt =
  "Aryaweb — Professionele websites voor lokale ondernemingen in België";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social card: the two-square mark, the ARYAWEB wordmark and the
// tagline on the site's dark background. Colors mirror the site tokens.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#121110",
          color: "#ece7dc",
          padding: "90px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <div style={{ position: "relative", width: 96, height: 96, display: "flex" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 60,
                height: 60,
                borderRadius: 16,
                background: "#ece7dc",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 60,
                height: 60,
                borderRadius: 16,
                background: "#f2784b",
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: 78, fontWeight: 700, letterSpacing: "0.02em" }}>
            <span>ARYA</span>
            <span style={{ color: "#f2784b" }}>WEB</span>
          </div>
        </div>
        <div
          style={{
            marginTop: 46,
            maxWidth: 840,
            fontSize: 42,
            lineHeight: 1.3,
            color: "rgba(236, 231, 220, 0.68)",
          }}
        >
          Professionele websites voor lokale ondernemingen in België.
        </div>
      </div>
    ),
    size,
  );
}
