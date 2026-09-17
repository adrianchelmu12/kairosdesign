import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import sharp from "sharp";

export const runtime = "nodejs";
export const alt = "Kairos — Agenție de Web Design, Branding & Web Development";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  // Conversie și optimizare siglă oficială Kairos în format PNG de înaltă rezoluție
  const logoPath = path.join(process.cwd(), "public/logo.svg");
  const logoBuffer = await sharp(logoPath)
    .trim()
    .resize({ height: 120 })
    .png()
    .toBuffer();
  const logoDataUrl = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1f2421",
          padding: "60px 75px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Ambient background glow circles */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            backgroundColor: "#216869",
            opacity: 0.35,
            filter: "blur(130px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "80px",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            backgroundColor: "#49a078",
            opacity: 0.25,
            filter: "blur(130px)",
          }}
        />

        {/* Top Header - DOAR SIGLA KAIROS */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoDataUrl}
            height={62}
            alt="Kairos"
            style={{
              height: "62px",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Central Monumental Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div
            style={{
              fontSize: "58px",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              color: "#f3f7f4",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>CREĂM EXPERIENȚE DIGITALE.</span>
            <span style={{ color: "#49a078" }}>FĂRĂ COMPROMISURI.</span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "23px",
              fontWeight: 400,
              color: "#9cc5a1",
              maxWidth: "880px",
              lineHeight: 1.4,
            }}
          >
            <span>
              Web Design &bull; Branding &bull; Dezvoltare Web
            </span>
          </div>
        </div>

        {/* Bottom Bar with Pillars and Domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(73, 160, 120, 0.25)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <span style={{ color: "#f3f7f4", fontSize: "15px", fontWeight: 600 }}>
              UI / UX Design
            </span>
            <span style={{ color: "#49a078" }}>&bull;</span>
            <span style={{ color: "#f3f7f4", fontSize: "15px", fontWeight: 600 }}>
              Identitate de Brand
            </span>
            <span style={{ color: "#49a078" }}>&bull;</span>
            <span style={{ color: "#f3f7f4", fontSize: "15px", fontWeight: 600 }}>
              Web Development
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#49a078",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            <span>kairosdesign.ro</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
